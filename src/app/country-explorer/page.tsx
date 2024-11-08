import Image from "next/image";
import styles from "../country-explorer/country.module.css";
import country from "../../../public/Images/country.png";
import Link from "next/link";
function page() {
  return (
    <div className="countryExplorParent">
      <Image
        src={country}
        alt="country"
        className={styles.countryeExplorImage}
      />
      <div className={styles.countryExplrTextParent}>
        <h1>Country Explorer</h1>
        <p className={styles.countryExplrPara1}>
          Explore the world with our interactive platform! Each country is
          represented by a card featuring the national flag. Simply click on a
          country&apos;s card, and you&apos;ll be taken to a page that provides
          in-depth information about that country.
        </p>

        <h2 className={styles.countryExplrFeaturHead}>Features</h2>
        <ul>
          <li>
            <strong>Bordering Countries:</strong> See which countries share
            borders with the one you&apos;re exploring.
          </li>
          <li>
            <strong>Capital:</strong> Discover the capital city and learn key
            facts about it.
          </li>
          <li>
            <strong>Currencies:</strong> Get information about the
            country&apos;s official currency, including its symbol and usage.
          </li>
          <li>
            <strong>Languages:</strong> Learn what languages are spoken in the
            country.
          </li>
          <li>
            <strong>Population and Area:</strong> Find out the population size
            and the total land area of the country.
          </li>
        </ul>

        <p className={styles.countryExplrPara2}>
          Whether you&apos;re planning to travel or just curious about different
          countries, <strong>Country Explorer</strong> provides a fun and
          educational way to learn about the world!
        </p>
        <p className={styles.countryExplrPara3}>
          For more information, visit the platform{" "}
          <Link
            href="https://all-rest-countries-info.netlify.app/"
            target="_blank"
            className={styles.countryExplrVisitLink}
          >
            Here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default page;
