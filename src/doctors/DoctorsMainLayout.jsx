import { Icon } from "@iconify/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Cross from "../assets/images/cross.png";
import BellSvg from "../libs/svgs/BellSvg";
import BulbSvg from "../libs/svgs/BulbSvg";
const DoctorsMainLayout = () => {
  return (
    <div>
      <section className='border-b flex justify-between px-[30px] items-center border-black/20 shadow'>
        <img src='./src/assets/images/logo.png' alt='' />
        
        <section className=' flex gap-[36px] items-center '> 
          <section className='relative  w-[358px] h-[48px] '>
            <input
              type='search'
              name='search'
              id='search'
              className=' rounded-[8px] bg-[#F7F6F9]  px-[50px] w-full h-full text-[#A49F9F]'
              placeholder='Search for patients ID and more'
            />
            <Icon
              icon={"mynaui:search"}
              width={30}
              height={30}
              className='text-[#A49F9F] absolute left-[16px] top-[22%] '
            />
          </section>
          <BellSvg />
          <div className='flex'>
            <div className=' mr-[7px] flex flex-col items-end '>
              <h1>JUTH</h1>
              <span className=' bg-[#CFE2FF] border py-[4px] px-[8px] rounded-[8px] text-[14px] text-[#095194] font-normal readex border-[#61CCD0] '>
                Hospital
              </span>
            </div>
            <img src={Cross} alt='' />
          </div>
        </section>
      </section>
      <section className='flex bg-[#FFFFFF]'>
        <section className='   flex flex-col p-[27px] border-black max-w-[330px] w-full leading-20'>
          <h1 className="text-[#717074]">Hospitlal Panel</h1>
          <section className='flex overflow-auto h-screen  flex-col gap-[12px]'>
            <section className='   '>
              <NavLink
                to={"/DoctorsDashboard"}
                className={({ isActive }) =>
                  "flex rounded-[8px] px-[20px] items-center gap-[8px] " +
                  (isActive && "bg-[#EFE9FF] text-[#717074]")
                }
              >
                <Icon
                  icon={"material-symbols:dashboard-outline"}
                  className={({ isActive }) =>
                    " w-[24px] h-[24px]    " +
                    (isActive ? "text-[#2C26DB]" : "bg-[#0F21E4] ")
                  }
                />{" "}
                <span className="text-[#84828A]">Dashboard</span>
              </NavLink>
              <NavLink
                to={"/DocAppointments"}
                className={({ isActive }) =>
                  "flex rounded-[8px] px-[20px] items-center gap-[8px] " +
                  (isActive ? "bg-[#EFE9FF] text-[#2C26DB]": 'text-[#808080]' )
                }
              >
                  

        
                {" "}
                <Icon
                  icon={"streamline:waiting-appointments-calendar-solid"}
                  className={({ isActive }) =>
                    " w-[24px] h-[24px]     " +
                    (isActive ? "text-[#2C26DB]" : "text-[#808080] ")
                  }
                />{" "}
               <span className="text-[#84828A]">DocAppointments </span> 
              </NavLink>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  "flex rounded-[8px] px-[20px] items-center gap-[8px] text-[#84828A]" +
                  (isActive && "bg-[#EFE9FF] text-[#2C26DB]")
                }
              >
                
              
                {" "}
                <Icon
                  icon={"streamline-plump:customer-support-7-solid"}
                  className={({ isActive }) =>
                    " w-[24px] h-[24px] text-[#808080]    " +
                    (isActive ? "text-[#2C26DB]" : "text-[#808080] ")
                  }
                />{" "}
               <span className="text-[#84828A]">Support & Compliance</span> 


               
              </NavLink>
            </section>
            <div>
              <BulbSvg />
            </div>
            <NavLink
              to={"/"}
              className={
                "flex hover:bg-[#EFE9FF] rounded-[8px] items-center gap-[8px] text-[#E3434C] "
              }
            >
              {" "}
              <Icon
                icon={"carbon:logout"}
                className=' w-[24px] h-[24px]    '
              />{" "}
              Log Out
            </NavLink>
          </section>
          {/* <h1>hjshjhjsas</h1> */}
        </section>
        <section className=' overflow-auto w-dvw h-screen'>
          <Outlet />
        </section>
      </section>
    </div>
  );
};

export default DoctorsMainLayout;
