import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const PlayersCard = ({ playerPromise, coin, setCoin }) => {
    const players = use(playerPromise);
    // console.log(players);
    const [btnStatus, setBtnStatus] = useState("available");
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const deletedPlayer = (player) => {
        // console.log(selectedPlayer);
        const restOfPlayer = selectedPlayer.filter(
            (item) => item.id !== player.id,
        );
        // console.log(restOfPlayer);
        setSelectedPlayer([...restOfPlayer]);

        toast.error(`${player.name} Removed`);

        setTimeout(() => {
            toast.info(`$${player.price} Coin Added`);
            setCoin((coin) => coin + player.price);
        }, 1000);
    };
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    {btnStatus === "available"
                        ? "Available Players"
                        : `Selected Players (${selectedPlayer.length}/${players.length})`}
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
                        Selected ({selectedPlayer.length})
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
                <ul className="list bg-base-100 rounded-box shadow-md space-y-6 p-5">
                    {selectedPlayer.map((player) => (
                        <SelectedPlayers
                            key={player.id}
                            player={player}
                            deletedPlayer={deletedPlayer}
                        ></SelectedPlayers>
                    ))}
                    <li
                        className={`flex justify-center items-center p-25 text-center text-[#131313b4] ${selectedPlayer.length !== 0 ? "hidden" : ""}`}
                    >
                        <div>
                            <h3 className="text-3xl mb-2 font-medium">
                                No Players Selected yet
                            </h3>
                            <p className="text-lg">
                                Go to Available Tab to Select Player
                            </p>
                        </div>
                    </li>
                </ul>
            )}
        </>
    );
};

export default PlayersCard;
