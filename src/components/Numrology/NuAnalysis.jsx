import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";

const NuAnalysis = ({userData}) => {
     const [data, setData] = useState(null);
     const [year, setYear] = useState(null);
     const [masterNumber, setMasterNumber] = useState(null)
    const [loading, setLoading] = useState(false);

        useEffect(() => {
        if (userData) {
            fetchData();
            fetchMasterNumber()
            personalYear()
        }
    }, [userData]);

     const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `${API_BASE}/astro/numerology/karmic-number?date=${formattedDate}&lang=hi`);

            const result = await response.json();
            setData (result.response)
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    const personalYear = async () =>{
          setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const yearResponse = await fetch(
                `${API_BASE}/astro/numerology/personal-year?date=${formattedDate}&gender=${userData.gender}&lang=hi`);

            const result = await yearResponse.json();
            setYear (result.response)
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }
    const fetchMasterNumber = async () =>{
          setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const master = await fetch(
                `${API_BASE}/astro/numerology/master-numbers?date=${formattedDate}&lang=hi`);

            const result = await master.json();
            setMasterNumber (result.response)
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

<div className="mt-10 max-w-5xl mx-auto px-4">

{
data && (

<div
className="
bg-[#111827]
border
border-amber-400
rounded-2xl
p-6
shadow-xl
text-white
"
>

<h2
className="
text-2xl
font-bold
text-amber-400
mb-6
text-center
"
>
🔢 कार्मिक नंबर
</h2>


<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
mb-5
"
>

<p className="
text-orange-400
font-semibold
text-lg
mb-2
">
✨ कर्मिक नंबर सूची
</p>


<p className="
text-xl
font-bold
text-white
">

{data.karmicNumbers}

</p>
</div>



<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
"
>

<p className="
text-orange-400
font-semibold
text-lg
mb-2
">
📜 विवरण
</p>


<p className="
leading-8
text-gray-200
"
>

{data.karmicNumber.message}

</p>


</div>


</div>

)
}

{
masterNumber && (

<div
className="
bg-[#111827]
border
border-amber-400
rounded-2xl
p-6
shadow-xl
text-white
mt-8
"
>

<h2
className="
text-2xl
font-bold
text-amber-400
mb-6
text-center
"
>
🌟 मास्टर नंबर
</h2>


<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
mb-5
"
>

<h3
className="
text-orange-400
font-bold
text-xl
mb-3
"
>
🚗 मास्टर ड्राइवर नंबर
</h3>

<p
className="
leading-8
text-gray-200
"
>
{masterNumber.master_driver.message}
</p>

</div>



<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
"
>

<h3
className="
text-orange-400
font-bold
text-xl
mb-3
"
>
🎯 मास्टर कंडक्टर नंबर
</h3>


<p
className="
leading-8
text-gray-200
"
>
{masterNumber.master_conductor.message}
</p>


</div>


</div>

)
}

{
year && (

<div
className="
bg-[#111827]
border
border-amber-400
rounded-2xl
p-6
shadow-xl
text-white
mt-8
"
>

<h2
className="
text-2xl
font-bold
text-amber-400
mb-6
text-center
"
>
📅 व्यक्तिगत वर्ष
</h2>


<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
mb-5
"
>

<p className="
text-orange-400
font-semibold
text-lg
mb-2
">
✨ Personal Year Number
</p>

<p className="
text-3xl
font-bold
text-white
">
{year.personalYear}
</p>

</div>



<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
mb-5
"
>

<h3 className="
text-xl
font-bold
text-amber-400
mb-3
">
{year.description.title}
</h3>

<p className="
leading-8
text-gray-200
">
{year.description.description}
</p>

</div>



<div
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
"
>

<h3 className="
text-xl
font-bold
text-amber-400
mb-3
">
🍀 {year.luckFactorDetails.title}
</h3>


{
year.luckFactorDetails.descriptions.map((item,index)=>(

<p
key={index}
className="
leading-8
text-gray-200
mb-2
"
>

⭐ {item}

</p>

))

}


</div>


</div>

)
}

</div>

)
}

export default NuAnalysis