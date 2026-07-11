import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


const Number = ({ userData }) => {
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
                `https://api.jyotishamastroapi.com/api/numerology/number-analysis?name=${userData.name}&date=${formattedDate}&phone=${userData.phone}&lang=hi`,

                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );
            const result = await response.json();
            setData(result.response);
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }}

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

           <div className="max-w-5xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8 shadow-xl ">

               <h2 className=" text-center text-3xl font-bold text-yellow-400 mb-8 ">
                            🔢 Number Analysis
                        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

            <div className="border border-yellow-500 rounded-2xl p-5 text-center">

        <h3 className="text-gray-300">
                Destiny Number </h3>

               <p className="text-5xl text-yellow-400 font-bold">
                    {data.destinyNumber}
                        </p>
                </div>

        <div className="border border-yellow-500 rounded-2xl p-5 text-center">
            <h3 className="text-gray-300">
                Name Number
                   </h3>

                <p className="text-5xl text-yellow-400 font-bold">
                    {data.nameNumber}
                         </p>
                </div>


     <div className="border border-yellow-500 rounded-2xl p-5 text-center">

            <h3 className="text-gray-300">
                Radical Number
                        </h3>

        <p className="text-5xl text-yellow-400 font-bold">
                {data.radicalNumber}
                    </p></div>

    <div className="border border-yellow-500 rounded-2xl p-5 text-center">

        <h3 className="text-gray-300">
                Mobile Number
                         </h3>

            <p className="text-5xl text-yellow-400 font-bold">
               {data.mobileNumber}
                   </p>

                   </div>


        <div className="border border-yellow-500 rounded-2xl p-5 text-center">

            <h3 className="text-gray-300">
               Month Number
                   </h3>

            <p className="text-5xl text-yellow-400 font-bold">
                     {data.monthNumber}</p>

                </div>

        <div className="border border-yellow-500 rounded-2xl p-5 text-center">

           <h3 className="text-gray-300">
                   Year Number
                       </h3>

         <p className="text-5xl text-yellow-400 font-bold">
            {data.yearNumber}
                </p>

        </div>
        </div>

        <div className="mt-8 border border-yellow-500 rounded-2xl p-5 text-center ">

           <h3 className="text-xl text-gray-300">
                Western Zodiac Sign
                </h3>


           <p className="text-3xl font-bold text-yellow-400 mt-3 ">
                    ♒ {data.westernZodiacSign}
                </p>


        </div>
</div>

            )}
        </div>
        )}


export default Number;