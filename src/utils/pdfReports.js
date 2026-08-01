import { API_BASE } from "../../src/config/api";
export const generatePdfReport = async (endpoint, userData, pdfType = null) => {
  try {

    const [year, month, day] = userData.dob.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    let url =
      `${API_BASE}/astro/pdf/${endpoint}` +
      `?name=${encodeURIComponent(userData.name)}` +
      `&date=${formattedDate}` +
      `&time=${encodeURIComponent(userData.time)}` +
      `&lat=${userData.latitude}` +
      `&lon=${userData.longitude}` +
      `&tz=5.5` +
      `&lang=hi` +
      `&style=north` +
      `&place=${encodeURIComponent(userData.place)}` +
      `&company_name=${encodeURIComponent("Manoj Astro")}` +
      `&company_address=${encodeURIComponent("Rajasthan, India")}` +
      `&company_email=${encodeURIComponent("manojshastriastrologer45@gmail.com")}` +
      `&company_phone=${encodeURIComponent("8882532259")}` +
      `&company_website=${encodeURIComponent("https://astromanoj.com")}`;

    if (pdfType) {
      url += `&pdf_type=${encodeURIComponent(pdfType)}`;
      url += `&watermark=true`;
    }

    // const response = await fetch(url);

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(errorText || "Failed to generate PDF");
    // }

    // const result = await response.json();
    // return result;

  } catch (error) {
    console.log("PDF Error =>", error);
  }
};
