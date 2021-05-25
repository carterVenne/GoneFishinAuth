import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import CommentBox from '../components/Comment/CommentBox';

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <CommentBox />
  </Fragment>
);

export default Home;
