import { faMapMarker, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {

  let shopsData = [
    {
      id: "1",
      img: "shopsThumbnail.jpg",
      title: "Harris Farm Markets",
      location: "Castle Hill, NSW AU 2154",
      reviews: "56"
    },
    {
      id: "2",
      img: "chemist.jpg",
      title: "Chemist Warehouse",
      location: "Castle Hill, NSW AU 2154",
      reviews: "56"
    },
    {
      id: "3",
      img: "shopsThumbnail.jpg",
      title: "Harris Farm Markets",
      location: "Castle Hill, NSW AU 2154",
      reviews: "56"
    },
    {
      id: "4",
      img: "chemist.jpg",
      title: "Chemist Warehouse",
      location: "Castle Hill, NSW AU 2154",
      reviews: "56"
    },
  ]
  return (
    <div>
      <img src="cartImage.jpg" className='img-config' />
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "-20px" }}>
        <Link className='img-box' to="/">All</Link>
        <Link className='img-box' to="/asian">Asian</Link>
        <Link className='img-box' to="/beer">Beer,wine & Spirit</Link>
        <Link className='img-box' to="/beverage">Beverages</Link>
        <Link className='img-box' to="/bread">Bread & Bakery</Link>
        <Link className='img-box' to="/dairy">Dairy & Eggs</Link>
        <Link className='img-box' to="/frozen">Frozen</Link>
      </div>
      <h4 style={{ color: "#43B028", marginLeft: "45px" }}>4 Shops Found</h4>
      <div style={{ display: "flex" }}>
        {
          shopsData.map((item) => (
            <>
              <div className='items-box'>
                <div style={{ height: "130px" }}>
                  <img src={item.img} className='shops-config' alt='items' />
                </div>
                <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                <h5 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}</h5>
                <h5 style={{ textAlign: "center" }}>
                  <div style={{ display: 'flex',justifyContent:'center' }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                     {item.reviews} Reviews
                  </div>
                </h5>
                <Link to="/shopDetails" className='itemBoxBtn'><span className='btnText'>VIEW ALL ITEMS</span></Link>
              </div>

            </>
          ))
        }
      </div>
      <br></br>
    </div>
  )
}

export default MainContent