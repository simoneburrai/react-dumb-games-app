import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"

const DefaultLayout = () => {
    return <>
        <header>
            <h1>React Dumb Games</h1>
            <Navbar />
        </header>
        <main><Outlet /></main>
    </>
}


export default DefaultLayout;