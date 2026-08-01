import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
 import { API_BASE } from "../../config/api";


const YearlyChart = ({ userData }) => {
    const [yearChart, setYearChart] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchYearChart();
        }
    }, [userData]);


    const fetchYearChart = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;
            const currentYear = new Date().getFullYear();
            const varshDate = `${day}/${month}/${currentYear}`;

            const response = await fetch(
                `${API_BASE}/astro/lalKitab/varshphal_chart?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi&style=north&colored_planets=true&color=%2304de6f&varshphal_date=${varshDate}`);

            const result = await response.text();
            const cleanSvg = JSON.parse(result);

            setYearChart(cleanSvg);
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
        <div className="mt-10 flex justify-center">
            {
                yearChart && (
                    <div className="bg-white p-6 rounded-2xl shadow-xl ">
                        <div
                            className="[&>svg]:w-[330px] [&>svg]:h-[330px] " dangerouslySetInnerHTML={{
                                __html: yearChart
                            }} />

                    </div>
                )
            }
        </div>

    )
}

export default YearlyChart;