import React, { useState } from "react";
import ProductCard from "./product-card";
import "./index.scss";
import Loadindata from "../loading";
const Products = (product) => {
  const { dataResponse, isLoading, setLimit } = product;

  return (
    <div className="data">
      <div>
        <>
          <div className="data1">
            {dataResponse?.map((item) => (
              <ProductCard key={item?.id} {...item} />
            ))}
          </div>
          <div className="loding-chil1">
            {isLoading ? <Loadindata /> : <></>}
          </div>
          <button className="yana-hom" onClick={() => setLimit((p) => p + 0.5)}>
            {isLoading ? "Loading..." : "Yana koʻrsatish 5"}
          </button>
        </>
      </div>
    </div>
  );
};

export default Products;
