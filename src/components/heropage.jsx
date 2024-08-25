import React from 'react';

const Heropage = () => {
    return (
        <div className="relative">
        <img src="/images/background3.png" alt="grid-img" className="w-full h-[700px]" />
        <div className="absolute flex flex-col items-center justify-center gap-6 inset-x-0 top-36 text-center ">
          <div className="bg-black max-w-max mb-3 px-5 py-2 flex flex-col gap-10 justify-between items-center rounded-[10px] border border-[#8B949E4D] relative top-6">
            <span className="text-[#56D364] text-[14px]">$5 worth of free credit with every sign-up</span>
            <div className="max-w-max absolute z-[50] top-[-0.5px] right-[10%]">
              <img src="https://privateregistry.s3.us-west-1.amazonaws.com/exopodsv2/pseudoBorderOne.png" alt="" className="h-[0.5px] w-[150px]" />
            </div>
            <div className="absolute z-[50] bottom-[-0.5px] left-[10%]">
              <img src="https://privateregistry.s3.us-west-1.amazonaws.com/exopodsv2/pseudoBorderOne.png" alt="" className="h-[0.5px] w-[50%]" />
            </div> 
          </div>
          <h1 className="text-[40px] fsm:text-[50px] xl:text-[55px] 2xl:text-[60px] leading-[45px] fsm:leading-[55px] xl:leading-[60px] 2xl:leading-[65px] font-bold text-[#fff] font-['SF Pro Display'] max-w-[600px] lg:max-w-[680px] 2xl:max-w-[800px]">
            Bring your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#12C2E9] from-10% via-[#C471ED] to-[#F64F59]">Docker image,</span> Go live in minutes.
          </h1>
          <p className="text-[#878593] max-w-[400px] lg:max-w-[680px] 2xl:max-w-[550px] ">
            Built for any language, designed for projects big and small. Exopods simplifies cloud deployments, making it effortless to bring your apps to life.
          </p>
          <button className="rounded-[10px] text-base text-[#0a0a0a] px-[26px] py-[13px] mt-4 fsm:mt-12 flex gap-3 bg-white font-semibold">
            Deploy Now
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9615 18L20.5 12.5199M20.5 12.5199L14.9615 7M20.5 12.5199H2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <img src="images/dashboard.png" alt="dashboard" className="absolute top-[90%] h-auto xs:max-w-[300px] sm:max-w-[350px] md:max-w-[600px] lg:max-w-[768px] 2xl:max-w-[1200px] z-[-1]"  />
        </div>
      </div>
    
    );
};



export default Heropage;