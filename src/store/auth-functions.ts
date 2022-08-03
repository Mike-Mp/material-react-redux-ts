import { BoyRounded } from "@mui/icons-material";

const API_KEY = "AIzaSyBsHatybvAsnt_tZfd84lH2Sq1kXyLNgqQ";
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const loginUser = async (
  isLogin: boolean,
  body: { email: string; password: string }
) => {
  const fetchUrl = isLogin ? LOGIN_URL : SIGNUP_URL;

  const response = await fetch(fetchUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const changePassword = async (body: {
  password: string;
  idToken: string | null;
}) => {
  const fetchUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;

  const response = await fetch(fetchUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);
};
