exports.handler = async (event) => {
  try {
    const API_KEY = process.env.ASTRO_API_KEY;
    const BASE_URL = "https://api.jyotishamastroapi.com";

    const path = event.path.replace("/.netlify/functions/proxy", "");

    const query =
      event.rawQuery || new URLSearchParams(event.queryStringParameters || {}).toString();

    const url = `${BASE_URL}${path}${query ? `?${query}` : ""}`;

    const options = {
      method: event.httpMethod,
      headers: {
        key: API_KEY,
      },
    };

    // POST / PUT body
    if (
      event.body &&
      event.httpMethod !== "GET" &&
      event.httpMethod !== "HEAD"
    ) {
      options.headers["Content-Type"] = "application/json";
      options.body = event.body;
    }

    const response = await fetch(url, options);

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();

      return {
        statusCode: response.status,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    }

    const text = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": contentType || "text/plain",
      },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};