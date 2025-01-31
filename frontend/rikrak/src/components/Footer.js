import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style/Footer.css";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="FooterContainer">
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">About Us</h1>
              <a className="FooterLink" href="/main">
                How it works
              </a>
              <a className="FooterLink" href="/main">
                Testimonials
              </a>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Contact Us</h1>
              <a className="FooterLink" href="/main">
                Contact
              </a>
              <a className="FooterLink" href="/main">
                Suport
              </a>
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Videos</h1>
              <a className="FooterLink" href="/main">
                Submit Video
              </a>
              <a className="FooterLink" href="/main">
                Ambassadors
              </a>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Social Media</h1>
              <a
                className="FooterLink"
                href="https://www.instagram.com/ritikramuka.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                className="FooterLink"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                Linkedin
              </a>
              <a
                className="FooterLink"
                href="https://github.com/ritikramuka"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <Link className="SocialLogo" to="/main" onClick={toggleHome}>
              RikRak
            </Link>
            <small className="WebsiteRights">
              <a
                className="RikRak"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ritik Ramuka"
              >
                Made with ❤️ by Ritik Ramuka
              </a>
            </small>
            <div className="SocialIcons">
              <a
                className="SocialIconLink"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                className="SocialIconLink"
                href="https://github.com/ritikramuka"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>
              <a
                className="SocialIconLink"
                href="https://www.instagram.com/ritikramuka.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
