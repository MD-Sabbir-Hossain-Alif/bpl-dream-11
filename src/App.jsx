// import { useEffect, useState } from "react";
import { Suspense, useState, useMemo } from "react";
import "./App.css";
import Hero from "./components/HomePage/Hero/Hero";
import PlayersSection from "./components/HomePage/PlayersSection/PlayersSection";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => (await fetch("/playerData.json")).json();

function App() {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true); // 👈 loader control

    // useEffect(() => {
    //     async function fetchUsers() {
    //         try {
    //             const res = await fetch(
    //                 "https://jsonplaceholder.typicode.com/users",
    //             );
    //             const data = await res.json();
    //             setUsers(data);
    //         } catch (err) {
    //             console.error(err);
    //         } finally {
    //             setLoading(false); // 👈 stop loader
    //         }
    //     }

    //     fetchUsers();
    // }, []);

    const playerPromise = useMemo(() => fetchPlayers(), []);
    const [coin, setCoin] = useState(1100000);

    return (
        // <div className="container">
        //     <div className="api-data">
        //         {!loading &&
        //             users.map((user) => <p key={user.id}>{user.name}</p>)}
        //     </div>

        //     {loading && ( // 👈 show loader only when loading
        //         <div className="glass-container">
        //             <div className="loader"></div>
        //         </div>
        //     )}
        // </div>

        <>
            <div className="max-w-400 w-[82.5%] mx-auto">
                <Navbar coin={coin}></Navbar>
                <Hero></Hero>

                <Suspense
                    fallback={
                        <span className="loading loading-dots loading-xl"></span>
                    }
                >
                    <PlayersSection
                        playerPromise={playerPromise}
                        coin={coin}
                        setCoin={setCoin}
                    ></PlayersSection>
                </Suspense>
                <ToastContainer></ToastContainer>
            </div>
            <div className="max-w-400 w-full bg-[#06091A] mx-auto mt-47">
                <div className="w-[82.5%] mx-auto p-58">hello</div>
            </div>
        </>
    );
}

export default App;
