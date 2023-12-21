import React from "react";
import "../../assets/Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home image"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="TOZO T10 Bluetooth 5.3 Wireless Earbuds with Wireless Charging Case IPX8 Waterproof Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass for Sport Black"
            price={32.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/715CLGC8OML.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 40H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear Cups, for Travel, Home Office"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61O7S27O+jL._AC_SY300_SX300_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="B0CCYNV9PC"
            title="Ailun 3 Pack Screen Protector for iPhone 15 Pro Max [6.7 inch] + 3 Pack Camera Lens Protector with Installation Frame,Sensor Protection,Dynamic Island Compatible,Case Friendly Tempered Glass Film"
            price={10.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71aodrmIgCL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
