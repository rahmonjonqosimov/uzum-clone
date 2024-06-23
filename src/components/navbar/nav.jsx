import React from "react";
import img from "../../assets/icons/joy.svg";
import uz from "../../assets/icons/uz.svg";
import "./index.scss";
const Nav = () => {
  return (
    <div className="wrapper">
      {/* <Ads /> */}
      <div className="nav">
        <div className="kun1">
          Buyurtmangizni 1 kunda bepul yetkazib beramiz!
        </div>
        <div className="nav-itme">
          <div className="img">
            <img src={img} alt="" />
            <p>
              Shahar:
              <span>
                <>
                  <u>Toshkent</u>
                </>
              </span>
            </p>
          </div>
          <div className="topshir">Topshirish punktlari</div>
          <div className="kun">
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
          </div>
          <div className="savol">
            <p> Savol-javoblar</p>
            <p style={{ paddingLeft: "20px" }}>Buyurtmalarim</p>
          </div>
          <div className="uz">
            <img src={uz} alt="" />
            <p> O'zbekcha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
