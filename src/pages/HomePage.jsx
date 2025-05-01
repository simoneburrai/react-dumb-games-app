import placeholderImg from "../assets/image.png"
import { useState } from "react";
import Carousel from "../components/Carousel";
import introSound from "../assets/audios/intro.mp3"

const HomePage = () => {
    const [viewGames, setViewGames] = useState(null);

    const handleClickButtonView = () => {
        new Audio(introSound).play();
        setViewGames(true)
    }

    return <>
        {!viewGames && <button type="button" class="btn btn-warning p-5 fs-1" onClick={handleClickButtonView}>View Games</button>}
        {viewGames && <Carousel />}
    </>





}



export default HomePage;