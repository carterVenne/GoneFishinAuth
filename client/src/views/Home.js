import React, { Fragment } from "react";

import Hero from "../components/Hero";
import CommentBox from '../components/Comment/CommentBox';
import Logo from '../assets/logo.png';

import '../styles/home.css';

const Home = () => (
  <Fragment>
    <div>
      <img src={Logo} alt="logo" className="logoPic"></img>
    </div>
    <hr />
    <CommentBox />
  </Fragment>
);

export default Home;
