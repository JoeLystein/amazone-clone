import React from "react";
import "./Home.css"
import Product from "./Product";
import Prod1 from "./prod1.jpg";

function Home(){
    return(
        <div className="home">
            {/* <div className="home__container"> */}
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> 
            {/* </div> */}
            <Product 
            id="12321341"
            title="The Learn Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={11.96}
            rating={5}
            image={Prod1}
            />
            
            
            
        </div>
    ); 
}

export default Home;