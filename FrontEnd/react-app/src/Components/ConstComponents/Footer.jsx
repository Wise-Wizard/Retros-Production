import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ marginTop: "250px" }}>
      <footer class="footer" style={{fontFamily: "EB Garamond"}}>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <FacebookIcon fontSize="lg" />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <TwitterIcon fontSize="lg" />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <LinkedInIcon fontSize="lg" />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <InstagramIcon fontSize="lg" />
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="#">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Services
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Team
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2023 Retros | All Rights Reserved</p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Footer;
