import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";
import { hasGoldAccess } from "../../utils/premiumAccess";

const LalDebts = ({ userData }) => {
    const [debts, setDebts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("astro-user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        if (userData) {
            fetchDebts();
        }
    }, [userData]);


    const fetchDebts = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;

           const token = localStorage.getItem("astro-token");

const response = await fetch(
    `${API_BASE}/astro/lalKitab/debts?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);

            const result = await response.json();
            setDebts(result.response);

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

        {!hasGoldAccess(user) && (
            <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl text-white">

                <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                    🧿 लाल किताब — ऋण दोष
                </h2>

                <PremiumLock
                    title="लाल किताब के ऋण दोष की पूरी जानकारी के लिए Gold Plan लें"
                />

            </div>
        )}

        {hasGoldAccess(user) && debts && (
            <>
                {debts.map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#111827] border border-orange-500 rounded-2xl p-6 mb-8 shadow-lg text-white"
                    >

                        <h2 className="text-2xl font-bold text-orange-400 mb-4">
                            🔴 {item.debt_name}
                        </h2>

                        <p className="mb-5 text-lg">
                            <span className="text-yellow-400 font-semibold">
                                🪐 ग्रह स्थिति :
                            </span>{" "}
                            {item.planetory}
                        </p>

                        {item.events?.length > 0 && (
                            <div className="mb-5">

                                <h3 className="text-xl text-orange-400 font-semibold mb-3">
                                    📌 संभावित घटनाएं
                                </h3>

                                <ul className="list-disc ml-6 space-y-2">
                                    {item.events.map((event, i) => (
                                        <li key={i}>
                                            {event}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        )}

                        {item.indications?.length > 0 && (
                            <div className="mb-5">

                                <h3 className="text-xl text-orange-400 font-semibold mb-3">
                                    🔎 संकेत
                                </h3>

                                <ul className="list-disc ml-6 space-y-2">
                                    {item.indications.map((indication, i) => (
                                        <li key={i}>
                                            {indication}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        )}

                        {item.remedies?.length > 0 && (
                            <div>

                                <h3 className="text-xl text-green-400 font-semibold mb-3">
                                    🙏 उपाय
                                </h3>

                                <ul className="list-disc ml-6 space-y-2">
                                    {item.remedies.map((remedy, i) => (
                                        <li key={i}>
                                            {remedy}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        )}

                    </div>

                ))}
            </>
        )}

    </div>
);

}

export default LalDebts