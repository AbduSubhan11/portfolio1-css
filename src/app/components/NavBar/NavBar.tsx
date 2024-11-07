"use client";
import React, { useState } from "react";
import styles from "../NavBar/navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const pathname = usePathname();

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const closeMenu = () => {
    setIsHamburger(false);
  };

  return (
    <nav className={styles.nav}>
      {/* NAV LINKS */}
      <div
        className={`${styles.navLinkParent} ${
          isHamburger
            ? `${styles.hamburgerClickNavLink}`
            : `${styles.hamburgerNotClick} `
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className={`${styles.navLinks} ${
            pathname === "/" ? `${styles.active}` : ""
          }`}
        >
          Work
        </Link>
        <Link
          href="/about"
          onClick={closeMenu}
          className={`${styles.navLinks} ${
            pathname === "/about" ? `${styles.active}` : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/services"
          onClick={closeMenu}
          className={`${styles.navLinks} ${
            pathname === "/services" ? `${styles.active}` : ""
          }`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          onClick={closeMenu}
          className={`${styles.navLinks}  ${
            pathname === "/contact" ? `${styles.active}` : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {/* NAV CENTER HEADING */}
      <div className={styles.NavHeading}>
        <h1>
          Subhan<span>.</span>
        </h1>
      </div>

      {/* SOCIAL LINKS AND NAV BUTTON */}
      <div
        className={`${styles.socialLinksworkbuttonParent}  ${
          isHamburger
            ? `${styles.hamburgerClick} `
            : `${styles.hamburgerNotClick} `
        }`}
      >
        {/* SOCIAL LINKS */}
        <div className={`${styles.socialLinksParent}`}>
          {/* LINKEDIN ICON */}
          <Link href="/" className={styles.socialIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>

          {/* INSTAGRAM ICON */}
          <Link href="/" className={styles.socialIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>

          {/* GITHUB ICON */}
          <Link
            href="https://github.com/AbduSubhan11"
            className={styles.socialIcon}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </Link>
        </div>

        {/* NAV WORK BUTTON */}
        <Link
          href="/contact"
          onClick={closeMenu}
          className={`${styles.workButton}`}
        >
          <span className={`${styles.workbtntext}`}>
            Let&apos;s Work Together
          </span>
          <span className={`${styles.workbtnbg}`}></span>
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className={`${styles.hamburgerParent}`}>
        <button onClick={hamburHandler}>
          <span
            className={` ${isHamburger ? `${styles.hamburspan1}` : ""}`}
          ></span>
          <span
            className={` ${isHamburger ? `${styles.hamburspan2}` : ""}`}
          ></span>
          <span
            className={` ${isHamburger ? `${styles.hamburspan3}` : ""}`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
