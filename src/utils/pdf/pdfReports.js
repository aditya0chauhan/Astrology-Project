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

    // const response = await fetch(url);

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(errorText || "Failed to generate PDF");
    // }

    // const result = await response.json();
    // return result;
    return {
      success: true,
      url,
    };

  } catch (error) {
    console.log("PDF Error =>", error);
  }
};


export const generateMatchingPdfReport = async (
  endpoint,
  boyData,
  girlData
) => {
  try {
    const [by, bm, bd] = boyData.dob.split("-");
    const boyDob = `${bd}/${bm}/${by}`;

    const [gy, gm, gd] = girlData.dob.split("-");
    const girlDob = `${gd}/${gm}/${gy}`;

    const url =
      `${API_BASE}/astro/pdf/${endpoint}` +
      `?boy_name=${encodeURIComponent(boyData.name)}` +
      `&boy_dob=${boyDob}` +
      `&boy_tob=${encodeURIComponent(boyData.time)}` +
      `&boy_tz=5.5` +
      `&boy_lat=${boyData.latitude}` +
      `&boy_lon=${boyData.longitude}` +
      `&boy_place=${encodeURIComponent(boyData.place)}` +

      `&girl_name=${encodeURIComponent(girlData.name)}` +
      `&girl_dob=${girlDob}` +
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

    // const response = await fetch(url);

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(errorText || "Failed to generate matching PDF");
    // }

    // return await response.json();
    return {
      success: true,
      url,
    };

  } catch (error) {
    console.error("Matching PDF Error =>", error);
    throw error;
  }
};

