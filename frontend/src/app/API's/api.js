import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
const getToken = () => {
  return localStorage.getItem("token");
};
export const signupUser = async (userData) => {
  try {
    const user = await axios.post(`${BASE_URL}/auth/signup`, userData);
    return user.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const user = await axios.post(`${BASE_URL}/auth/login`, userData);
    return user.data;
  } catch (error) {
    throw error;
  }
};

export const getAllMovies = async () => {
  try {
    const movies = await axios.get(`${BASE_URL}/getmovies`);
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const movie = await axios.get(`${BASE_URL}/movieById/${id}`);
    console.log("id", id);
    return movie.data;
  } catch (error) {
    throw error;
  }
};

export const bookTicketAPI = async (ticketData) => {
  try {
    const token = getToken();

    const ticket = await axios.post(`${BASE_URL}/bookticket`, ticketData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return ticket.data;
  } catch (error) {
    throw error;
  }
};

export const contactMessage = async (messageData) => {
  try {
    const token = getToken();

    const message = await axios.post(`${BASE_URL}/contact`, messageData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return message.data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (token) => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch profile");
  }

  return data;
};
