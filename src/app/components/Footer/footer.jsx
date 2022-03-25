import React from "react";
import "./footer.css";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-contact-div">
          <h2>Contact Info:</h2>
          <span>
            Call: <a href="tel:02983673">02983673</a> <br />
            Email:{" "}
            <a href="mailto:adhishthan_2022@mbit.edu.in">
              adhishthan_2022@mbit.edu.in
            </a>
            <br />
          </span>
        </div>
        <div className="footer-address-div">
          <h2>Address:</h2>
          <a href="https://g.page/MBIT-CVM-University?share">
            <span>
              Madhuben & Bhanubhai Patel Institute of Technology (MBIT)
              <br />
              P.O.Box No. 8 <br />
              Beyond Vithal Udhyog Nagar, <br />
              Dist. Anand, <br />
              St. Gujarat,
              <br />
              India.
            </span>
          </a>
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
