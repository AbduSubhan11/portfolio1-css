import Link from "next/link";
import styles from "../Footer/footer.module.css"

function Footer() {
  return (
    <>
      <footer className={styles.footer} >
        {/* PAGES */}
        <div className={styles.pagesSection}>
          <h1>PAGES</h1>
          <div className={styles.PagesLinks}>
            <Link
              href="/"
              className={styles.PagesLink1}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={styles.PagesLink2}
            >
              About
            </Link>
            <Link
              href="/services"
              className={styles.PagesLink3}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={styles.PagesLink4}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONNECT */}
        <div className={styles.connectSection}>
          <h1>CONNECT</h1>
          <div className={styles.ConnectLinks}>
            <Link
              href="https://github.com/AbduSubhan11"
              className={styles.ConnectLink1}
            >
              ↗
              <span >GitHub</span>
            </Link>
            <Link href="/" className={styles.ConnectLink2}>
              ↗
              <span >
                Linkedin
              </span>
            </Link>
            <Link href="/" className={styles.ConnectLink3}>
              ↗
              <span >
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </footer>
      <h1 className={styles.footerName}>© SUBHAN ALL RIGHTS RESERVED</h1>
    </>
  );
}

export default Footer;
