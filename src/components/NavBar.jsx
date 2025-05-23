import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow-sm ">
            <div className='d-flex container-fluid justify-content-center '>
                <NavLink to="/" className="navbar-brand"><h1 className="text-warning ">React Dumb Games</h1></NavLink>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  mb-lg-0 ">
                        <li className="nav-item ">
                            <NavLink
                                to="/Dice-game"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link nav-link text-warning'
                                }

                                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                            >
                                Dado
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Paper-Scissor-Rock"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link nav-link text-warning'
                                }
                                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                            >
                                Carta Forbice Sasso
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Tris-game"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link nav-link text-warning'
                                }
                                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                            >
                                Tris
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Secret-Number"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link nav-link text-warning'
                                }
                                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                            >
                                Numero Segreto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
