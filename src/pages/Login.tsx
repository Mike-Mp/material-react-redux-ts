import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Typography,
  FormHelperText,
  Box,
  Button,
} from "@mui/material";
import React, { useRef, useState, useContext } from "react";

import { AuthContext } from "../store/auth-context";
import { loginUser } from "../store/auth-functions";

import { buttonStyle, labelStyle, inputStyle } from "../components/UI/commonStyles";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const authCtx = useContext(AuthContext);

  const headerLabel = isLogin ? "Login" : "Signup";
  const formTypeLabel = isLogin ? "SignUp?" : "Login?";

  

  async function formSubmitHandler(e: React.SyntheticEvent) {
    e.preventDefault();

    if (emailRef && passRef && emailRef.current && passRef.current) {
      console.log(emailRef.current.value);
      console.log(passRef.current.value);
    } else {
      return;
    }

    const body = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      await loginUser(isLogin, body).then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Typography variant={"h1"}>{headerLabel} Form</Typography>

      <Box
        sx={{
          margin: "50px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ color: "white", width: "40%" }}>
          <InputLabel htmlFor="email" sx={labelStyle}>
            Email address
          </InputLabel>
          <Input
            type="email"
            id="email"
            inputRef={emailRef}
            aria-describedby="my-helper-text"
            sx={inputStyle}
          />
          {!isLogin && (
            <FormHelperText id="my-helper-text" sx={{ color: "white" }}>
              We'll never share your email
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ color: "white", width: "40%", marginTop: "40px" }}>
          <InputLabel htmlFor="password" sx={labelStyle}>
            Password
          </InputLabel>
          <Input
            type="password"
            id="password"
            inputRef={passRef}
            aria-describedby="my-helper-text"
            sx={inputStyle}
          />
          {!isLogin && (
            <FormHelperText id="my-helper-text" sx={{ color: "white" }}>
              Must be at least 7 characters long.
            </FormHelperText>
          )}
        </FormControl>
        <Box
          sx={{
            my: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Button sx={buttonStyle} onClick={formSubmitHandler}>
            Submit
          </Button>
          <Button sx={buttonStyle} onClick={() => setIsLogin((e) => !e)}>
            {formTypeLabel}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
