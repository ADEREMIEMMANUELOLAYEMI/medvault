import React from "react";
import Image from "../assets/images/medi  .png";

const Nav = () => {
  return (
    <div className='flex flex-col bg-amber-300 w-50 h-50 border-2'>
      <h1>work in the name of jesus </h1>
      <img src={Image} alt='' />
    </div>
  );
};

export default Nav;
