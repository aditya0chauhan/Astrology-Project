import { useState } from "react";
import Loader from "../../utils/buttons/Loader";
// import { generateMatchingPdfReport } from "../pdf/pdfReports";

const MatchingPdf = ({ boyData, girlData }) => {
  const [loading, setLoading] = useState(false);

  const handleMatchingPdf = async () => {
    try {
      setLoading(true);

      const result = await generateMatchingPdfReport(
        "generate_matching",
        boyData,
        girlData
      );

      console.log(result);

      // Abhi sirf testing
      if (result?.url) {
        console.log("Generated URL =>", result.url);

        // Future me fetch uncomment hoga to yeh chalega
        if (result.downloadUrl) {
          window.open(result.downloadUrl, "_blank", "noopener,noreferrer");
        }
      }
       window.open(result.downloadUrl, "_blank", "noopener,noreferrer");

    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <button
        onClick={handleMatchingPdf}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold cursor-pointer disabled:opacity-60"
      >
        {loading ? <Loader /> : "📄 Download Matching PDF"}
      </button>
    </div>
  );
};

export default MatchingPdf;