import React from "react";
import Head from "next/head";
import Header from "../components/Header.jsx";
import Featured from "../components/Featured.js";
import Landing from "./HomePage/Landing.js";
import Projects from "./HomePage/Projects.js";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
// import ProjectSection from "./HomePage/ProjectSection.js";
import WorkSection from "./HomePage/WorkSection.js";
import { fade, makeStyles } from "@material-ui/core/styles";

const projects = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "/showcase.png",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const useStyles = makeStyles((theme) => ({
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Landing />
      <Projects />
      <WorkSection />
    </React.Fragment>
  );
}
