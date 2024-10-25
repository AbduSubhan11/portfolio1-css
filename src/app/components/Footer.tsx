import Link from "next/link";

function Footer() {
  return (
    <>
      <footer >
        {/* PAGES */}
        <div className="pagesSection ">
          <h1>PAGES</h1>
          <div className="PagesLinks ">
            <Link
              href="/"
              className="PagesLink1 "
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="PagesLink2 "
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONNECT */}
        <div className="connectSection ">
          <h1>CONNECT</h1>
          <div className="ConnectLinks ">
            <Link
              href="https://github.com/AbduSubhan11"
              className="ConnectLink1"
            >
              ↗
              <span >GitHub</span>
            </Link>
            <Link href="/" className="ConnectLink2">
              ↗
              <span >
                Linkedin
              </span>
            </Link>
            <Link href="/" className="ConnectLink3">
              ↗
              <span >
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </footer>
      <h1 className="footerName">© SUBHAN ALL RIGHTS RESERVED</h1>
    </>
  );
}

export default Footer;
