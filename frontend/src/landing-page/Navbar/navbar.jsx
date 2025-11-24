import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav className={`${styles.navbar} navbar`}>
      <div className={styles.left}>
        <a href="/">
          <img src="/media/logo.svg" alt="logo" className={styles.logo} />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className={styles.menulinks}>
        <Link to="/signup" className={styles.navlink}>
          Sign Up
        </Link>
        <Link to="/about" className={styles.navlink}>
          About
        </Link>
        <Link to="/products" className={styles.navlink}>
          Products
        </Link>
        <Link to="/pricing" className={styles.navlink}>
          Pricing
        </Link>
        <Link to="/support" className={styles.navlink}>
          Support
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={styles.menuWrapper} ref={ddRef}>
        <button
          className={styles.dropdownBtn}
          onClick={() => setOpen((s) => !s)}
        >
          <i className="bx bx-menu"></i>
        </button>

        <div className={`${styles.dropdownMenu} ${open ? styles.show : ""}`}>
          <Link to="/signup" className={styles.dropdownItem}>
            Sign Up
          </Link>
          <Link to="/about" className={styles.dropdownItem}>
            About
          </Link>
          <Link to="/products" className={styles.dropdownItem}>
            Products
          </Link>
          <Link to="/pricing" className={styles.dropdownItem}>
            Pricing
          </Link>
          <Link to="/support" className={styles.dropdownItem}>
            Support
          </Link>
          <Link to="/logout" className={styles.dropdownLogout}>
            Log Out <i className="bx bx-log-out"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
