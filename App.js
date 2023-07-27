import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  -Menu Nav
 * Body
 *  -Search
 *  -Reasto Container
 *      - Resto cart
 * Footer
 *  -Copy Right  
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return(
    <div className="header">
        <div className="logo"><img alt="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img></div>
        <div className="navitem">
            <ul className="menu">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const Search = () => {
   return(
    <div className="search-bar">
        <input type="text" className="search-name" name="search" placeholder="Search your foods"></input>
        <input type="button" className="search-submit" name="submit" value="Submit"></input>
    </div>
   ) 
}

const RestorentCart = () => {
    return(<div className="rest-cart">
        <div className="cartImage">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/thkxegsxq5gvoe3pcxoi" alt="cart"></img>
        </div>
        <div className="cartName"><h3>Khana khaoo</h3></div>
        <div className="item-list">Pizza, Indian</div>
        <div className="cartRating"><p>4.3</p></div>
        <div className="cartTime"><p>30 mins</p></div>
    </div>)
}
const Body =() => {
    return(
        <div className="restor-container">
            <div className="searchform"><Search /></div>
            <div className="resto-list">
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
                <RestorentCart />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);