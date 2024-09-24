import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy;ShopZone{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
