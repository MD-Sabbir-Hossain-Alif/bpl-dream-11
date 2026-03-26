import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayers = ({ selectedPlayer }) => {
    console.log(selectedPlayer);
    return (
        <div className="mb-50">
            <ul className="list bg-base-100 rounded-box shadow-md flex flex-col gap-6">
                <li className="list-row shadow border border-[#1313131A] flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <img
                            className="size-20 rounded-box"
                            src="https://www.test.com"
                            alt="player image"
                        />
                        <div>
                            <div className="text-xl font-semibold">
                                Dio Lupa
                            </div>
                            <div className=" opacity-60">Remaining Reason</div>
                        </div>
                    </div>

                    <button className="btn btn-circle btn-outline btn-error">
                        <RiDeleteBinLine></RiDeleteBinLine>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default SelectedPlayers;
