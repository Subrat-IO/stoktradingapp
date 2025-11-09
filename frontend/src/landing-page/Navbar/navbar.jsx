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
    <nav className={`${styles.container} navbar`}>
      <div className={styles.left}>
        <a href="/">
          <img src="/media/logo.svg" alt="logo" className={styles.logo} />
        </a>
      </div>

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

      {/* Dropdown (account menu) */}
      <div className={styles.menuWrapper} ref={ddRef}>
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-haspopup="true"
        >
          <i className="bx bx-menu" />
        </button>

        <div
          className={`${styles.dropdownMenu} ${open ? styles.show : ""}`}
          role="menu"
        >
          <Link
            to="/account"
            className={styles.dropdownItem}
            onClick={() => setOpen(false)}
          >
            Your Account
          </Link>
          <Link
            to="/stocks"
            className={styles.dropdownItem}
            onClick={() => setOpen(false)}
          >
            Your Stocks
          </Link>

          <div className={`${styles.navlinks}`}>
            <Link to="/signup" className={styles.navlink}>
              SignUp
            </Link>
            <Link to="/about" className={styles.navlink}>
              About
            </Link>{" "}
            <br />
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
          <Link
            to="/logout"
            className={styles.dropdownItem}
            onClick={() => setOpen(false)}
          >
            Log Out <i className="bx bx-log-out" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
