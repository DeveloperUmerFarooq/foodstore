import React from 'react'

export default function Items() {
  return (
    <>
      <div className='container-fluid mb-5 mx-4' id='items'>
        <div className='Pizza mb-5 row'>
          <h1 className=' fs-1 text-decoration-underline text-light' >Pizzas</h1><br />
          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src="images/Pizza.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>

          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src="images/Pizza.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>
        </div>
        <div className='Burger mb-5 row'>
          <h1 className=' fs-1 text-decoration-underline text-light' >Burgers</h1><br />
          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src="images/Burger.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>
        </div>
        <div className='Fries mb-5 row'>
          <h1 className=' fs-1 text-decoration-underline text-light' >Fries</h1><br />
          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src="images/Fries.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>
        </div>
        <div className='Others mb-5 row'>
          <h1 className=' fs-1 text-decoration-underline text-light' >Others</h1><br />
          <div className="card col-3 p-0 m-2" style={{ 'width': '18rem' }}>
            <img src="images/Fries.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <center>
                <button className="btn btn-danger">Add to cart</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
