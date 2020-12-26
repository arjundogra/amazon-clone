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
            title="Heading1"
            image="https://blog.lulu.com/wp-content/uploads/2020/01/Tammy-Salyer.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            title="Heading1"
            image="https://blog.lulu.com/wp-content/uploads/2020/01/Tammy-Salyer.jpg"
            price={19.99}
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            title="Heading1"
            image="https://blog.lulu.com/wp-content/uploads/2020/01/Tammy-Salyer.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            title="Heading1"
            image="https://blog.lulu.com/wp-content/uploads/2020/01/Tammy-Salyer.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            title="Heading1"
            image="https://blog.lulu.com/wp-content/uploads/2020/01/Tammy-Salyer.jpg"
            price={19.99}
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
