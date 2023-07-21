import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          <p>
            Discover a world of endless entertainment with FlixHub. Immerse
            yourself in a vast library of movies and TV shows, carefully curated
            to cater to every taste and preference. From gripping dramas to
            hilarious comedies, thrilling action flicks to heartwarming
            romances, FlixHub has something for everyone.
          </p>
          <p>
            Experience the convenience of streaming your favorite content
            anytime, anywhere. With FlixHub's user-friendly interface, you can
            easily navigate through a diverse range of genres and explore
            personalized recommendations tailored just for you.
          </p>
          <p>
            Join the FlixHub community today and unlock a world of cinematic
            adventures. Visit <a href="/">FlixHub</a> to start your streaming
            journey now.
          </p>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
