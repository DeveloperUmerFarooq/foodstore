import React from 'react'

export default function Card(cardTitle,catagory,cardSrc) {
  return (
    <>
    <div className={`${catagory} mb-5 row`}>
          <h1 className=' fs-1 text-decoration-underline text-light' >{catagory}</h1><br />
          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src={cardSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>
        </div>
    </>
  )
}
