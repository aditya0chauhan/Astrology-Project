import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import PdfPayment from "../models/pdfPayment.js";
import { astroRequest } from "../services/astroService.js";

const PDF_REPORTS = {

  kundali_pdf: {
    title: "Kundali PDF",
    amount: 49900,
    endpoint: "generate",
    pdfType: "medium",
  },

  samyak_kundali: {
    title: "Samyak Kundali",
    amount: 49900,
    endpoint: "kundali_samyak",
  },

  advance_kundali: {
    title: "Advance Kundali",
    amount: 99900,
    endpoint: "generate",
    pdfType: "large",
  },

  dirgh_drishti: {
    title: "Dirgh Drishti Kundali",
    amount: 149900,
    endpoint: "kundali_dirghaDrishti",
  },

  foreign_travel: {
    title: "Kundali Foreign Travel Report",
    amount: 79900,
    endpoint: "foreign_travel_report",
  },
  government_job: {
    title: "Kundali Government Job Report",
    amount: 99900,
    endpoint: "government_job_report",
  },
  financial_opportunities: {
    title: "Financial Opportunities & Challenges",
    amount: 79900,
    endpoint: "financial_opportunities_and_challenges_report",
  },

  mul_patrika: {
    title: "Kundali Mul Patrika",
    amount: 199900,
    endpoint: "Kundali_moolPatrika",
  },

  matching_kundali: {
    title: "Matching Kundali PDF",
    amount: 49900,
    endpoint: "generate_matching",
  },

  vedic_5_year: {
    title: "Vedic 5 Year Prediction",
    amount: 110000,
    endpoint: "vedic_five_year_predictions",
  },

  vedic_10_year: {
    title: "Vedic 10 Year Prediction",
    amount: 210000,
    endpoint: "vedic_ten_year_predictions",
  },

  vedic_15_year: {
    title: "Vedic 15 Year Prediction",
    amount: 310000,
    endpoint: "vedic_fifteen_year_predictions",
  },

  destiny_of_heart: {
    title: "Destiny of the Heart",
    amount: 59900,
    endpoint: "destiny_of_heart",
  },

  career_success: {
    title: "Career Success & Advancement",
    amount: 69900,
    endpoint: "career_success",
  },

  numero_three_year: {
    title: "Numerology 3 Year Prediction",
    amount: 79900,
    endpoint: "numero_three_year_predictions",
  },

  numero_five_year: {
    title: "Numerology 5 Year Prediction",
    amount: 99900,
    endpoint: "numero_five_year_predictions",
  },

  numero_nine_year: {
    title: "Numerology 9 Year Prediction",
    amount: 149900,
    endpoint: "numero_nine_year_predictions",
  },

  startup_success: {
    title: "The Business Code",
    amount: 79900,
    endpoint: "startup_success",
  },

  motherhood_by_numbers: {
    title: "Motherhood by Numbers",
    amount: 69900,
    endpoint: "motherhood_by_numbers",
  },

  wellness_guide: {
    title: "Wellness by Numbers",
    amount: 69900,
    endpoint: "wellness_guide",
  },

  life_direction_2026: {
    title: "Life Direction & Purpose – 2026",
    amount: 79900,
    endpoint: "life_direction_report_2026",
  },

  personal_empowerment: {
    title: "Personal Empowerment & Confidence",
    amount: 59900,
    endpoint: "personal_empowerment_report",
  },
  education_learning: {
    title: "Education & Learning Pathways",
    amount: 79900,
    endpoint: "education_and_learning_pathways_report",
  },

  life_purpose: {
    title: "Kundali Life Purpose Report",
    amount: 79900,
    endpoint: "life_purpose_report",
  },

  decision_year_2026: {
    title: "2026 Decision Year Report",
    amount: 79900,
    endpoint: "decision_year_report_2026",
  },

  master_combo_2026: {
    title: "2026 Master Combo Report",
    amount: 149900,
    endpoint: "master_combo_report_2026",
  },
};

export const createPdfOrder = async (req, res) => {
  try {
    const { reportId } = req.body;

    const report = PDF_REPORTS[reportId];

    if (!report) {
      return res.status(400).json({
        success: false,
        message: "Invalid PDF report",
      });
    }

    const options = {
      amount: report.amount,
      currency: "INR",
      receipt: `pdf_${reportId}_${Date.now()}`,

      notes: {
        userId: req.userId,
        reportId,
        reportTitle: report.title,
      },
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      success: true,
      order,
      report: {
        id: reportId,
        title: report.title,
        amount: report.amount,
      },
    });
  } catch (error) {
    console.error("PDF Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create PDF order",
    });
  }
};


export const verifyPdfPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      reportId,
      userData,
      boyData,
      girlData,
    } = req.body;


    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !reportId
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details are incomplete",
      });
    }

    const report = PDF_REPORTS[reportId];

    if (!report) {
      return res.status(400).json({
        success: false,
        message: "Invalid PDF report",
      });
    }

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid Payment Signature",
      });
    }


    const order = await razorpay.orders.fetch(
      razorpay_order_id
    );

    if (
      order.amount !== report.amount ||
      order.currency !== "INR" ||
      order.notes?.userId !== req.userId ||
      order.notes?.reportId !== reportId
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid PDF payment order",
      });
    }

    const existingPayment = await PdfPayment.findOne({
      razorpay_payment_id,
    });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "Payment already processed",
      });
    }

    if (reportId === "matching_kundali") {
      if (!boyData || !girlData) {
        return res.status(400).json({
          success: false,
          message: "Boy and girl data are required for matching PDF",
        });
      }

      if (
        !boyData.name ||
        !boyData.dob ||
        !boyData.time ||
        boyData.latitude === undefined ||
        boyData.longitude === undefined ||
        !boyData.place
      ) {
        return res.status(400).json({
          success: false,
          message: "Incomplete boy data for matching PDF",
        });
      }

      if (
        !girlData.name ||
        !girlData.dob ||
        !girlData.time ||
        girlData.latitude === undefined ||
        girlData.longitude === undefined ||
        !girlData.place
      ) {
        return res.status(400).json({
          success: false,
          message: "Incomplete girl data for matching PDF",
        });
      }
    } else {
      if (!userData) {
        return res.status(400).json({
          success: false,
          message: "User data is required for PDF generation",
        });
      }

      if (
        !userData.name ||
        !userData.dob ||
        !userData.time ||
        userData.latitude === undefined ||
        userData.longitude === undefined ||
        !userData.place
      ) {
        return res.status(400).json({
          success: false,
          message: "Incomplete user data for PDF generation",
        });
      }
    }


    let pdfEndpoint;

    if (reportId === "matching_kundali") {
      const [by, bm, bd] = boyData.dob.split("-");
      const [gy, gm, gd] = girlData.dob.split("-");

      pdfEndpoint =
        `/api/pdf/generate_matching` +
        `?boy_name=${encodeURIComponent(boyData.name)}` +
        `&boy_dob=${bd}/${bm}/${by}` +
        `&boy_tob=${encodeURIComponent(boyData.time)}` +
        `&boy_tz=5.5` +
        `&boy_lat=${boyData.latitude}` +
        `&boy_lon=${boyData.longitude}` +
        `&boy_place=${encodeURIComponent(boyData.place)}` +
        `&girl_name=${encodeURIComponent(girlData.name)}` +
        `&girl_dob=${gd}/${gm}/${gy}` +
        `&girl_tob=${encodeURIComponent(girlData.time)}` +
        `&girl_tz=5.5` +
        `&girl_lat=${girlData.latitude}` +
        `&girl_lon=${girlData.longitude}` +
        `&girl_place=${encodeURIComponent(girlData.place)}` +
        `&lang=hi` +
        `&style=north` +
        `&company_name=${encodeURIComponent("Manoj Astro")}` +
        `&company_address=${encodeURIComponent(
          "Rajasthan, India"
        )}` +
        `&company_email=${encodeURIComponent(
          "manojshastriastrologer45@gmail.com"
        )}` +
        `&company_phone=${encodeURIComponent(
          "8882532259"
        )}` +
        `&company_website=${encodeURIComponent(
          "https://astromanoj.com"
        )}` +
        `&watermark=true`;

    } else {
      const [year, month, day] =
        userData.dob.split("-");

      const formattedDate =
        `${day}/${month}/${year}`;

      pdfEndpoint =
        `/api/pdf/${report.endpoint}` +
        `?name=${encodeURIComponent(userData.name)}` +
        `&date=${formattedDate}` +
        `&time=${encodeURIComponent(userData.time)}` +
        `&lat=${userData.latitude}` +
        `&lon=${userData.longitude}` +
        `&tz=5.5` +
        `&lang=hi` +
        `&style=north` +
        `&place=${encodeURIComponent(userData.place)}` +
        `&company_name=${encodeURIComponent(
          "Manoj Astro"
        )}` +
        `&company_address=${encodeURIComponent(
          "Rajasthan, India"
        )}` +
        `&company_email=${encodeURIComponent(
          "manojshastriastrologer45@gmail.com"
        )}` +
        `&company_phone=${encodeURIComponent(
          "8882532259"
        )}` +
        `&company_website=${encodeURIComponent(
          "https://astromanoj.com"
        )}` +
        `&watermark=true`;

      if (report.pdfType) {
        pdfEndpoint +=
          `&pdf_type=${encodeURIComponent(
            report.pdfType
          )}`;
      }
    }
    const pdfData = await astroRequest(pdfEndpoint);

    console.log(
      "Jyotisham PDF Response:",
      pdfData
    );

    if (!pdfData) {
      return res.status(500).json({
        success: false,
        message: "PDF generation failed",
      });
    }


    await PdfPayment.create({
      user: req.userId,
      razorpay_order_id,
      razorpay_payment_id,
      reportId,
      reportTitle: report.title,
      amount: report.amount,
      currency: "INR",
      status: "Success",
      method: "Razorpay",
    });


    return res.status(200).json({
      success: true,
      message:
        "PDF Payment Verified Successfully",
      reportId,
      pdf: pdfData,
    });

  } catch (error) {
    console.error(
      "PDF Payment Verification Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "PDF Payment Verification Failed",
    });
  }
};