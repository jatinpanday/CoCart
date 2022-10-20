import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faCartShopping, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { useCartCount } from '../context/CartContext';

function Header() {

    const cartCount = useCartCount();
    console.log(cartCount)

    return (
        <div className='header'>

            <div>
                <FontAwesomeIcon icon={faBars} style={{ color: "#43B028", fontSize: "26px", marginLeft: "30%" }} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
                <input
                    className='input-config'
                    type="text"
                    placeholder='Delivery Address / Post Code'
                />
                <select
                    name="delivery"
                    className="input-config"
                    style={{ width: "17%" }}
                >
                    <option selected disabled>Deliver ASAP</option>
                </select>

                <div>
                    <FontAwesomeIcon icon={faStore} style={{ color: "#43B028", fontSize: "20px" }} />
                    <span style={{ margin: "0px 0px 0px 5px" }}>Shops</span>
                </div>

                <div style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#43B028", fontSize: "20px" }} />
                    <select
                        name="signIn"
                        className="input-config"
                        style={{ width: "90px", margin: "0px 0px 0px 5px" }}
                    >
                        <option selected disabled>Sign In</option>
                    </select>
                </div>

                <FontAwesomeIcon icon={faHeart} style={{ color: "#43B028", fontSize: "20px" }} />
                <div class="wrapper">
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#43B028", marginLeft: "25px", fontSize: "20px" }} />
                    {cartCount == 0 ? "" : <span>{cartCount}</span> }
                </div>
            </div>
        </div>
    )
}

export default Header