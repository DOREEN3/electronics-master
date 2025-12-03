import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Please fill in both fields");
      return;
    }
    alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="container-fluid footer-section" style={{ backgroundColor: "green" }}>
        <div className="row g-4 p-4">

          {/* Logo */}
          <div className="col-md-2 p-4">
            <Link to="/index.html" className="navbar-brand fs-4 fw-bold">
              <b className="text-warning">Electro</b>
              <span className="text-danger">Mart</span>
            </Link>
          </div>

          {/* About Us */}
          <div className="col-md-3">
            <h4 className="mb-3 text-white">About Us</h4>
            <p className="small text-light">
              Welcome to ElectroMart — your trusted destination for the latest
              and most innovative electronics.
            </p>
            <p className="small text-light">
              Explore high-quality gadgets from top brands and emerging tech innovators.
            </p>
          </div>

          {/* Important Links */}
          <div className="col-md-2">
            <h4 className="mb-3 text-white">Important Links</h4>
            <ul className="list-unstyled small footer-links">

              <li>
                <Link to="/index.html" className="text-black text-decoration-none">Home</Link>
              </li>

              <li>
                <Link to="/signup" className="text-black text-decoration-none ">Sign Up</Link>
              </li>

              <li>
                <Link to="/signin" className="text-black text-decoration-none">Sign In</Link>
              </li>

              <li>
                <Link to="/addelectronics" className="text-black text-decoration-none ">Add Products</Link>
              </li>

              <li>
                <Link to="/cart" className="text-decoration-none">
                  <i className="bi bi-cart-fill" style={{ fontSize: "1.5rem", color: "black" }}></i>
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3">
            <h4 className="text-white mb-3">Contact Us</h4>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-control mb-3"
              required
            />

            <textarea
              placeholder="Leave a message"
              className="form-control mb-3"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button className="btn btn-danger w-100" onClick={handleSubmit}>
              Send Message
            </button>
          </div>

          {/* Social Media */}
          <div className="col-md-2">
            <h4 className="text-white text-center mb-3">Stay Connected</h4>

            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="assets/fb.png" alt="Facebook" className="mx-2" style={{ width: "35px" }} />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="assets/in.png" alt="Instagram" className="mx-2" style={{ width: "35px" }} />
              </a>

              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <img src="assets/x.png" alt="Telegram" className="mx-2" style={{ width: "35px" }} />
              </a>
            </div>

            <p className="small text-light">
              Stay updated with the latest tech trends, exclusive deals, and new arrivals.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container-fluid bg-dark">
        <p className="text-center text-white small mb-0 p-2">
          © {new Date().getFullYear()} ElectroMart — All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
