import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import DabLogo from '../../../assets/images/dablogo2.png'

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.line1}>

            <img src={DabLogo} alt="" />
            <h2 className={styles.h2}>
              Alman dilini və Almanyaya gedişinizi bizim ilə açın.
            </h2>
          </div>
          <div className={styles.line2}>
            <h2>Səhifələr</h2>
            <ul>
              <Link to={"/"}>Ana Səhifə</Link>
              <Link to={"/course"}>Kurslarımız</Link>
              <Link to={"/service"}>Xidmətlərimiz</Link>
              <Link to={"/about"}>Haqqımızda</Link>
              <Link to={"/contact"}>Əlaqə</Link>
              <Link to={"/contact"}>Sosialda Biz</Link>
            </ul>
          </div>
          <div className={styles.line2}>
            <h2>Xidmətlər</h2>
            <ul>
              <Link to={"/service"}>İş vizası</Link>
              <Link to={"/service"}>Ausbildung</Link>
              <Link to={"/service"}>Təhsil vizası</Link>
              <Link to={"/service"}>Turist vizası</Link>
              <Link to={"/service"}>Visa dəstəyi</Link>
              <Link to={"/service"}>SSS</Link>

            </ul>
          </div>
          <div className={styles.line3}>
            <h2>Ünvan</h2>
            <ul>
              <li>Kesle qesebesi</li>
              <a href="tel:0552 518 96 54">0507487048</a>

            </ul>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(Footer);
