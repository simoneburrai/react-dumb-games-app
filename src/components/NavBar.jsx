import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink to="/" class="navbar-brand" href="#" >HomePage</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/Dice-game" class="nav-link active" aria-current="page" >Dice Game</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/Paper-Scissor-Rock" class="nav-link active" aria-current="page" >Paper Scissor Rock</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/Tris-game" class="nav-link active" aria-current="page" >Tris Game</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/Secret-Number" class="nav-link active" aria-current="page" >Secret Number Game</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
