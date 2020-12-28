import React from "react";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />
        <div className="home_row">
          <Product
            title="ASUS ROG Zephyrus Duo 15 Core i7 32GB RTX 2080 8GB GDDR6 Gaming Laptop GX550LXS-HC145TS"
            image="https://www.imastudent.com/images/thumbs/002/0021963_asus-rog-zephyrus-duo-15-core-i7-32gb-rtx-2080-8gb-gddr6-gaming-laptop-gx550lxs-hc145ts_500.jpeg"
            price={129999}
            rating={4}
          />
          <Product
            title="GARMIN APPROACH S62 SPORT GPS GOLF SMARTWATCH"
            image="https://www.imastudent.com/images/thumbs/002/0022736_garmin-approach-s62-sport-gps-golf-smartwatch_500.jpeg"
            price={46000}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="1ASUS REPUBLIC OF GAMERS STRIX IMPACT II GAMING MOUSE"
            image="https://www.imastudent.com/images/thumbs/002/0021406_asus-republic-of-gamers-strix-impact-ii-gaming-mouse_500.jpeg"
            price={1299}
            rating={4}
          />
          <Product
            title="SONY WH-XB900N WIRELESS ACTIVE NOISE-CANCELING OVER-EAR HEADPHONES - BLUE"
            image="https://www.imastudent.com/images/thumbs/002/0022050_sony-wh-xb900n-wireless-active-noise-canceling-over-ear-headphones-blue-open-box_500.jpeg"
            price={12990}
            rating={3}
          />
          <Product
            title='APPLE 27" IMAC PRO WITH RETINA 5K DISPLAY - MQ2Y2HN/A'
            image="https://www.imastudent.com/images/thumbs/001/0015855_apple-27-imac-pro-with-retina-5k-display-mq2y2hna_500.jpeg"
            price={434900}
            rating={3}
          />
        </div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
