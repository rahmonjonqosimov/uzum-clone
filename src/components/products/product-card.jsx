import baho from "../../assets/icons/baho.svg";
import savat from "../../assets/icons/savat+.svg";
import like from "../../assets/icons/lik.svg";
import liki from "../../assets/icons/lik.png";
import { useNavigate } from "react-router-dom";
import Model from "../model";
import { useState } from "react";
import Detail from "./Detail";

const ProductCard = (product) => {
  const { id, category, description, price, title, units, urls } = product;
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const detailClose = () => {
    setDetail(null);
  };
  document.body.style.overflow = detail ? "hidden" : "auto";

  return (
    <>
      <div className="wrr">
        <img src={like} alt="" className={`lik`} />
        <img src={liki} alt="" className={`liki`} />

        <div onClick={() => setDetail(product)} className="clas">
          <div className="content">
            <div className="conimg">
              {urls?.slice(0, 1)?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Image not found"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                  }}
                />
              ))}

              <div className="chibozor">Chilla Bozor</div>
            </div>
            <div className="conimg-itme">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${id}`)}
                className="bo"
                title={description}
              >
                {description}
              </p>
              <div className="baho1">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )
                </p>
              </div>
              <div className="oyiga1">
                <p>
                  {(+price.slice(0, 10) / 12).toString().slice(0, 5)} so'm/oyiga
                </p>
              </div>
            </div>
          </div>
          <div className="xisobot">
            <div className="nar">
              <p className="narx11">
                <s>
                  {(+price.slice(0, 10) * 1.2).toString().slice(0, 10)} so'm
                </s>
              </p>
              <p className="narx12">{price.slice(0, 10)} so'm</p>
            </div>
          </div>
        </div>

        <div className="sev">
          <img src={savat} alt="" />
        </div>
      </div>
      {detail ? (
        <Model close={detailClose}>
          <Detail product={product} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;
