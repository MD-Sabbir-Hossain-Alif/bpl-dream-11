import React, { useState } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaFlag, FaUser, FaStar } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { toast } from "react-toastify";

const AvailablePlayers = ({
    player,
    coin,
    setCoin,
    selectedPlayer,
    setSelectedPlayer,
}) => {
    const { name, country, type, rating, batting, bowling, price, image } =
        player;
    // console.log(player);
    const [selected, setSelected] = useState(false);

    const handalPlayer = () => {
        if (coin - price >= 0) {
            setCoin(coin - price);
            setSelected(true);
            toast.success(`${name} is selected`);
            setSelectedPlayer([...selectedPlayer, player]);
            return;
        }
        toast.error("Not enough coin!");
    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm text-[#131313]">
            <figure className="px-5 pt-5">
                <img
                    className="rounded-xl h-80 w-full object-cover object-top"
                    src={image}
                    alt=""
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser></FaUser> {name}
                </h2>
                <div className="flex justify-between items-center">
                    <p className="flex gap-2 items-center text-[#13131399]">
                        <FaFlag></FaFlag>
                        {country}
                    </p>
                    <p className="badge badge-ghost px-0 py-4 font-medium">
                        {type === "Bowler" ? (
                            <BiSolidCricketBall></BiSolidCricketBall>
                        ) : (
                            <MdSportsCricket></MdSportsCricket>
                        )}{" "}
                        {type}
                    </p>
                </div>
                <div className="divider my-0"></div>
                <p className="font-semibold flex items-center gap-1">
                    <FaStar></FaStar> Rating {rating}
                </p>
                <div className="flex justify-between items-center">
                    <p className={type !== "Bowler" ? "font-semibold" : ""}>
                        {batting}
                    </p>
                    <p
                        className={`text-right ${type === "Bowler" ? "font-semibold" : ""}`}
                    >
                        {bowling}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button
                            disabled={selected}
                            onClick={handalPlayer}
                            className="btn"
                        >
                            {selected ? " Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;
