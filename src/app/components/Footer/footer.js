import React from "react";
import "./footer.css";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-contact-div">
          <h1>Contact Info:</h1>
          <p>Call: 02983673 </p>
          <p>Email: adhishthan_2022@mbit.edu.in</p>
        </div>
        <div className="footer-address-div">
          <h1>Address:</h1>
          <p>Madhuben & Bhanubhai Patel Institute of Technology (MBIT)</p>
          <p>P.O.Box No. 8</p>
          <p>Beyond Vithal Udhyog Nagar,</p>
          <p>Dist. Anand,</p>
          <p> St. Gujarat,</p>
          <p> India.</p>
        </div>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/adhishthan_2022/?utm_medium=copy_link"
          className="footer_icon"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.youtube.com/c/MBICTCollege"
          className="footer_icon"
          target="_blank"
        >
          <FiYoutube />
        </a>
        <a
          href="https://www.mbit.edu.in/"
          className="footer_icon"
          target="_blank"
        >
          <CgWebsite />
        </a>
      </div>
    </div>
  );
}

export default Footer;
