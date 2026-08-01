import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";

const LalChart = ({ userData }) => {
    const [chart, setChart] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchChart();
        }
    }, []);


    const fetchChart = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;
            

            const response = await fetch(
                `${API_BASE}/astro/lalKitab/chart?tz=5.5&colored_planets=true&color=%23E96B02&style=north&date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&lang=hi`);

            const result = await response.text();
            const cleanSvg = JSON.parse(result);

            setChart(cleanSvg);
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    }



    if (loading) return (
      <div className='min-h-[50vh] w-full flex justify-center items-center mt-10 rounded-xl bg-[#0f172a] p-6'>
        <Loader />
      </div>
    )


    return (
        <div className=" flex justify-center">
            {
                chart && (
                <div className="bg-white p-6 rounded-2xl shadow-xl ">
                    <div
                        className="[&>svg]:w-[330px] [&>svg]:h-[330px] "dangerouslySetInnerHTML={{
                        __html: chart
                            }}/>

                    </div>
                )
            }
        </div>

    )
}

export default LalChart;