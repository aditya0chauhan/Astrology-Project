import { astroRequest } from "../services/astroService.js";
import User from "../models/user.js";

export const astroController = async (req, res) => {
  try {
    const endpoint = req.originalUrl.replace("/api/astro", "/api");

    const data = await astroRequest(endpoint);

    const user = req.userId
      ? await User.findById(req.userId)
        .select("plan premiumExpiry goldExpiry")
        .lean()
      : null;

    const isGold =
      user?.plan === "Gold" &&
      user?.goldExpiry &&
      new Date(user.goldExpiry) > new Date();

    const isSilver =
      (user?.plan === "Silver" &&
        user?.premiumExpiry &&
        new Date(user.premiumExpiry) > new Date()) ||
      isGold;


    if (endpoint.includes("/dosha/mangal_dosh") && !isSilver) {
      const fullData = data.response;

      data.response = {
        is_dosha_present: fullData?.is_dosha_present,
      };
    }

    if (endpoint.includes("/dasha/current-mahadasha-full")) {

      if (!isSilver) {
        const dashaTypes = [
          "mahadasha",
          "antardasha",
          "paryantardasha",
          "Shookshamadasha",
          "Pranadasha",
        ];

        dashaTypes.forEach((type) => {
          if (data.response?.[type]) {
            data.response[type] = data.response[type].slice(0, 2);
          }
        });
      }
    }

    if (endpoint.includes("/dasha/yogini-dasha-main") && !isSilver) {
      if (data.response) {
        data.response.dasha_list =
          data.response.dasha_list?.slice(0, 2);

        data.response.dasha_lord_list =
          data.response.dasha_lord_list?.slice(0, 2);

        data.response.dasha_end_dates =
          data.response.dasha_end_dates?.slice(0, 2);
      }
    }

    if (endpoint.includes("/dosha/manglik-dosh") && !isSilver) {
      const fullData = data.response;

      data.response = {
        score: fullData?.score,
        bot_response: fullData?.bot_response,
      };
    }

    if (endpoint.includes("/dosha/kaalsarp-dosh") && !isSilver) {
      const fullData = data.response;

      data.response = {
        is_dosha_present: fullData?.is_dosha_present,
      };
    }

    if (endpoint.includes("/dosha/pitra-dosh") && !isSilver) {
      const fullData = data.response;

      data.response = {
        is_dosha_present: fullData?.is_dosha_present,
        bot_response: fullData?.bot_response,
      };
    }

    if (
      endpoint.includes("/extended_horoscope/current_sadesati") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: {
          is_sade_sati_period: data.response?.is_sade_sati_period,
        },
      });
    }

    if (
      endpoint.includes("/dasha/mahadasha") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: {
          dasha_start_date: data.response?.dasha_start_date,
          dasha_remaining_at_birth: data.response?.dasha_remaining_at_birth,
          mahadasha: data.response?.mahadasha?.slice(0, 2),
          mahadasha_order: data.response?.mahadasha_order?.slice(0, 2),
        },
      });
    }


    if (
      endpoint.includes("/dasha/specific-sub-dasha") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: {
          mahadasha: data.response?.mahadasha?.slice(0, 2),
        },
      });
    }

    if (
      endpoint.includes("/extended_horoscope/gem_suggestion") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: {
          name: data.response?.name,
          gem: data.response?.gem,
          planet: data.response?.planet,
        },
      });
    }

    if (
      endpoint.includes("/extended_horoscope/rudraksh_suggestion") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: {
          name: data.response?.name,
          personalized_response: data.response?.personalized_response,
        },
      });
    }

    if (
      endpoint.includes("/dasha/yogini-dasha-sub") &&
      !isSilver
    ) {
      return res.json({
        status: data.status,
        response: data.response?.slice(0, 2),
      });
    }

    if (
      endpoint.includes("/matching/dashakoot-astro") &&
      !isGold
    ) {
      const fullData = data.response;

      data.response = {
        score: fullData?.score,
      };
    }

    if (
      endpoint.includes("/matching/aggregate-match") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/matching/dasha-sandhi") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/matching/papasamaya-match") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/missing-numbers") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/available-numbers") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/mobile-analysis") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/name-analysis") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/lucky-things") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/karmic-number") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/personal-year") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/master-numbers") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/number-analysis") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/numerology-suggestion") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/numerology-analysis") &&
      !isGold
    ) {
      data.response = {};
    }

    if (
      endpoint.includes("/numerology/plane-details") &&
      !isGold
    ) {
      data.response = {};
    }

    res.json(data);

  } catch (error) {
    console.error("Astro API Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};