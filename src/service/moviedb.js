import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const movieDbAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2Y2QyNWM4ZjViZjgzOTRkZDE5NDBlYzZjM2QxMiIsIm5iZiI6MTc4OTM5ODg0Ni44NDcwMDAxLCJzdWIiOiI2YWE4MGYzZWYyNTMxNDJkOTdlY2M2ZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.igylYOnNOCFjQAsPcB-yUNSjtPigXUiz0Leu38PHpD0";

export const getTrending = () => {
  return axios
    .get(`${baseURL}/trending/movie/week`, {
      headers: {
        Authorization: `bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const searchMovie = (query, page) => {
  return axios
    .get(`${baseURL}/search/movie`, {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieDetails = (id) => {
  return axios
    .get(`${baseURL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieCredits = (id) => {
  return axios
    .get(`${baseURL}/movie/${id}/credits`, {
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieReviews = (id, page) => {
  return axios
    .get(`${baseURL}/movie/${id}/reviews`, {
      params: { page },
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
