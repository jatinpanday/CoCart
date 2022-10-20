import { faHeart, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartIncrementUpdate } from '../../context/CartContext'
import { useQtyCount, useQtyIncrementUpdate } from '../../context/ContextProvider'

const Cart = () => {
    const qtyCount = useQtyCount();
    const qtyIncrement = useQtyIncrementUpdate();
    const cartIncrement = useCartIncrementUpdate();
    console.log(cartIncrement)


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
        <>

            <div style={{ display: "flex", marginTop: "60px" }}>

                <div style={{ width: "50%", textAlign: "center" }}>
                    <img src='lemon.jpg' style={{ width: "560px", height: "450px" }} />
                </div>

                <div style={{ width: "50%", textAlign: "center", marginTop: "3%" }}>
                    <span style={{ fontSize: "30px", fontWeight: "600" }}>Juicy Lemon (min 1Kg)</span>
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "35px" }}>
                        <small>Sold By : </small>
                        <span style={{ color: "#43b028", borderBottom: "2px solid rgb(67,176,40)" }}>Harris Farm Market</span>
                        <small>Status : </small>
                        <span style={{ color: "#43b028", borderBottom: "2px solid rgb(67,176,40)" }}>In Stock</span>
                    </div>
                    <div style={{ fontSize: "30px", fontWeight: "600", margin: "35px 160px 0px 0px" }}>$ 2.47 <small>/ item</small><span style={{ color: "grey", fontWeight: "400" }}> ($10.34 / Kg)</span></div>

                    <div style={{ fontSize: "16px", fontWeight: "400", color: "#828282", margin: "35px 68% 0px 0px" }}>Quantity</div>
                    <div style={{ margin: "0px 64% 0px 0px", display: "flex", width: "100%" }}>
                        <div className='qtyBoxParent'>
                            <div className='qtyBoxChild'>{qtyCount}</div>
                        </div>
                        <div style={{ margin: "30px 0px 0px 20px", fontSize: "20px" }}>
                            <FontAwesomeIcon icon={faMinusCircle} onClick={qtyIncrement.qtyDecrement} />
                            <FontAwesomeIcon icon={faPlusCircle} style={{ marginLeft: "20px" }} onClick={qtyIncrement.qtyIncrement} />
                        </div>
                        <Link style={{ marginTop: "25px", width: "170px" }} to="/cart" className='itemBoxBtn'><span className='btnText' onClick={qtyIncrement} >ADD TO CART</span></Link>
                    </div>

                    <div style={{ margin: "35px 56% 0px 0px" }}>
                        <FontAwesomeIcon icon={faHeart} />  Add to Wishlist
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
                <div className='img-box'>Information</div>
                <div className='img-box' style={{ margin: "0px 10px 0px 10px" }}>Ingrediants</div>
                <div className='img-box'>Directions</div>
            </div>
            <br></br>
            <div className='information'>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui.
            </div>
            <br></br>
            <h4 style={{ color: "black", marginLeft: "45px", fontSize: "25px", width: "210px", borderRadius: "5px", borderBottom: "5px solid #43b028" }}>Related Products</h4>
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
                                <button className='itemBoxBtn' onClick={() => cartIncrement.cartIncrement} >ADD TO CART</button>
                            </div>
                        </>
                    ))
                }
            </div>
            <br></br>
        </>
    )
}

export default Cart