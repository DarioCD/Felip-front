import axios from "axios";
import { API_URL } from "./apiUrl";

const getToken = () => {
  return localStorage.getItem("token");
};
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};

const getAllUser = async () => {
  const response = await axios.get(`${API_URL}/users`, { headers });
  const usuario = response;
  return usuario;
};

const loginUser = async (data) => {
  try {
    const response = await fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    // const responseEmail = await axios.get(`${API_URL}/users/email/${data.email}`, { headers });
    // const usuario = responseEmail;

    console.log(data);
    
    // if (!response.ok) {
      //   throw new Error("Login failed");
      // }
      
      const token = response.headers.get("Authorization");
      console.log(response.headers);

    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (data) => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/register/users`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    loginUser(data);
    return response;
  } catch (error) {
    throw error;
  }
};

const UserServices = {
  getAllUser,
  loginUser,
  registerUser,
};

export default UserServices;
