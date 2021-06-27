import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ThisMe from "./ThisMe";
import GetInTouch from "./GetInTouch";
import Client from "./Clients";
import Investor from "./Investor";
import BlogPost from "./BlogPost";
import Subscribe from "./Subscribe";
import ChatBox from "./ChatBox";
const App = () => {
  return (
    <div id="App">
      <ChatBox />
      <Navbar />
      <Hero />
      <ThisMe />
      <GetInTouch />
      <Client />
      <Investor />
      <BlogPost />
      <Subscribe />
    </div>
  );
};
export default App;
