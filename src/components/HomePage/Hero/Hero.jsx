import React from "react";
import bannerBg from "../../../assets/bg-shadow.png";
import bannerMain from "../../../assets/banner-main.png";

const Hero = () => {
    return (
        <div className="min-h-[60vh] bg-[#131313] relative rounded-3xl mt-6 mb-22">
            <img className="w-full rounded-3xl" src={bannerBg} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-6">
                <img src={bannerMain} alt="" />
                <h1 className="text-[40px] font-bold">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <h4 className="text-2xl font-medium text-[#ffffffb2]">
                    Beyond Boundaries Beyond Limits
                </h4>
                <button className="btn bg-[#E7FE29] text-[#131313] font-bold border-none rounded-xl px-8 py-4 shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)] hover:bg-transparent hover:text-[#E7FE29] hover:shadow-[0_0_0_3px_#E7FE29_inset] active:scale-95 transition-all duration-300 ease-out outline-1 outline-[#E7FE29] outline-offset-8 hover:outline-offset-0">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Hero;
