import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "../../components/Main";
// import Footer from "../components/Footer";
import Navbar from "../../components/Navbar";

const mainFeaturedPost = {
  title: "Join us and share something about yourself and life!",
  description:
    "The blog of those who love to share and communicate. Live the experience of discovering new things, learning and sharing with others with ClarusBlog. Still not a member of us?",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Let's share!",
};

export default function LandingPage() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Main post={mainFeaturedPost} />
      {/* <Footer title="Enjoy your life !" description="Something here to give the footer a purpose!"/> */}
    </React.Fragment>
  );
}
