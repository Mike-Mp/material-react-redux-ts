import { Container, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <Container>
      <Typography variant={"h1"}>Art Institute of Chicago</Typography>
      <img
        src={"https://www.lhsdoi.com/wp-content/uploads/2017/04/Art-Institute-photo.jpg"}
        width={600}
        height={400}
        alt="The exterior of the Art Institute of Chicago, a classical style building with a lion statue in front." />
    </Container>
  )
}
