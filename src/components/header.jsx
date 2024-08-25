import React from 'react';

const Header = () => {
    return (
<header>
<nav className="fixed left-0 top-0 backdrop-blur-sm w-full z-10 md:bg-transparent">
  <div className="w-screen flex flex-wrap items-center justify-between mx-auto px-[5%] py-4 border-b-[1px] border-solid border-[#2E2929] ">
    <a href="" className="flex items-center space-x-3">
        <img src="images\logo.png" class="h-[43px]" alt="Logo" />
        <span className="text-[#fff] text-[24px] fsm:text-[30px] md:text-[36px] font-semibold">exopods</span>
    </a>
    <div className="flex items-center gap-5 " id="navbar-default">
        <a href=""><img src="images\discord-logo.gif" alt="discord-gif" className='h-[43px] w-auto' /></a>
        <button className="flex h-6 w-6 items-center md:hidden">
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 1.25H21.4375" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M7.89587 8.02083H21.4375" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M1.125 14.7917H21.4375" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg>
        </button>
     <div className=" items-center gap-5 hidden md:flex">
        <a href="#Pricing" className='text-[15px] font-semibold text-[#fff]'>Pricing</a>
        <a href="#Doc" className='text-[15px] font-semibold text-[#fff]'>Docs</a>
        <button class="  rounded-lg bg-transparent border-[1px] border-[#fff] px-[20px] py-[8px] text-[15px] font-normal text-[#D2A8FF] md:mt-0 flex">Launch</button>
     </div>
    </div>
  </div>
</nav>
</header>
    );
};


export default Header;