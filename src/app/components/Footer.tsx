import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="flex space-x-20 md:m-20 m-5 py-10  border-black border-b md:text-xl text-[4vw] text-[#202426]">
        {/* PAGES */}
        <div className="pagesSection space-y-5">
          <h1 className="text-[#868381] font-semibold">PAGES</h1>
          <div className="PagesLinks flex flex-col">
            <Link
              href="/"
              className="PagesLink1 hover:underline underline-offset-2"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="PagesLink2 hover:underline underline-offset-2"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONNECT */}
        <div className="connectSection space-y-5">
          <h1 className="text-[#868381] font-semibold">CONNECT</h1>
          <div className="ConnectLinks flex flex-col">
            <Link
              href="https://github.com/AbduSubhan11"
              className="ConnectLink1"
            >
              ↗
              <span className="hover:underline underline-offset-2">GitHub</span>
            </Link>
            <Link href="/" className="ConnectLink2">
              ↗
              <span className="hover:underline underline-offset-2">
                Linkedin
              </span>
            </Link>
            <Link href="/" className="ConnectLink3">
              ↗
              <span className="hover:underline underline-offset-2">
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
