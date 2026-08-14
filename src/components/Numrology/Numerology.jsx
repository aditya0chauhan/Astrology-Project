import { useState } from "react";

import NumerologyForm from "./NumerologyForm";
import LoshuGrid from "./LoshuGrid";
import Number from "./Number";
import PlaneDetails from "./PlaneDetails";
import MissingNumber from "./MissingNumber";
import MobileAnalysis from "./MobileAnalysis";
import NumerologySuggesstion from "./NumerologySuggesstion";
import NameAnalysis from "./NameAnalysis";
import VehicleAnalysis from "./VahicleAnalysis";
import NuAnalysis from "./NuAnalysis";

const Numerology = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("loshu");
  const [vehicleData, setVehicleData] = useState(null);

  return (
    <div>

      <NumerologyForm
        setUserData={setUserData}
        setVehicleData={setVehicleData}
      />

      {
        userData && (
          <>

            <div className="flex justify-center gap-5 mt-10 flex-wrap ">

              {
                [
                  {
                    name: "Lo Shu Grid",
                    value: "loshu"
                  },

                  {
                    name: "Lucky Number",
                    value: "number"
                  },

                  {
                    name: "Plane Details",
                    value: "plane"
                  },

                  {
                    name: "Missing & Available Number",
                    value: "Missing-Number & Available-Number"

                  },
                  {
                    name: "Mobile-Number",
                    value: "mobile"
                  },
                  {
                    name: 'Numerology-Suggestion',
                    value: 'suggestion'
                  },
                  {
                    name: 'Name-Analysis',
                    value: 'name'
                  },
                  {
                    name : "Number-Analysis",
                    value : 'numberAnalysis'
                  }
                ].map((tab) => (

                    <button key={tab.value} onClick={() => setActiveTab(tab.value)}
                      className={`px-6 py-2 rounded-xl border duration-300 hover:border-2 hover:border-yellow-400 
    
          ${activeTab === tab.value ? ` bg-yellow-500 text-black font-semibold border-yellow-500 shadow-lg shadow-yellow-500/30 ` : `bg-transparent text-yellow-400 font-normal border-yellow-500 `
                        }
            `}>

                      {tab.name}
                    </button>

                  ))
              }

            </div>
            {
              activeTab === "loshu" &&
              <LoshuGrid userData={userData} />
            }

            {
              activeTab === "number" &&
              <Number userData={userData} />
            }

            {
              activeTab === "plane" &&
              <PlaneDetails userData={userData} />
            }

            {
              activeTab === "Missing-Number & Available-Number" &&
              <MissingNumber userData={userData} />
            }
            {
              activeTab === "mobile" &&
              <MobileAnalysis userData={userData} />
            }
            {
              activeTab === "suggestion" &&
              <NumerologySuggesstion userData={userData} />
            }
            {
              activeTab === "name" &&
              <NameAnalysis userData={userData} />
            }
            {
              activeTab === "numberAnalysis" &&
              <NuAnalysis userData={userData} />
            }
            
          </>
        )}

        {
vehicleData &&

<VehicleAnalysis 
vehicleData={vehicleData}
/>

}

        </div>

  )
}

export default Numerology;