import { faAppleAlt, faAppleWhole, faCarrot, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ShopDetails() {
  let fruitsData = [
    {
      id: "1",
      img: "lemon.jpg",
      title: "Lemon",
      price: "2.47",
    },
    {
      id: "2",
      img: "grapes.jpg",
      title: "Black Grapes",
      price: "3.49",
    },
    {
      id: "3",
      img: "lemon.jpg",
      title: "Lemon",
      price: "2.47",
    },
    {
      id: "4",
      img: "grapes.jpg",
      title: "Black Grapes",
      price: "3.49",
    }
  ]

  let vegetablesData = [
    {
      id: "1",
      img: "zuccini.jpg",
      title: "Zucchini Organic",
      price: "7.47",
    },
    {
      id: "2",
      img: "tomato.jpg",
      title: "Hybrid Tomato",
      price: "9.49",
    },
    {
      id: "3",
      img: "zuccini.jpg",
      title: "Zucchini Organic",
      price: "7.47",
    },
    {
      id: "4",
      img: "tomato.jpg",
      title: "Hybrid Tomato",
      price: "9.49",
    }
  ]

  return (
    <div>
      {/* <img src="shopsThumbnail.jpg" className='img-config shopImg' /> */}

      <div className="head-text">
        <div className="head-image" >
          <img src="shopsThumbnail.jpg" alt="Freedom Blog" className='img-config shopImg' />
        </div>
        <div class='text-on-image'>
          <img src='logo.jpg' className='logo' />
          <div className='logoHeading'> Harris Farm Markets </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center', color: "white" }}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            No Ratings Found Yet
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button className='btn-white'>More Info</button>
            <button className='btn-white'>Give a review</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <div className='img-box'><FontAwesomeIcon icon={faCartShopping} /> All</div>
        <div className='img-box' style={{ margin: "0px 10px 0px 10px" }}><FontAwesomeIcon icon={faAppleWhole} /> Fruits</div>
        <div className='img-box'><FontAwesomeIcon icon={faCarrot} /> Vegetables</div>
      </div>

      <h4 style={{ color: "black", marginLeft: "45px", fontSize: "25px", width: "70px", borderRadius: "5px", borderBottom: "5px solid #43b028" }}>Fruits</h4>
      <div style={{ display: "flex" }}>
        {
          fruitsData.map((item) => (
            <>
              <div className='items-box'>
                <div style={{ height: "130px" }}>
                  <img src={item.img} className='shops-config' alt='items' />
                </div>
                <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                <h5 style={{ textAlign: "center" }}>$ {item.price} ($10.34 / Kg)</h5>
                <Link to="/cart" className='itemBoxBtn'><span className='btnText'>ADD TO CART</span></Link>
              </div>
            </>
          ))
        }
      </div>
      <br></br>
      <h4 style={{ color: "black", marginLeft: "45px", fontSize: "25px", width: "135px", borderRadius: "5px", borderBottom: "5px solid #43b028" }}>Vegetables</h4>
      <div style={{ display: "flex" }}>
        {
          vegetablesData.map((item) => (
            <>
              <div className='items-box'>
                <div style={{ height: "130px" }}>
                  <img src={item.img} className='shops-config' alt='items' />
                </div>
                <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                <h5 style={{ textAlign: "center" }}>$ {item.price} ($10.34 / Kg)</h5>
                <button className='itemBoxBtn'>ADD TO CART</button>
              </div>
            </>
          ))
        }
      </div>
      <br></br>
    </div>
  )
}

export default ShopDetails