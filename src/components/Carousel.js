import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/a440a5b1-edd8-4fd8-a9dd-ce5e34fe2157/DallEGeneratedImages/dalle-6a9f1a5e-14a4-4992-878f-d4873f4e35430251680082861571205100.jpg&dcHint=KoreaCentral&fileToken=38dd7960-a244-4d44-86a4-7c2234994d6c" loading='lazy' height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/a440a5b1-edd8-4fd8-a9dd-ce5e34fe2157/DallEGeneratedImages/dalle-b9b445e2-bb6e-49cf-aeee-35f10f1aded90251680082249597117900.jpg&dcHint=KoreaCentral&fileToken=38dd7960-a244-4d44-86a4-7c2234994d6c" loading='lazy' height={600} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/a440a5b1-edd8-4fd8-a9dd-ce5e34fe2157/DallEGeneratedImages/dalle-b0c9c32d-0d46-4084-9e7d-7a5e18c764050251680082098592029500.jpg&dcHint=KoreaCentral&fileToken=38dd7960-a244-4d44-86a4-7c2234994d6c" loading='lazy' height={600} className="d-block w-100" alt="..."/>
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
