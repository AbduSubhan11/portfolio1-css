import React from "react";
import ecommerce from "../../../public/Images/e-commerce.png";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div>
      <Image src={ecommerce} alt="ecommerce" className="ecommerceImage " />
      <div className="ecommerceTextParent ">
        <h1>
          E-Commerce Platform
        </h1>
        <p className="ecommercePara1">
          Experience seamless online shopping with our E-Commerce Platform!
          Browse, add to cart, and purchase your favorite items effortlessly.
        </p>

        <h2 className="ecommerceFeaturHead ">
          Key Features
        </h2>
        <ul >
          <li>
            <strong>Shopping Cart:</strong> Easily add items to your cart and
            review your selections before checkout.
          </li>
          <li>
            <strong>Wishlist:</strong> Save your favorite products for later and
            never miss out on what you love.
          </li>
          <li>
            <strong>Free Shipping:</strong> Enjoy free shipping on all orders,
            making your shopping experience even more enjoyable.
          </li>
          <li>
            <strong>Customer Support:</strong> Have questions or need
            assistance? Our customer support team is here to help.
          </li>
        </ul>

        <h2 className="ecommerceHowWork ">
          How it Works
        </h2>
        <p className="ecommercePara2 ">
          1. Browse through our wide range of products and add your desired
          items to the cart.
          <br />
          2. Review your cart and proceed to checkout.
          <br />
          3. Enjoy free shipping and excellent customer support throughout your
          shopping experience.
        </p>

        <h3 className="ecommerceStartShopping ">
          Start Shopping Now with Capital.Shop
        </h3>
        <p className="ecommercePara3">
          Keep your spending in check and stay organized with our easy-to-use
          E-commerce plateform! For more details or to start shopping with Capital.Shop,
          visit the platform{" "}
          <Link
            href="https://the-capitalshop.netlify.app/"
            className="ecommerceVisitLink "
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
