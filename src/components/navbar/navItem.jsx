import { useEffect, useState } from "react";
import uzm1 from "../../assets/icons/uzm1.svg";
import uzm from "../../assets/icons/uzm.svg";
import kirish from "../../assets/icons/odam.svg";
import savat from "../../assets/icons/savatt.svg";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";

import Search from "../search";
import Model from "../model";
import CreateProduct from "../create-product";
const NavItme = () => {
  const [createProduct, setCreateProduct] = useState(false);

  document.body.style.overflow = createProduct ? "hidden" : "auto";

  const closeCreateProduct = () => {
    setCreateProduct(false);
  };

  return (
    <>
      <div className="barr"></div>
      <div className="navitme">
        <div className={`bar-menyu`}>
          <div className="barlin">
            <div className="bar-x"></div>
          </div>
        </div>
        <div className="navitme_w">
          <div className="uzm">
            <Link to="/">
              <img src={uzm} alt="" className="uzmm1" />
              <img src={uzm1} alt="" className="uzmm" />
            </Link>
          </div>
          <div className="navitme_w_item">
            <Search />
            <div className="kirsh">
              <img src={kirish} alt="" />
              <p> Kirish</p>
            </div>
            <Link onClick={() => setCreateProduct(true)} to={"/"}>
              <div className="sara">
                <IoCreateOutline
                  style={{ fontSize: "24px", color: "#141415" }}
                />
                <p> Mahsulot yaratish</p>
              </div>
            </Link>
            <div className="savat-wrapper">
              <div className="savat">
                <img src={savat} alt="" />
                <p className="savatt"> Savat</p>
              </div>
              {/* <div className="savat-product">
                <Link to={"/checkout/products"}>
                  <div className="savat-product1">
                    <p>Buyurtmani rasmilashtirish </p>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {createProduct ? (
        <Model close={closeCreateProduct}>
          <CreateProduct
            setCreateProduct={setCreateProduct}
            createProduct={createProduct}
          />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavItme;
