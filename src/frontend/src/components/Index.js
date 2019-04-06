import React, { Component, Fragment } from 'react'
import "./css/main.css"

export class Index extends Component {
  
  render() {
    return (
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide carouselStyle" data-ride="carousel">
                <div className="carousel-inner height-70">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_3.jpg?alt=media&token=8b38bbbb-5195-423e-8783-c731314a5245" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_2.jpg?alt=media&token=55ec4eaa-a298-4c8d-81d2-58cb8971779d" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_1.jpg?alt=media&token=774c39f0-dca2-4dbe-a628-1770b7b19d3d" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <section className="parallax-img">
                <div className="overlay">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>



            <section style={{marginTop: "20px"}}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h3>Our Satisfied Guests say</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{backgroundImage: "url()", border: "1px solid red"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">They somehow delivered my food instantly? *dab*</p>
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{backgroundImage: "url()", border: "1px solid red"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{backgroundImage: "url()", border: "1px solid red"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{backgroundImage: "url()", border: "1px solid red"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>

    )
  }
}

export default Index;