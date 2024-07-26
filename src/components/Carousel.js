import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/grilled-beef-burger-wooden-table-flame-grilled-generated-by-ai_188544-25122.jpg?t=st=1721970767~exp=1721974367~hmac=c25e8e40e1e7a08d7fb5a36603ba6c364698c248f362cdbcf89543d7c075ebb5&w=1380" height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873922.jpg?t=st=1721970694~exp=1721974294~hmac=38b7cf02739693e7206fb614fce710ee2b4889e597226437440362448f1a7b0d&w=1380" height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/rustic-bread-basket-fresh-meal-preparation-indoors-generated-by-ai_188544-27295.jpg?t=st=1721970874~exp=1721974474~hmac=67f739480526771e537fe1398b6101078243fc656856ef9f74da9093ed153eb8&w=1380" height={600} className="d-block w-100" alt="..."/>
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
