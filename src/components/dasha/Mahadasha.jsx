import { useState, useRef } from 'react'
import {Orbit,BookOpenText,Clock3,MoonStar,Sparkles,ScrollText,} from "lucide-react";
import CurrentFullMD from './CurrentFullMD'
import CurrentMD from './CurrentMD'
import Subdasha from './Subdasha'
import TimelineDasha from './TimelineDasha';
import YoginiDasha from './YoginiDasha';
import SubYogini from './SubYogini';

const Mahadasha = ({ userData }) => {
  const [activeCard, setActiveCard] = useState("current");
  const resultRef = useRef(null);

  const handleCardClick = (id) => {
    setActiveCard(id);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const cards = [
    {
      id: "current",
      title: "वर्तमान महादशा",
      desc: "वर्तमान महादशा, अन्तर्दशा, प्रत्यन्तर आदि देखें",
      icon: <Orbit size={42} className="text-red-500" />,
    },
    {
      id: "full",
      title: "सम्पूर्ण महादशा",
      desc: "जन्म से अंतिम महादशा तक सम्पूर्ण विवरण",
      icon: <BookOpenText size={42} className="text-red-500" />,
    },
    {
      id: "timeline",
      title: "महादशा क्रम (Timeline)",
      desc: "पूरे जीवन की महादशा टाइमलाइन, ग्रह क्रम एवं प्रारम्भ तिथियों का विस्तृत विवरण।",
      icon: <Clock3 size={42} className="text-red-500" />,
    },
    {
      id: "sub",
      title: "Specific Sub Dasha",
      desc: "किसी भी ग्रह की उपदशा देखें",
      icon: <MoonStar size={42} className="text-red-500" />
    },
    {
      id: "yogini",
      title: "Yogini Dasha",
      desc: "जन्म के आधार पर आपकी वर्तमान एवं आगामी योगिनी दशाओं का क्रम और समयावधि देखें।",
      icon: <Sparkles size={42} className="text-red-500" />
    },
    {
      id: "subYogini",
      title: "Full Yogini Dasha",
      desc: "वर्तमान योगिनी दशा के अंतर्गत चल रही उपदशाओं का विस्तृत विवरण देखें।",
      icon: <ScrollText size={42} className="text-red-500" />
    },

  ];

  return (
    <div className="mt-24">

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((card) => (

          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`cursor-pointer rounded-xl border p-6 transition-all duration-300

            ${activeCard === card.id
                ? "bg-amber-400 text-black border-amber-300 scale-105"
                : "bg-[#1A2742] text-white border-amber-400 hover:bg-[#243454]"
              }`}
          >

            <div className="text-5xl mb-5">
              {card.icon}
            </div>

            <h2 className="text-xl font-bold mb-3">
              {card.title}
            </h2>

            <p className="text-sm leading-7">
              {card.desc}
            </p>

          </div>

        ))}

      </div>



      {/* Selected Component */}

      <div
        ref={resultRef}
        className="mt-16 min-h-[70vh]"
      >

        {activeCard === "current" && (
          <CurrentMD userData={userData} />
        )}

        {activeCard === "full" && (
          <CurrentFullMD userData={userData} />
        )}
        {activeCard === "timeline" && (
          <TimelineDasha userData={userData} />
        )}

        {activeCard === "sub" && (
          <Subdasha userData={userData} />
        )}
        {activeCard === "yogini" && (
          <YoginiDasha userData={userData} />
        )}
        {activeCard === "subYogini" && (
          <SubYogini userData={userData} />
        )}

      </div>

    </div>
  );
};

export default Mahadasha;
