import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { HiShare } from "react-icons/hi2";
import "./Contenu.css";
import Button from "./button/Button";
import Card from "./card/Card";

function Contenu() {
  return (
    <div className="section1">
      <div className="iconfacebook">
        <NavLink>
          <FaFacebookF />
        </NavLink>
        <br />
        <NavLink to={"/List"}>
          <IoLogoTwitter />
        </NavLink>
        <br />
        <NavLink>
          <FaGoogle />
        </NavLink>
        <br />
        <NavLink>
          <FaInstagram />
        </NavLink>
        <br />
        <p className="follow">FOLLOW US</p>
      </div>
      <div className="summer">
        <div className="rasta"></div>
        <div className="summerCollection">
          <h1 className="titre">
            SUMMER <br /> COLLECTION
          </h1>
          <div className="men">
            <h6 className="p1">01 </h6>
            <p className="wear">MEN'S WEAR</p>
          </div>

          <div className="icon">
            <PiCaretCircleRightLight />
            <IoHeartCircleOutline />
            <HiShare />
          </div>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Quia laudantium nesciunt et ea illum autem mollitia <br />
            assumenda veniam nemo,
            <br /> aperiam, dolorum magnam natus aliquam, cumque optio.
            <br /> Quibusdam soluta incidunt totam.
          </p>
          <Button />

          <Card />
        </div>
      </div>
    </div>
  );
}

export default Contenu;
