import placeholderImg from "../assets/image.png"
import dice from "../assets/img/DICE.jpg"
import paper from "../assets/img/paper_scissor.jpeg"
import secret from "../assets/img/secret_number.jpeg"
import tris from "../assets/img/tris.jpeg"
import { Link } from 'react-router-dom';
const Carousel = () => {

    return <div className="carousel-container">

        <div id="carouselExampleCaptions" className="carousel slide w-100 h-100 ">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner w-100 h-100">
                <div className="carousel-item w-100 h-100 active">
                    <Link to="/Dice-game">
                        {/* <img src={dice} className="d-block w-100" alt={placeholderImg} /> */}
                        <div className="carousel-caption d-none d-md-block text-danger">
                            <h5 className="text-warning">Dices</h5>
                            <p className="text-warning">Some representative placeholder content for the first slide.</p>
                        </div>
                    </Link>

                </div>

                <div className="carousel-item w-100 h-100">
                    <Link to="/Paper-Scissor-Rock">
                        {/* <img src={paper} className="d-block w-100" alt={placeholderImg} /> */}
                        <div className="carousel-caption d-none d-md-block text-danger">
                            <h5 className="text-warning">Paper, Scissor, Rock</h5>
                            <p className="text-warning">Some representative placeholder content for the second slide.</p>
                        </div>
                    </Link>
                </div>

                <div className="carousel-item w-100 h-100">
                    <Link to="/Secret-Number">
                        {/* <img src={secret} className="d-block w-100" alt={placeholderImg} /> */}
                        <div className="carousel-caption d-none d-md-block text-danger">
                            <h5 className="text-warning">Secret Number</h5>
                            <p className="text-warning">Some representative placeholder content for the third slide.</p>
                        </div>
                    </Link>
                </div>

                <div className="carousel-item w-100 h-100">
                    <Link to="/Tris-game">
                        {/* <img src={tris} className="d-block w-100" alt={placeholderImg} /> */}
                        <div className="carousel-caption d-none d-md-block text-danger">
                            <h5 className="text-warning">Tris</h5>
                            <p className="text-warning">Some representative placeholder content for the third slide.</p>
                        </div>
                    </Link>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>

    </div >

}

export default Carousel;