import { API_BASE } from "../../config/api";

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

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to generate PDF");
    }

    const result = await response.json();

    console.log("Jyotisham PDF Response:", result);

    return result;

  } catch (error) {
    console.log("PDF Error =>", error);
  }
};


export const generateMatchingPdfReport = async (
  boyData,
  girlData
) => {
  const [by, bm, bd] = boyData.dob.split("-");
  const [gy, gm, gd] = girlData.dob.split("-");

  const url =
    `${API_BASE}/astro/pdf/generate_matching` +
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
    `&company_address=${encodeURIComponent("Rajasthan, India")}` +
    `&company_email=${encodeURIComponent("manojshastriastrologer45@gmail.com")}` +
    `&company_phone=${encodeURIComponent("8882532259")}` +
    `&company_website=${encodeURIComponent("https://astromanoj.com")}` +
    `&watermark=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Matching PDF generate nahi ho payi.");
  }

  return await response.json();
};


