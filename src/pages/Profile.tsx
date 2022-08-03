import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";

import { useRef, useContext } from "react";

import {
  buttonStyle,
  labelStyle,
  inputStyle,
} from "../components/UI/commonStyles";
import { AuthContext } from "../store/auth-context";

import { changePassword } from "../store/auth-functions"; 

export default function Profile() {
  const newPassRef = useRef<HTMLInputElement>(null);
  const authCtx = useContext(AuthContext);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!newPassRef || !newPassRef.current || newPassRef.current.value.length < 7) {
      return;
    }

    const body = {
      password: newPassRef.current.value,
      idToken: authCtx.token
    }

    await changePassword(body);
  };

  return (
    <Container>
      <Typography variant={"h1"}>User Profile</Typography>
      <form onSubmit={submitHandler} style={{display: "flex" , flexDirection: "column", alignItems: "center"}}>
        <FormControl sx={{ color: "white", width: "40%", marginTop: "40px", mx: "auto" }}>
          <InputLabel htmlFor="password" sx={labelStyle}>
            Password
          </InputLabel>
          <Input
            type="password"
            id="password"
            inputRef={newPassRef}
            aria-describedby="my-helper-text"
            sx={inputStyle}
          />
          <FormHelperText id="my-helper-text" sx={{ color: "white" }}>
            Must be at least 7 characters long.
          </FormHelperText>
        </FormControl>

        <Button sx={buttonStyle} onClick={submitHandler} type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
