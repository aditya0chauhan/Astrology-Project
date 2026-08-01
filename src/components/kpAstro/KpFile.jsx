import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Coordinates from '../../utils/Coordinates'
import Loader from '../../utils/buttons/Loader';
import KpNavbar from './KpNavbar';
import KpKundali from './KpKundali';
import KpRashiChart from './KpRashiChart';
import KpPlanets from './KpPlanets';
import KpSanket from './KpSanket';
import KpSanketStatus from './KpSanketStatus';
import { GenrateKp } from '../../utils/buttons/Genrate';
import KpHouse from './KpHouse';
import KpLevel from './KpLevel';

const KpFile = () => {
    const { t } = useTranslation();
    const chartRef = useRef(null);
    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [userData, setUserData] = useState(null);
    const [suggesstion, setSuggesstion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);
    const [errors, setErrors] = useState({});
    const [activeTab, setActiveTab] = useState('paramparik');

    useEffect(() => {
        if ((loading || userData) && chartRef.current) {
            chartRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [loading, userData]);

    const genrateKp = async () => {
        const validationErrors = {};
        if (!name.trim()) validationErrors.name = 'Please fill the full name';
        if (!dob) validationErrors.dob = 'Please fill the date of birth';
        if (!time) validationErrors.time = 'Please fill the birth time';
        if (!place.trim()) validationErrors.place = 'Please fill the birth place';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setShowForm(true);
            return;
        }

        setErrors({});
        try {
            setLoading(true);
            const location = await Coordinates(place);

            const formattedDate = dob.replaceAll('-', '/');

            const payload = {
                name,
                dob,
                time,
                place: location.displayName,
                formattedDate,
                latitude: location.latitude,
                longitude: location.longitude,
            };

            setUserData(payload);
            setShowForm(false);
            setShowNavbar(true);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    const searchPlace = async (value) => {
        setPlace(value);
        if (value.length < 3) {
            setSuggesstion([]);
            return;
        }

        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=5`);
            const data = await response.json();
            setSuggesstion(data);
        } catch (error) {
            console.error(error);
        }
    };

    const tabComponents = {
        paramparik: (
            <KpKundali userData={userData} />
        ),
        rashiChart: (
            <KpRashiChart userData={userData} />
        ),
        grah: (
            <KpPlanets userData={userData} />
        ),
        sanket: (
            <KpSanket userData={userData} />
        ),
        grahSanket: (
            <KpSanketStatus userData={userData} />
        ),
        houseSignificators:(
            <KpHouse userData={userData} />
        ),
        levelSignificators:(
            <KpLevel userData={userData} />
        )
    };

    return (
        <div>
            <div className='fixed top-20 py-1 w-full text-xl font-semibold bg-amber-300 flex justify-center z-30 '>
                <button
                    type="button"
                    onClick={() => {
                        setShowForm(true);
                        setShowNavbar(false);
                        setTimeout(() => {
                            if (formRef.current) {
                                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 50);
                    }}
                    className='cursor-pointer border-2 p-1 rounded-lg text-amber-300 bg-red-800'
                >
                    Kp Astrology
                </button>
            </div>
            <div id='kundali'></div>
            {showNavbar && (
                <KpNavbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            )}
            <div className={`min-h-screen bg-[#08122D] pt-28 px-4 ${showNavbar ? 'pt-44' : ''}`}>
                <div className="mt-16 max-w-4xl mx-auto bg-[#1A2742] rounded-2xl p-8 border border-amber-400">

                    {showForm && (
                        <div ref={formRef} className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-amber-200 block mb-2">
                                    {t('fullName')}
                                </label>

                                <input
                                    type="text"
                                    placeholder={t('enterName')}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                                    }}
                                    className={`w-full p-4 rounded-lg bg-[#2B3B59] text-white ${errors.name ? 'border border-red-500 bg-[#3f1f1f]' : ''}`}
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-amber-200 block mb-2">
                                    {t('dateOfBirth')}
                                </label>

                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => {
                                        setDob(e.target.value);
                                        if (errors.dob) setErrors(prev => ({ ...prev, dob: '' }));
                                    }}
                                    className={`w-full p-4 rounded-lg bg-[#2B3B59] text-white ${errors.dob ? 'border border-red-500 bg-[#3f1f1f]' : ''}`}
                                />
                                {errors.dob && <p className="mt-2 text-sm text-red-400">{errors.dob}</p>}
                            </div>

                            <div>
                                <label className="text-amber-200 block mb-2">
                                    {t('birthTime')}
                                </label>

                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                        if (errors.time) setErrors(prev => ({ ...prev, time: '' }));
                                    }}
                                    className={`w-full p-4 rounded-lg bg-[#2B3B59] text-white ${errors.time ? 'border border-red-500 bg-[#3f1f1f]' : ''}`}
                                />
                                {errors.time && <p className="mt-2 text-sm text-red-400">{errors.time}</p>}
                            </div>

                            <div>
                                <label className="text-amber-200 block mb-2">
                                    {t('birthPlace')}
                                </label>

                                <input
                                    type="text"
                                    placeholder={t('enterCity')}
                                    value={place}
                                    onChange={(e) => {
                                        setPlace(e.target.value);
                                        if (errors.place) setErrors(prev => ({ ...prev, place: '' }));
                                        searchPlace(e.target.value);
                                    }}
                                    className={`w-full p-4 rounded-lg bg-[#2B3B59] text-white ${errors.place ? 'border border-red-500 bg-[#3f1f1f]' : ''}`}
                                />
                                {errors.place && <p className="mt-2 text-sm text-red-400">{errors.place}</p>}
                                {suggesstion.length > 0 && (
                                    <div className="bg-[#2B3B59] rounded-lg mt-2 overflow-hidden">
                                        {suggesstion.map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setPlace(item.display_name);
                                                    setSuggesstion([]);
                                                }}
                                                className="p-3 text-white border-b border-gray-600 cursor-pointer hover:bg-[#3B4D73]"
                                            >
                                                {item.display_name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {showForm && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={genrateKp}
                                disabled={loading}
                               
                            >
                                <GenrateKp />
                            </button>
                        </div>
                    )}

                    {loading && (
                        <div ref={chartRef} className="min-h-[50vh] w-full flex justify-start items-center mt-10 rounded-xl bg-[#0f172a] p-8 pl-1">
                            <Loader />
                        </div>
                    )}
                    {showNavbar && tabComponents[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default KpFile;
