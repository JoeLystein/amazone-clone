import React from "react";
import "./Home.css"
import Product from "./Product";
import Prod1 from "./prod1.jpg";
import Prophete from "./prophete.jpg"
import Apotre from "./Apotre.jpg";
import Marcelo from "./Marcelo.jpg";
import Cam from "./cam.jpg";
import Amaz from "./amaz.jpg";
import Carz from "./carz.png"
import Tesla from "./tesla.jpg"
import BedFrame from "./BedFrame.jpg"


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

            <div className="home__row">
                <Product 
                id="12321341"
                title="The Learn Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
                price={11.96}
                rating={1}
                image={Prod1}
                />

                <Product 
                id="12321342"
                title="Comment Vivre Comme un Prophete par le Prophete Djo Grace"
                price={14.99}
                rating={4}
                image={Prophete}
                />


                <Product 
                id="12321343"
                title="PS5"
                price={599.90}
                rating={5}
                image={Amaz}
                />
            </div>

            <div className="home__row">
                <Product 
                id="12321344"
                title="Impact des Rencontres de la Destine Par l'Apotre Dalo"
                price={20.99}
                rating={4}
                image={Apotre}
                />

                <Product 
                id="12321345"
                title="Decouvre et Experimente sa presence par le Pasteur Marcelo"
                price={15.95}
                rating={4}
                image={Marcelo}
                />

                <Product 
                id="12321346"
                title="The Learn Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
                price={6.98}
                rating={2}
                image={Prod1}
                />

            </div>
            
            <div className="home__row">
                <Product 
                id="12321347"
                title="The Learn Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
                price={2867.99}
                rating={3}
                image={Cam}
                />

                <Product 
                id="12321348"
                title="Luxury Car"
                price={15998.99}
                rating={4}
                image={Carz}
                />
            </div>


            <div className="home__row">
                <Product 
                id="12321347"
                title="Tesla"
                price={29678.99}
                rating={3}
                image={Tesla}
                />

                <Product 
                id="12321348"
                title="Luxury Car"
                price={15998.99}
                rating={4}
                image={BedFrame}
                />
            </div>
            
            
            
            
        </div>
    ); 
}

export default Home;