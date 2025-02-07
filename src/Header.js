import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"; 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import logo from './logoJ.png'

function Header() {
    const [{basket,user}]=useStateValue(); 
    console.log(basket);

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    return ( <nav className="header">
        <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            {/* <img className="header_logo" src={logo} alt=""/> */}
        </Link>
        {/*search box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        
        <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
                <div onClick={ handleAuthentication  } className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
        </div>

        <div className="header__nav">
            <Link to="/s" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
        </div>


        <div className="header__nav">
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
        </div>

        <Link to="/checkout" className="header__link">
            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

    </nav>
    );
}

export default Header
