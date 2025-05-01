import placeholderImg from "../assets/image.png"

const HomePage = () => {

    return (

        <div>

            <div id="carouselExampleCaptions" className="carousel slide">

                <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <img src={placeholderImg} className="d-block w-100" alt="..." />

                        <div className="carousel-caption d-none d-md-block">

                            <h5>Dices</h5>

                            <p>Some representative placeholder content for the first slide.</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img src={placeholderImg} className="d-block w-100" alt="..." />

                        <div className="carousel-caption d-none d-md-block">

                            <h5>Paper, Scissor, Rock</h5>

                            <p>Some representative placeholder content for the second slide.</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img src={placeholderImg} className="d-block w-100" alt="..." />

                        <div className="carousel-caption d-none d-md-block">

                            <h5>Secret Number</h5>

                            <p>Some representative placeholder content for the third slide.</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img src={placeholderImg} className="d-block w-100" alt="..." />

                        <div className="carousel-caption d-none d-md-block">

                            <h5>Tris</h5>

                            <p>Some representative placeholder content for the third slide.</p>

                        </div>

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

        </div>

    )

}



export default HomePage;