import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/Dice-game">Dice Game</Link>
                </li>
                <li>
                    <Link to="/Paper-Scissor-Rock">Paper Scissor Rock</Link>
                </li>
                <li>
                    <Link to="/Tris-game">Tris Game</Link>
                </li>
                <li>
                    <Link to="/Secret-Number">Secret Number Game</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;