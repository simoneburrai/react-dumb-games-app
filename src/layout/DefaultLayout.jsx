import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import { useGameResult } from "../contexts/GameResultContext"
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DefaultLayout = () => {
    const { volume, setVolume } = useGameResult();
    return <>
        <header>
            <Navbar />
        </header>
        <main>
            <button onClick={() => setVolume(prev => !prev)} className="volume-button">{volume ? <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeXmark} />}</button>
            <Outlet /></main>
    </>
}

export default DefaultLayout;