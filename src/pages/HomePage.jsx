import placeholderImg from "../assets/image.png"
import { useState } from "react";
import Carousel from "../components/Carousel";
import introSound from "../assets/audios/intro.mp3"
import { useGameResult } from "../contexts/GameResultContext";

const HomePage = () => {
    const [viewGames, setViewGames] = useState(null);
    const { volume } = useGameResult();

    const handleClickButtonView = () => {
        const introAudio = new Audio(introSound);
        if (volume) {
            introAudio.play();
        }
        setViewGames(true)
    }

    return <div className="homepage">
        {!viewGames && <button type="button" className="btn btn-warning p-5" onClick={handleClickButtonView}><h1>View Games</h1></button>}
        {viewGames && <Carousel />}
    </div>






}



export default HomePage;