import React from "react";
import Bulb from '../../assets/images/bulb.png'

const BulbSvg = () => {
  return (
    <div className="relative w-[206px] h-[233px] " >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='206'
        height='233'
        viewBox='0 0 206 233'
        fill='none'
        className="absolute w-full h-full "
      >
        <path
          d='M103 0C121.225 0 136 14.7746 136 33H190C198.837 33 206 40.1634 206 49V217C206 225.837 198.837 233 190 233H16C7.16345 233 0 225.837 0 217V49C0 40.1634 7.16344 33 16 33H70C70 14.7746 84.7746 0 103 0Z'
          fill='#B7FFA5'
          fill-opacity='0.4'
        />
      </svg>
      <img src={Bulb} alt="" className=" absolute top-[20px] left-[42%] " />
      <p className="absolute top-15 left-[32%] text-[#717074] readex " >Useful Tips</p>
      <p className="absolute top-30 left-[8%] text-center text-[14px] readex font-normal leading-6 max-w-[170px] " >Regularly update staff schedules to reduce patient wait time.</p>
    </div>
  );
};

export default BulbSvg;
