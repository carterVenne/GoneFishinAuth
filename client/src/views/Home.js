import React, { Fragment } from "react";

// import CommentBox from '../components/Comment/CommentBox';
import Logo from '../assets/logo.png';

import '../styles/home.css';

const Home = () => (
  <Fragment>
    <div>
      <img src={Logo} alt="logo" className="logoPic"></img>
    </div>
    <hr />
 <div>
   <p className="homeText"> Login or Signup to enjoy one of the best fishing communities on the web! </p>
 </div>
  </Fragment>
);

export default Home;
