import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


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
`/.netlify/functions/proxy/api/numerology/vehicle-analysis?vehicle=${vehicleData.vehicle}&lang=hi`);



const result = await response.json();
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

return <Loader/>

}





return (

<div className="mt-10 text-white">


{
data && (

<div className="
max-w-4xl
mx-auto
border
border-yellow-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
text-yellow-400
font-bold
mb-5
">

🚗 Vehicle Analysis

</h2>



<p>
Vehicle Number : {data.vehicleNumber}
</p>


<p>
Number : {data.vehicleNumberSum}
</p>



<p className="mt-5 leading-8 text-gray-300">

{data.description}

</p>



</div>

)

}


</div>

)

}


export default VehicleAnalysis;