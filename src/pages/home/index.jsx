import React, { useState } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import { useGetProductsQuery } from "../../redux/api/productApi";

const Home = () => {
  const [limit, setLimit] = useState(1);
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: limit * 10,
  });

  return (
    <>
      <Hero />
      <Products
        dataResponse={data?.data?.products}
        isLoading={isLoading}
        isError={isError}
        setLimit={setLimit}
      />
    </>
  );
};

export default Home;
