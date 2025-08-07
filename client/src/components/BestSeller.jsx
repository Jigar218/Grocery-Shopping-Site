import React from "react";
import ProductCart from "./ProductCart";
import { UseAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = UseAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium ">BestSeller</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 lg:grid-cols-5 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
