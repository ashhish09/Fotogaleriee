import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY;

export const fetchphotos = async function (query, page = 1, per_page = 20) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log("Unsplash API Error:", error.response?.data || error.message);
  }
};

export const fetchvideos = async function (query, page = 1, per_page = 20) {
  try {
    const res = await axios.get("https://api.pexels.com/videos/search", {
      params: { query, page, per_page },
      headers: {
        Authorization: PEXEL_KEY,
      },
    });
   return res.data.videos; 
  } catch (error) {
    console.log("PEXEL API Error:", error.response?.data || error.message);
    return [];
  }
};

export const fetchgifs = async function (query, limit = 20) {
  try {
    const response = await axios.get("https://tenor.googleapis.com/v2/search", {
      params: {
        q: query,
        key: TENOR_KEY,
        limit,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log("Tenor API Error:", error.response?.data || error.message);
     return [];
  }
};
