import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


const PlaneDetails = ({ userData }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
        }
    }, [userData]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/numerology/plane-details?date=${formattedDate}&gender=${userData.gender}&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );

            const result = await response.json();
            if (result.response) {
                setData(result.response);
            }
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
    </div>
    return (
        <div className="mt-10 px-5 text-white min-h-screen flex justify-center items-center">

            {
                loading && <Loader />
            }
            {
                !loading && data && (


        <div className="max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8 "> 

            <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10 ">
                🌌 Plane Details
                        </h2>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
               {
                    Object.values(data).map((item, index) => (
                      <div key={index} 
                        className=" border border-yellow-500 rounded-2xl p-5 bg-[#020817] ">

                    <h3 className="text-2xl font-bold text-yellow-400 mb-3 ">
                        {item.planeName}
                        </h3>

                <div className="mb-4">
                    <p className="text-gray-300 mb-2">
                  Strength : {item.percentage}%
                        </p>


               <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden ">
                    <div className=" h-full bg-yellow-400 rounded-full " 
                    style={{width: `${item.percentage}%`}}></div>

                </div>
                </div>

        <p className="text-gray-300 mb-2">
            🔢 Plane Numbers :
        
         <span className="text-yellow-400">
                        {" "}{item.planeNumber}
                    </span>

                </p>

            <p className="text-gray-300 mb-3">

                 ⭐ {item.weightage}
                        </p>

        <p className="text-gray-400 leading-7 ">
                {item.description}
                        </p>

            </div>

    ))

        }
     </div>
        </div>

        )}
</div>

    )}

export default PlaneDetails;