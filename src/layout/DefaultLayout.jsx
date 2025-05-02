import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"

const DefaultLayout = () => {
    return <>
        <header>
            <Navbar />
        </header>
        <main><Outlet /></main>
    </>
}

export default DefaultLayout;