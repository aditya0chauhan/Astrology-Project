import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "Language",
        home: "Home",
        contact: "Contact",
        account: "Account",
        menu: "Menu",
        welcome: `Welcome to     
           Manoj Vedic Astro`,
        description:
          "Complete astrological consultation, kundli analysis , vaastu & handwritten kundli. As per Rishi Vashishth tradition — puja, yagya, anushthan, yantra.",
        astrology: "Astrology",
        years: "Years",
        vaastu: "Vaastu",
        poojan: "Poojan - Anusthan",
        experiences: "Years Experiences",
        vedic:
          "Vedic Jyotish consultation, kundli analysis, predictions and remedies by Vashishth tradition.",
        vastu: "Complete Vastu Dosh Nivaran Without Demolition",
        paath:
          "27 years experience in Vedic pujaan, paath, yagya and anushthan at sacred places with online puja facility.",
        view: "View services",
        info: "Contact info",
        bl: " Name : Pt. B.L Vashishth (Pandit Bhanwar Lal Vashisth)",
        ft: "Father's Name : Pt. Shri Govind Prasad Biala",
        mn: "Mother's Name : Smt. Radha Devi",
        tithi: "Tithi: Shravan Shukla Chaturdashi",
        day: "Day: Saturday",
        byear: "Birth-year: 1983",
        gotra: "Gotra : Vashishtha",
        gurudev:
          " The revered Gurudev Pt. Bhanwarlal Biyala was born into a Vashishtha-gotra Gaud Brahmin (Biyala branch) family in Ratangarh . A town in Rajasthan's Churu district renowned as 'Chhoti Kashi'. ",
        education: "Education Info",
        rishikul: "Traditional education at Rishikul Brahmachari Ashram.",
        digree: "Shastri degree.",
        aacharya: "Acharya in Astrology.",
        ayurveda: "Study of Ayurveda",
        vastuShastra: "In-depth study of Vastu Shastra for six years",
        ratangardh: `Ratangarh earned the title of "Chhoti Kashi" because the learned Brahmins here authored and published numerous authoritative texts concerning Vedic rituals, marriage ceremonies, the conclusion of religious vows (*vratodyapan*), the consecration of deities, and other religious observances.
        Many religious texts authored by the late Pandit Shri Chaturthilal Gaud Gangadhari continue to serve as the standard references for worship practices across the country.`,
        experience : "Experience Info",
        jap : "Experience in Japa and Anushthana",
        havan : "Experience in Yajna and Havan.",
        kalSarapDosh : "Experience in Kaal Sarp Dosh remediation rituals.",
        mangaldosh : "Experience in Mangal Dosh remediation rituals.",
        pitradosh : "Experience in Pitra Dosh resolution rituals.",
        vastushanti : "Experience in Vastu Shanti and Vastu Pratishtha rituals.",
        grahpravesh : "Experience in Griha Pravesh (housewarming) ceremonies.",
        vrat : "Experience in *Vrat Udyapan* (ritual conclusion of a fast).",
        gaytri : "Experience in Gayatri Japa Anushthana.",
        mahamrityunjaya :" Experience in Mahamrityunjaya Japa.",
        tripindi : "Experience in Tripindi Shraddha rituals.",
         religious :"Experience in religious sacraments and Vedic rituals.",
         yearExperience : "Over 27 years of experiences.",
         objective : "Our Objective :-",
         guide : "To guide society through Vedic Sanatan traditions, religious rituals, and the sciences of Astrology and Vastu, and to contribute to the welfare of the public.",
         primary : "Our primary service is astrology, backed by over 23 years of experience; we offer Vedic astrology consultations based on specialized traditions, including horoscope analysis, predictions, and remedies.",
         vastuServices : "Vastu services backed by over 21 years of experience; complete resolution of Vastu defects without any demolition, bringing peace and harmony.",
         offer : "We offer over 27 years of experience in performing Vedic rituals, prayers, Yagyas, and ceremonies at sacred sites; online Pujan services are also available.",
         actively : "Actively providing services in the fields of religion, spirituality, and Vedic rituals for the past 27 years."
      },
    },

    hi: {
      translation: {
        language: "भाषा",
        home: "होम",
        contact: "संपर्क",
        account: "खाता",
        menu: "मेनू",
        welcome: "मनोज वैदिक एस्ट्रो में आपका स्वागत है",
        description:
          "संपूर्ण ज्योतिषीय परामर्श, कुंडली विश्लेषण, वास्तु एवं हस्तलिखित कुंडली। ऋषि वशिष्ठ परंपरा के अनुसार - पूजा, यज्ञ, अनुष्ठान, यंत्र।",
        astrology: "ज्योतिष",
        years: "साल से",
        vaastu: "वास्तु",
        poojan: "पूजन-अनुष्ठान",
        experiences: "सालों का अनुभव",
        vedic:
          "वशिष्ठ परंपरा द्वारा वैदिक ज्योतिष परामर्श, कुंडली विश्लेषण, भविष्यवाणी और उपाय।",
        vastu: "बिना तोड़-फोड़ के संपूर्ण वास्तु दोष निवारण",
        paath:
          "पवित्र स्थानों पर वैदिक पूजा, पाठ, यज्ञ और अनुष्ठान का 27 वर्षों का अनुभव, साथ ही ऑनलाइन पूजा की सुविधा भी उपलब्ध है।",
        view: "सेवाएं देखें",
        info: "संपर्क जानकारी",
        bl: "नाम : पंडित बी एल वशिष्ठ (पंडित भंवर लाल वशिष्ठ)",
        ft: "पिता का नाम : पंडित श्री गोविंद प्रसाद बियाला",
        mn: "माता का नाम : श्रीमती राधा देवी",
        tithi: "तिथि: श्रावण शुक्ल चतुर्दशी",
        day: "दिन: शनिवार",
        byear: "जन्म-वर्ष: 1983",
        gotra: "गोत्र : वशिष्ठ",
        gurudev:
          "पूज्य गुरुदेव पंडित भंवरलाल बियाला का जन्म रतनगढ़ में एक वशिष्ठ-गोत्र गौड़ ब्राह्मण (बियाला शाखा) परिवार में हुआ था। राजस्थान के चुरू जिले का एक शहर जो 'छोटी काशी' के नाम से प्रसिद्ध है।",
        education: "शिक्षा संबंधी जानकारी",
        rishikul: "ऋषिकुल ब्रह्मचारी आश्रम में पारंपरिक शिक्षा प्राप्त की।",
        digree: "शास्त्री डिग्री।",
        aacharya: "ज्योतिष में आचार्य।",
        ayurveda: "आयुर्वेद का अध्ययन",
        vastuShastra: "छह साल तक वास्तु शास्त्र का गहन अध्ययन ।",
        ratangardh: `रतनगढ़ को "छोटी काशी" की उपाधि इसलिए प्राप्त हुई क्योंकि यहाँ के विद्वान ब्राह्मणों द्वारा वैदिक पूजन, विवाह संस्कार, व्रतोद्यापन, सर्वदेव प्रतिष्ठा एवं अन्य धार्मिक विधानों से संबंधित अनेक प्रामाणिक ग्रंथों का लेखन एवं प्रकाशन हुआ।
        स्वर्गीय पंडित श्री चतुर्थीलाल गौड़ गंगाधरी द्वारा रचित अनेक धार्मिक ग्रंथ आज भी देशभर में पूजन-पद्धति के आधार माने जाते हैं।`,
        experience : "अनुभव की जानकारी",
        jap : "जप और अनुष्ठान का अनुभव।",
        havan : "यज्ञ और हवन का अनुभव।",
        kalSarapDosh : "कालसर्प दोष निवारण अनुष्ठानों का अनुभव।",
        mangaldosh :"मंगल दोष निवारण अनुष्ठानों का अनुभव।",
        pitradosh : "पितृ दोष निवारण अनुष्ठानों का अनुभव।",
        vastushanti : "वास्तु शांति और वास्तु प्रतिष्ठा अनुष्ठानों का अनुभव।",
        grahpravesh : "गृह प्रवेश समारोहों का अनुभव।",
        vrat : "व्रत उद्यापन (व्रत समापन अनुष्ठान) का अनुभव।",
        gaytri : "गायत्री जप अनुष्ठान का अनुभव।",
        mahamrityunjaya : "महामृत्युंजय जप का अनुभव।",
        tripindi : "त्रिपिंडी श्राद्ध अनुष्ठानों का अनुभव।",
        religious : "धार्मिक संस्कारों और वैदिक अनुष्ठानों का अनुभव।",
        yearExperience : "27 वर्षों से अधिक का अनुभव।",
        objective : "हमारा उद्देश्य :-",
        guide: "वैदिक सनातन परंपराओं, धार्मिक अनुष्ठानों और ज्योतिष व वास्तु विज्ञान के माध्यम से समाज का मार्गदर्शन करना और जन-कल्याण में योगदान देना।",
        primary : "हमारी मुख्य सेवा ज्योतिष है, जिसमें 23 वर्षों से अधिक का अनुभव शामिल है; हम विशेष परंपराओं पर आधारित वैदिक ज्योतिष परामर्श प्रदान करते हैं, जिसमें कुंडली विश्लेषण, भविष्यवाणियाँ और उपाय शामिल हैं।",
        vastuServices: "21 वर्षों से अधिक के अनुभव के साथ वास्तु सेवाएँ; बिना किसी तोड़-फोड़ के वास्तु दोषों का पूर्ण समाधान, जिससे शांति और सामंजस्य आता है।",
        offer:"हम पवित्र स्थलों पर वैदिक अनुष्ठान, पूजा, यज्ञ और समारोह संपन्न कराने में 27 वर्षों से अधिक का अनुभव रखते हैं; ऑनलाइन पूजन सेवाएँ भी उपलब्ध हैं।",
        actively :"पिछले 27 वर्षों से धर्म, आध्यात्मिकता और वैदिक अनुष्ठानों के क्षेत्र में सक्रिय रूप से सेवाएँ प्रदान कर रहे हैं।"

      },
    },
  },

  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
