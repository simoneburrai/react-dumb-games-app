import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >HomePage</NavLink>
                </li>
                <li>
                    <NavLink to="/Dice-game">Dice Game</NavLink>
                </li>
                <li>
                    <NavLink to="/Paper-Scissor-Rock" >Paper Scissor Rock</NavLink>
                </li>
                <li>
                    <NavLink to="/Tris-game" >Tris Game</NavLink>
                </li>
                <li>
                    <NavLink to="/Secret-Number">Secret Number Game</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;