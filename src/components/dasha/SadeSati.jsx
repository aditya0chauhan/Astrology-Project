import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";

const SadeSati = ({ userData }) => {
    const { t, i18n } = useTranslation();
    const [sadeSati, setSadeSati] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;
        const activeLang = i18n.resolvedLanguage || i18n.language || "en";
        const apiLang = activeLang.toLowerCase().startsWith("hi") ? "hi" : "en";
        let isCancelled = false;

        const fetchSadeSati = async () => {
            try {
                setSadeSati(null);
                setLoading(true);

                const response = await fetch(
                    `/.netlify/functions/proxy/api/extended_horoscope/current_sadesati?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${apiLang}`);

                const dosha = await response.json();

                if (!isCancelled) {
                    setSadeSati(dosha?.response ?? null);
                }
            } catch (err) {
                console.log(err);
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchSadeSati();

        return () => {
            isCancelled = true;
        };
    }, [userData, i18n.language, i18n.resolvedLanguage]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!sadeSati) {
        return <div className="text-center text-red-400 mt-10">
            {t("noDataAvailable")}
        </div>
    }

    return (

<div className="mt-10 px-5 text-white">


{
loading && <Loader/>
}


{
!loading && sadeSati && (


<div className="
max-w-5xl
mx-auto
bg-[#050b20]
border
border-yellow-500
rounded-3xl
p-8
shadow-xl
">


<h2 className="
text-center
text-3xl
font-bold
text-yellow-400
mb-8
">
🪐 {t("sadeSatiReport")}
</h2>



{/* Status Card */}

<div className="
border
border-yellow-500
rounded-2xl
p-6
mb-6
text-center
">


<h3 className="text-xl text-gray-300">
{t("sadeSatiStatus")}
</h3>


<p className="
text-3xl
font-bold
text-yellow-400
mt-3
">

{
sadeSati.is_sade_sati_period
?
t("running")
:
t("notRunning")
}

</p>


</div>






<div className="
grid
md:grid-cols-3
gap-5
mb-8
">


<div className="border border-yellow-500 rounded-xl p-5 text-center">

<p className="text-gray-300">
{t("age")}
</p>

<h3 className="text-3xl text-yellow-400">
{sadeSati.age}
</h3>

</div>

<div className="border border-yellow-500 rounded-xl p-5 text-center">

<p className="text-gray-300">
{t("shaniPeriod")}
</p>

<h3 className="text-xl text-yellow-400">
{sadeSati.shani_period_type}
</h3>

</div>


</div>





{/* Description */}


<div className="
border
border-yellow-500
rounded-2xl
p-6
mb-8
">


<h3 className="
text-2xl
text-yellow-400
mb-3
">
📜 {t("description")}
</h3>


<p className="
text-gray-300
leading-8
">

{sadeSati.description}

</p>


</div>







{/* Remedies */}



<div>


<h3 className="
text-2xl
text-yellow-400
mb-5
">
🙏 {t("remedies")}
</h3>



<div className="space-y-4">


{
sadeSati.remedies?.map((item,index)=>(


<div

key={index}

className="
border
border-yellow-500
rounded-xl
p-4
bg-[#020817]
"

>


<span className="text-yellow-400">

{index+1}.

</span>


{" "}


{item}


</div>


))
}


</div>


</div>



</div>


)

}


</div>

)
    
}

export default SadeSati