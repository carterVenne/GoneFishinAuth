
import React from "react";
import '../styles/main.css';

function Footer () {
  return(
  <footer className="flex flex-wrap flex-row justify-between items-center border-t md:space-x-4 bg-blue-300 bg-opacity-75 pin-b">
 <img src="../assets/gone.png" alt="Gone fishin'"></img>
    <p className="text-center">
      Authored by Helen Lindberg, Mitchell Lindquist, and Carter Venne <img src="./assets/gone.png" alt="Gone fishin'"></img>
    </p>
  </footer>
  );
}

export default Footer;
