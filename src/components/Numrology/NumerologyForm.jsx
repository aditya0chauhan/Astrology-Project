import { useState } from "react";
import {GenrateReport} from '../../utils/buttons/Genrate'


const NumerologyForm = ({ setUserData, setVehicleData }) => {
    const [activeForm, setActiveForm] = useState("numerology");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("male");
    const [phone, setPhone] = useState("");
    const [vehicle, setVehicle] = useState("");
    


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date) {
            alert("Please select date");
            return;
        }

        setUserData({ name, date, gender, phone });
    }

    const vehicleSubmit = (e) => {
        e.preventDefault();

        if (!vehicle) {
            alert("Enter Vehicle Number");
            return;
        }

        setVehicleData({ vehicle });
    }

    return (

        <div className="pt-28 w-full flex justify-center p-5 ">

            <div className="max-w-3xl w-full border border-yellow-500 rounded-3xl p-8 ">

                <h1 className="text-center text-4xl font-bold text-yellow-400 mb-8 ">

                    🔢 Manoj Astro Numerology

                </h1>

                <div className="flex justify-center gap-5 mb-8 ">

                    <button onClick={() => setActiveForm("numerology")}
                        className={`px-5 py-2 rounded-xl border border-yellow-500 focus:scale-[1.10] duration-300 cursor-pointer
        ${activeForm === "numerology" ? "bg-yellow-500 text-black font-semibold"
                                : "text-yellow-400"}`}>

                        🔢 Numerology

                    </button>

                    <button onClick={() => setActiveForm("vehicle")}
                        className={`px-5 py-2 rounded-xl border border-yellow-500 focus:scale-[1.10] duration-300 cursor-pointer 
        ${activeForm === "vehicle" ? "bg-yellow-500 text-black font-semibold"
                                : "text-yellow-400"}`}>

                        🚗 Vehicle

                    </button>

                </div>

                {
                    activeForm === "numerology" &&

                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 ">

                    <input placeholder="Enter Your Name" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent border border-yellow-500 rounded-xl p-3 text-white focus:scale-[1.05] duration-300 " />

                 <div className="relative">

                    <input type="date" value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className=" w-full bg-transparent border border-yellow-500 rounded-xl p-3 pt-6 text-white outline-none focus:scale-[1.05] duration-300 "/>

           <span className="absolute left-3 top-1 text-xs text-yellow-400 hover:scale-[1.05] duration-300 ">
                   Enter Date Of Birth
            </span>

                </div>

                        <select value={gender} onChange={(e) => setGender(e.target.value)}
                            className="bg-[#050b20] border border-yellow-500 rounded-xl p-3 text-white focus:scale-[1.05] duration-300 ">

                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>

                        <input placeholder="Mobile Number" value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-transparent border border-yellow-500 rounded-xl p-3 text-white focus:scale-[1.05] duration-300 " />

                        <button className="mt-5 md:col-span-2 flex justify-center items-center ">
                           <GenrateReport />
                        </button>

                    </form>
                }

                {
                    activeForm === "vehicle" &&

                    <form onSubmit={vehicleSubmit} className="space-y-6 ">

                        <input type="text" placeholder="Enter last 4 digit Vehicle Number" value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                            className="w-full bg-transparent border border-yellow-500 rounded-xl p-3 text-white focus:scale-[1.05] duration-300 " />

                        <button className="w-full bg-yellow-500 text-black font-bold rounded-xl py-3">
                            Check Vehicle 🚗
                        </button>

                    </form>
                }

            </div>
        </div>

    )
}

export default NumerologyForm;