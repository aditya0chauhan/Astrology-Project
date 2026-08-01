import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";


const Dashkoot = ({ boyData, girlData }) => {
    const [dashkoot, setDashkoot] = useState(null);
    const [loading, setLoading] = useState(false);

    const dashkootMilan = async () => {
        try {
            setLoading(true)
            const boyDob = boyData.dob.replace(/-/g, "/");
            const girlDob = girlData.dob.replace(/-/g, "/");

            const response = await fetch(
                `${API_BASE}/astro/matching/dashakoot-astro?boy_dob=${boyDob}&boy_tob=${boyData.time}&boy_lat=${boyData.latitude}&boy_lon=${boyData.longitude}&boy_tz=5.5&girl_dob=${girlDob}&girl_tob=${girlData.time}&girl_lat=${girlData.latitude}&girl_lon=${girlData.longitude}&girl_tz=5.5&lang=hi`);

            const json = await response.json();
            setDashkoot(json.response)

        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            boyData.latitude &&
            girlData.latitude
        ) {
            dashkootMilan();
        }
    }, [boyData.latitude, girlData.latitude]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!dashkoot) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }

    return (
      <div className="mt-10 text-white">
     
         <div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">
        <h1 className="text-3xl font-bold text-center text-amber-400">
              दशकूट गुण मिलान
                 </h1>

    <div className="mt-8 bg-[#243454] rounded-xl p-6">

     <h2 className="text-2xl text-green-400 font-bold">
       कुल स्कोर
        </h2>
          <p className="text-5xl text-amber-400 font-bold mt-3">
              {dashkoot.score} </p>

          <p className="mt-5 text-gray-300">
           {dashkoot.bot_response}</p>
              </div>
            </div>           

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
             dashkoot.dina,
             dashkoot.gana,
             dashkoot.mahendra,
             dashkoot.sthree,
             dashkoot.yoni,
             dashkoot.rasi,
             dashkoot.rasiathi,
             dashkoot.rajju,
             dashkoot.vedha,
             dashkoot.vasya,
            ]
       .filter(Boolean)
           .map((item, index) => (
        <div key={index}
            className="bg-[#243454] rounded-xl p-5 border border-amber-400">

             <h3 className="text-xl font-bold text-amber-400 mb-3">
               {item?.name}
         </h3>
            {item.boy_star && (
             <p>
             <b>वर :</b> {item.boy_star}
                </p>
                    )}
        {item.girl_star && (
             <p><b>वधू :</b> {item.girl_star}</p>
              )}
          
           {
              item.boy_rasi && (
              <p> <b>वर राशि :</b>
               {item.boy_rasi}
                   </p>
                 ) }

           {
             item.girl_rasi && (
           <p>
              <b>वधू राशि :</b> {item.girl_rasi}
                </p> ) }
              {
              item.boy_lord && (
               <p>
                   <b>वर स्वामी :</b> {item.boy_lord}
               </p>
              )}

         { item.girl_lord && (
            <p> <b>वधू स्वामी :</b> 
            {item.girl_lord}
                  </p>
                     ) }

    <p className="text-green-400 font-bold mt-3">
      अंक : {
             item.dina ||
             item.gana ||
             item.mahendra ||
             item.sthree ||
             item.yoni ||
             item.rasi ||
             item.rasiathipathi ||
             item.rajju ||
             item.vedha ||
             item.vasya
            } / {item.full_score}
                </p>

       <p className="text-gray-300 text-sm mt-3">
         {item.description}
             </p>
          </div>
  ))}
            </div>
        </div>
            );
};

    export default Dashkoot;