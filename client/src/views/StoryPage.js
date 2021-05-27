
import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import Story from '../components/Comment/Story';

const StoryPage = () => (
  <Fragment>
    <Hero />
    <hr />
    <Story />
  </Fragment>
);

export default StoryPage;