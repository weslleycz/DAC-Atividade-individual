import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { Head } from "./components/Head";
import { theme } from "./theme";

export interface Props {
  title: string;
  port: string;
}

const Home = ({ title }: Props) => {
  return (
    <>
      <Head title={title}></Head>
      <Container
        sx={{
          margin: "0 auto",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxWidth="sm"
      >
        <Typography
          sx={{
            marginTop: "50%",
          }}
          variant="h2"
          gutterBottom
        >
          <strong>Hello</strong> <strong className="hello">World!</strong>
        </Typography>
        <ThemeProvider theme={theme}>
          <Button
            size="large"
            href="/hello"
            sx={{
              width: "60%",
            }}
            fullWidth
            variant="outlined"
          >
            Hello World Api
          </Button>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Home;
