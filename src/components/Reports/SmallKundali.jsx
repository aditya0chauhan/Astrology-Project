import { FaFilePdf } from "react-icons/fa";
import { generatePdfReport } from "../../utils/pdfReports";
import { GenrateReport,Whatsapp } from "../../utils/buttons/Genrate";
import { useState } from "react";
import Loader from '../../utils/buttons/Loader';


const SmallKundali = ({ userData }) => {
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        try {
            setLoading(true)
            const result = await generatePdfReport("generate", userData, "small");
            if (!result || !result.downloadUrl) {
                 alert("📄 technical error 🙏");
                return;
            }
            window.open(result.downloadUrl, "_blank", "noopener,noreferrer");

        } catch (error) {
            console.error("Generate Report Error =>", error);
            alert(error.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };

    return (
       <div></div>
    );
};

export default SmallKundali;