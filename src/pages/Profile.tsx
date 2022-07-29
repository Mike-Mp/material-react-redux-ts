import { Container, Typography } from "@mui/material";

export default function Profile(props) {
  return (
    <Container>
      <Typography variant={"h1"}>{props.username}</Typography>
    </Container>
  )
}
