import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/Burger.jpg" height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/Pizza.jpg" height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/Fries.jpg" height={600} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
