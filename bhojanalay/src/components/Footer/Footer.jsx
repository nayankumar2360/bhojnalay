import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>Bhojanalay</h2>

          <p>
            Delicious food delivered to your doorstep quickly and fresh.
          </p>

          <div className="social-icons">

            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaYoutube className="social-icon" />

          </div>

        </div>

        <div className="footer-links">

          <div className="footer-column">

            <h3>Company</h3>

            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>

          </div>

          <div className="footer-column">

            <h3>Support</h3>

            <p>Help Center</p>
            <p>Terms</p>
            <p>Privacy</p>

          </div>

          <div className="footer-column">

            <h3>Contact</h3>

            <p>Kolkata, India</p>
            <p>support@bhojanalay.com</p>
            <p>+91 9876543210</p>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Bhojanalay. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;