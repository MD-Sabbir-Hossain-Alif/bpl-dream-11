import React from "react";
import logo from "../../assets/logo.png";
import dollar1 from "../../assets/dollar-1.png";

const Navbar = ({ coin }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none flex justify-between items-center gap-16">
                <ul className="flex justify-between items-center gap-16 text-[#131313aa]">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Fixture</a>
                    </li>
                    <li>
                        <a href="">Teams</a>
                    </li>
                    <li>
                        <a href="">Schedules</a>
                    </li>
                </ul>
                <button className="badge badge-neutral badge-outline px-5 py-5 flex justify-between items-center gap-2 text-xl font-bold rounded-xl text-[#131313] border border-[#1313132d]">
                    {coin} Coin <img src={dollar1} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
