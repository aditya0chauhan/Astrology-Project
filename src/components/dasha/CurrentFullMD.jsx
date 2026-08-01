import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";

const CurrentFullMD = ({ userData }) => {
  const { t, i18n } = useTranslation();
  const [mahadashaFull, setMahadashaFull] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openSection, setOpenSection] = useState("mahadasha");

  useEffect(() => {
    if (!userData) return;

    const { formattedDate, time, latitude, longitude } = userData;

    const fetchfullMahadasha = async () => {
      try {
        setLoading(true);

        const data = await fetch(
            `${API_BASE}/astro/dasha/current-mahadasha-full?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`)

        const fullDasha = await data.json();
        setMahadashaFull(fullDasha.response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchfullMahadasha();
  }, [userData, i18n.language]);

 if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

  if (!mahadashaFull) {
  return  <div className="text-center text-red-400 mt-10">
      {t("noDataAvailable")}
    </div>
}

  const fullMahadasha = [
  {
    id: "mahadasha",
    title: t("mahadasha"),
    data: mahadashaFull.mahadasha,
  },
  {
    id: "antardasha",
    title: t("antardasha"),
    data: mahadashaFull.antardasha,
  },
  {
    id: "paryantardasha",
    title: t("paryantardasha"),
    data: mahadashaFull.paryantardasha,
  },
  {
    id: "Shookshamadasha",
    title: t("shookshamaDasha"),
    data: mahadashaFull.Shookshamadasha,
  },
  {
    id: "Pranadasha",
    title: t("pranaDasha"),
    data: mahadashaFull.Pranadasha,
  },
];

  return (
      <div className="mt-16">

<h2 className="text-3xl font-bold text-center text-amber-400 mt-24 my-5">

{t("fullDashaDetails")}

</h2>

<div className="space-y-5">

{fullMahadasha.map((dasha)=>(

<div
key={dasha.id}
className="rounded-xl border border-amber-400 bg-[#1A2742] overflow-hidden"
>

<button
className="w-full flex justify-between items-center px-6 py-5 text-left"
onClick={()=>setOpenSection(
openSection===dasha.id
?null
:dasha.id
)}
>

<span className="text-xl font-bold text-amber-300">

{dasha.title}

</span>

<span className="text-2xl">

{openSection===dasha.id ? "−" : "+"}

</span>

</button>

{openSection===dasha.id && (

<div className="px-6 pb-6">

<div className="space-y-4">

{dasha.data.map((item,index)=>(

<div
key={index}
className="border-l-4 border-amber-400 pl-5 py-3 relative"
>

<div className="absolute -left-[10px] top-6 h-4 w-4 rounded-full bg-amber-400"></div>

<h3 className="text-lg font-semibold text-white">

{item.name}

</h3>

<p className="text-green-300">

{t("start")}: {item.start}

</p>

<p className="text-red-300">

{t("end")}: {item.end}

</p>

</div>

))}

</div>

</div>

)}

</div>

))}

</div>

</div>
  );
};

export default CurrentFullMD;