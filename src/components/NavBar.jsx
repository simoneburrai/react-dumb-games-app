import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
<<<<<<< HEAD
                    <NavLink to="/">HomePage</NavLink>
                </li>
                <li>
                    <NavLink to="/Dice-game">Dice Game</NavLink>
                </li>
                <li>
                    <NavLink to="/Paper-Scissor-Rock">Paper Scissor Rock</NavLink>
                </li>
                <li>
                    <NavLink to="/Tris-game">Tris Game</NavLink>
                </li>
                <li>
                    <NavLink to="/Secret-Number">Secret Number Game</NavLink>
=======
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
>>>>>>> 9104435ca8f9cb08a68baa91e38e66cf662e39b0
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;