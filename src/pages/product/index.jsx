import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductsQuery } from "../../redux/api/productApi";
import LoadingProducts from "../../components/loading/LoadingProducts";
import AboutCards from "../../components/about-product";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDetailProductsQuery(id);
  return (
    <>
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <AboutCards productData={data?.data} />
        // <></>
      )}
    </>
  );
};

export default Product;
