import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className='navbar'>HomePage</Link>
                </li>
                <li>
                    <Link to="/Dice-game" className='navbar'>Dice Game</Link>
                </li>
                <li>
                    <Link to="/Paper-Scissor-Rock" className='navbar'>Paper Scissor Rock</Link>
                </li>
                <li>
                    <Link to="/Tris-game" className='navbar'>Tris Game</Link>
                </li>
                <li>
                    <Link to="/Secret-Number" className='navbar'>Secret Number Game</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;