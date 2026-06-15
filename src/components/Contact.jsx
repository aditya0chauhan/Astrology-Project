import { useTranslation } from "react-i18next";
import photo2 from "../assets/photo2.png";
import photo1 from "../assets/photo1.jpeg";
import photo4 from "../assets/photo4.png";
import photo from "../assets/pt.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import mic from "../assets/micpic.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20 w-full h-full bg-[#08101A] flex flex-wrap justify-center items-center p-5 lg:p-0">
      <div className="w-full lg:w-[40%] lg:my-5 bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 p-5 lg:p-2 rounded-lg text-xl text-amber-200 font-semibold m-3">
        <h1 className="font-semibold text-amber-400 mb-4">⭐{t("info")} ⭐</h1>
        <p> ⭐ {t("bl")}</p>
        <p> ⭐ {t("ft")}</p>
        <p> ⭐ {t("mn")} </p>
        <p> ⭐ {t("tithi")}</p>
        <p> ⭐ {t("day")}</p>
        <p> ⭐ {t("byear")}</p>
        <p> ⭐ {t("gotra")}</p>
        <p className="mt-5 text-amber-400">{t("gurudev")}</p>
      </div>

      <div className="w-full lg:w-[50%] m-5 bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 p-2 rounded-lg text-xl text-amber-200 font-semibold">
        <h1 className="font-semibold text-amber-400 mb-4">
          ⭐ {t("education")} ⭐
        </h1>
        <p> ⭐ {t("rishikul")} </p>
        <p> ⭐ {t("digree")} </p>
        <p> ⭐ {t("aacharya")} </p>
        <p> ⭐ {t("ayurveda")}.</p>
        <p> ⭐ {t("vastuShastra")} </p>
        <p className="mt-5 text-amber-400"> {t("ratangardh")}</p>
      </div>

      <div className="w-full lg:w-[40%] m-5 bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 p-2 rounded-lg text-xl text-amber-200 font-semibold">
        <h1 className="font-semibold text-amber-400 mb-4">
          ⭐ {t("experience")} ⭐{" "}
        </h1>
        <p> ⭐ {t("jap")}.</p>
        <p> ⭐ {t("havan")} </p>
        <p> ⭐ {t("kalSarapDosh")} </p>
        <p> ⭐ {t("mangaldosh")}</p>
        <p> ⭐ {t("pitradosh")}</p>
        <p> ⭐ {t("vastushanti")}</p>
        <p> ⭐ {t("grahpravesh")}</p>
        <p> ⭐ {t("vrat")}</p>
        <p> ⭐ {t("gaytri")}</p>
        <p> ⭐ {t("mahamrityunjaya")} </p>
        <p> ⭐ {t("tripindi")}</p>
        <p> ⭐ {t("religious")} </p>

        <p className="mt-5 text-amber-400">{t("yearExperience")}❤️</p>
      </div>

      <div className="w-full lg:w-[40%] lg:aspect-square m-5 bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 p-2 rounded-lg text-xl text-amber-200 font-semibold lg:flex flex-col justify-between">
        <h1 className="font-semibold text-amber-400 mb-4">
          ⭐ {t("objective")} ⭐
        </h1>
        <p>⭐ {t("guide")}</p>
        <p>⭐ {t("primary")} </p>

        <p>⭐ {t("vastuServices")} </p>

        <p>⭐ {t("offer")} </p>
        <p className="mt-5 text-amber-400">{t("actively")}</p>
      </div>
      <a href="#contact">
        {" "}
        <h1 className="text-red-200 text-2xl w-full font-semibold ml-5 text-center mt-5 underline">
          Pt. BL vashishth Contact :-
        </h1>{" "}
      </a>
      <div className="w-full flex flex-wrap justify-center p-2 pl-5 mt-5">
        <img
          src={photo2}
          className=" h-[500px] border-2 border-amber-200 rounded-md m-5 mb-4"
        />
        <img
          src={photo4}
          className=" w-full lg:w-[50%] border-2 border-amber-200 rounded-md m-5 mb-4"
        />
        <img
          src={photo1}
          className=" h-[500px] border-2 border-amber-200 rounded-md m-5 mb-4"
        />
        <img
          src={photo}
          className=" h-[500px] border-2 border-amber-200 rounded-md m-5 mb-4"
        />
        <img
          src={mic}
          className=" h-[500px] border-2 border-amber-200 rounded-md m-5 mb-4"
        />
        <video 
        src={video1} 
        controls
        className="h-[500px] rounded-lg border-2 border-amber-200 m-5"
        />
        <video 
        src={video2} 
        controls
        className="h-[500px] rounded-lg border-2 border-amber-200 m-5"
        />
        <video 
        src={video3} 
        controls
        className="h-[500px] rounded-lg border-2 border-amber-200 m-5"
        />
      </div>
      <div id="contact" className="h-[50vh] w-full mt-8 text-amber-200 flex flex-col justify-center items-center ">
        <h1 className=""> Contact to Pt. Bhanwar Lal Vashisth (Manoj Vedic Astro) </h1>
        <div className="mt-4 flex  items-center">
          <a
            href="https://wa.me/918882532259?text=Hello%20I%20want%20to%20know%20about%20your%20astrology%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-4xl ml-8" />
          </a>
           <a href=""><BsInstagram className="text-4xl ml-8" /> </a>
           <a href="mailto:aditya.0.rajpoot@gmail.com?subject=Astrology%20Consultation%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20astrology%20services.%20Please%20share%20details%20regarding%20consultations%2C%20kundali%20analysis%2C%20and%20pricing.%0A%0AThank%20you."><SiGmail className="text-4xl ml-8" /></a>
           <a href=""><FaFacebook className="text-4xl ml-8" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
