import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayersCard = ({ playerPromise, coin, setCoin }) => {
    const players = use(playerPromise);
    // console.log(players);
    const [btnStatus, setBtnStatus] = useState("available");
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    {btnStatus === "available"
                        ? "Available Players"
                        : "Selected Players"}
                </h2>
                <div className="text-[#13131399]">
                    <button
                        onClick={() => setBtnStatus("available")}
                        className={`btn border-r-0 rounded-r-none ${btnStatus === "available" ? "bg-[#E7FE29] text-[#131313] font-bold" : ""}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setBtnStatus("selected")}
                        className={`btn border-l-0 rounded-l-none ${btnStatus === "selected" ? "bg-[#E7FE29] text-[#131313] font-bold" : ""}`}
                    >
                        Selected
                    </button>
                </div>
            </div>
            {btnStatus === "available" ? (
                <div className="grid grid-cols-3 gap-6">
                    {players.map((player) => (
                        <AvailablePlayers
                            key={player.id}
                            player={player}
                            coin={coin}
                            setCoin={setCoin}
                            selectedPlayer={selectedPlayer}
                            setSelectedPlayer={setSelectedPlayer}
                        ></AvailablePlayers>
                    ))}
                </div>
            ) : (
                <SelectedPlayers
                    selectedPlayer={selectedPlayer}
                ></SelectedPlayers>
            )}
        </>
    );
};

export default PlayersCard;
