import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";


const VehicleAnalysis = ({vehicleData}) => {

const [data,setData] = useState(null);
const [loading,setLoading] = useState(false);



useEffect(()=>{

if(vehicleData){
fetchVehicle();
}
},[vehicleData]);

const fetchVehicle = async()=>{

setLoading(true);

try{
const response = await fetch(
`${API_BASE}/astro/numerology/vehicle-analysis?vehicle=${vehicleData.vehicle}&lang=hi`);
const result = await response.json();
console.log(result.response)
setData(result.response);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}




if(loading){

return ( 
<div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
    </div>
    )}





return (
  <div className="mt-10 text-white">

    {data && (
      <div className="max-w-5xl mx-auto border border-yellow-500 rounded-3xl p-8 bg-[#111827]">

        <h2 className="text-3xl text-yellow-400 font-bold mb-8">
          🚗 Vehicle Analysis
        </h2>

        <div className="space-y-3">

          <p>
            <span className="text-yellow-400 font-semibold">
              Vehicle Number :
            </span>{" "}
            {data.vehicleNumber}
          </p>

          <p>
            <span className="text-yellow-400 font-semibold">
              Vehicle Sum :
            </span>{" "}
            {data.vehicleNumberSum}
          </p>

          <p>
            <span className="text-yellow-400 font-semibold">
              Description :
            </span>{" "}
            {data.vehicleNumberDescriptions}
          </p>

          <p>
            <span className="text-yellow-400 font-semibold">
              Negative Numbers :
            </span>{" "}
            {data.negativeNumbers}
          </p>

          <p>
            <span className="text-yellow-400 font-semibold">
              Missing Pairs :
            </span>{" "}
            {data.pairsOfThree}
          </p>

        </div>

        <div className="mt-8">

          <h3 className="text-2xl text-yellow-400 font-bold mb-4">
            Individual Digit Analysis
          </h3>

          <div className="space-y-4">

            {data.individualDigitAnalysis?.map((item, index) => (

              <div
                key={index}
                className="border border-gray-700 rounded-xl p-4"
              >

                <p>
                  <span className="text-yellow-400 font-semibold">
                    Digit :
                  </span>{" "}
                  {item.digit}
                </p>

                <p className="mt-2 text-gray-300">
                  {item.meaning}
                </p>

              </div>

            ))}

          </div>

        </div>


        <div className="mt-8">

          <h3 className="text-2xl text-yellow-400 font-bold mb-4">
            Vehicle Number Result
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">

            {data.vehicleNumberSumResult?.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>
    )}

  </div>
);

}


export default VehicleAnalysis;