import React from "react";
import '../styles/main.css';
import { ReactComponent as Logo } from '../assets/gone.svg';

function Footer () {
  return(
  <footer className="w-full items-center text-center border-t md:space-x-4 bg-blue-300 bg-opacity-75 pin-b">

      Authored by Helen Lindberg, Mitchell Lindquist, and Carter Venne
      <br/>
      Copyright © 2021 
        <Logo className="items-center"/>
  </footer>
  );
}

export default Footer;
