import React from 'react';
import ProductCard from './ProductCard';
import './Product.css';
import pimg1 from "./product-images/product1.jpg";
import pimg2 from "./product-images/product2.jpg";
import pimg3 from "./product-images/product3.jpg";
import pimg4 from "./product-images/product4.jpg";
import pimg6 from "./product-images/product5.jpg";
import pimg7 from "./product-images/product7.jpg";
import pimg8 from "./product-images/product8.jpg";
import pimg9 from "./product-images/product9.jpg";
import pimg10 from "./product-images/product11.jpg";
import pimg11 from "./product-images/product12.jpg";
import pimg12 from "./product-images/product13.jpg";
import pimg13 from "./product-images/product14.jpg";
import pimg14 from "./product-images/product15.jpg";
import pimg15 from "./product-images/product16.jpg";
import pimg16 from "./product-images/product17.jpg";
import pimg17 from "./product-images/product18.jpg";
const Product = () => {
  return (
    <div className="product-container-1">
      <div className="prod-head">
        <h1 className="main-product-heading">Our Products</h1>
      </div>
      <div className="prod-comp">
        <div className="prod-1" id="prod-one">
          <div className="prod-subheading">
            <h1>End to End Cross Border Logistics</h1>
          </div>
          <div className="prod-products">
            <ProductCard image={pimg1} name="Ocean: FCL" />
            <ProductCard image={pimg2} name="Ocean: LCL" />
            <ProductCard image={pimg3}  name="International Air" />
            <ProductCard image={pimg4}  name="Customs, CFS, & Handling" />

          </div>
        </div>
        <div className="prod-1" id="prod-two">
          <div className="prod-subheading">
             <h1>Domestic Logistics</h1>
          </div>
          <div className="prod-products">
            <ProductCard image={pimg6}  name="FTL, PTL" />
            <ProductCard image={pimg7}  name="Trailer & Rail Container Haulage" />
          </div>
        </div>
        <div className="prod-1" id="prod-three">
          <div className="prod-subheading">
            <h1>Supply Chain Solutions</h1>
          </div>
          <div className="prod-products">
            <ProductCard image={pimg8}  name="CogoAssured" />
            <ProductCard image={pimg9}  name="Domestic Fulfilment" />
            <ProductCard image={pimg10}  name="Door to Door Shipments" />
            <ProductCard image={pimg11}  name="Cargo Insurance" />
          </div>
        </div>
        <div className="prod-1" id="prod-four">
          <div className="prod-subheading">
            <h1>Financial Services</h1>
          </div>
          <div className="prod-products">
            <ProductCard image={pimg12}  name="Pay Later" />
            <ProductCard image={pimg13}  name="Export Factoring" />
          </div>
        </div>
        <div className="prod-1" id="prod-five">
          <div className="prod-subheading">
            <h1>Trade Management Solution</h1>
          </div>
          <div className="prod-products">
            <ProductCard image={pimg14}  name="Freight Rates & Schedules" />
            <ProductCard image={pimg15} name="Quick Premium Quotations" />
            <ProductCard image={pimg16}  name="Duties & Taxes Calculator" />
            <ProductCard image={pimg17}  name="Tracking & Visibility" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
