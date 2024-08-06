import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

async function registerUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loginUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}/login`, userData);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getUser(token) {
  try {
    const response = await axios.get(`${apiUrl}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function logoutUser() {
  try {
    const response = await axios.post(`${apiUrl}/logout`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getUser, registerUser, loginUser, logoutUser };
