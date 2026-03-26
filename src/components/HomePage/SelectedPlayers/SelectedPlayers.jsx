import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayers = ({ player, deletedPlayer }) => {
    // console.log(player);
    const { name, image, batting, bowling, type } = player;
    return (
        <>
            <li className="list-row shadow border border-[#1313131A] flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <img
                        className="size-25 rounded-box object-cover object-top"
                        src={image}
                        alt={`${name} image`}
                    />
                    <div>
                        <div className="text-xl font-semibold mb-3">{name}</div>
                        <div className=" opacity-60">
                            {type === "Bowler" ? bowling : batting}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => deletedPlayer(player)}
                    className="btn btn-circle btn-outline btn-error"
                >
                    <RiDeleteBinLine></RiDeleteBinLine>
                </button>
            </li>
        </>
    );
};

export default SelectedPlayers;
