import Image from "next/image";
import styles from "../Projects/project.module.css"
import countryProject from "../../../../public/Images/country.png";
import expenseTracker from "../../../../public/Images/expense.png";
import staticResume from "../../../../public/Images/static.png";
import dynamicResume from "../../../..//public/Images/dynamic.png";
import ecommerce from "../../../../public/Images/e-commerce.png";
import Link from "next/link";

function Projects() {
  return (
    <section className={styles.projectSection}>
      <h1 className={styles.myProjectHead}>
        MY NEW PROJECTS
      </h1>
      <div className={styles.ProjectsGrid}>
        <div className={styles.project1}>
          <Link href="/country-explorer">
            <Image
              src={countryProject}
              alt="Country Project"
              className={styles.ProjectImg}
            />
            <h1 >The Country Explorer</h1>
          </Link>
        </div>

        <div className={styles.project2}>
          <Link href="/e-commerce" >
            <Image
              src={ecommerce}
              alt="E-commerce"
              className={styles.ProjectImg}
            />
            <h1 >The E-commerce Web</h1>
          </Link>
        </div>

        <div className={styles.project3}>
          <Link href="/expense-tracker" >
            <Image
              src={expenseTracker}
              alt="Expense Project"
              className={styles.ProjectImg}
            />
            <h1>The Expense Tracker</h1>
          </Link>
        </div>

        <div className={styles.project4}>
          <Link href="/my-resume" >
            <Image
              src={staticResume}
              alt="My Resume"
              className={styles.ProjectImg}
            />
            <h1>My Resume</h1>
          </Link>
        </div>

        <div className={styles.project5}>
          <Link href="/dynamic-resume" >
            <Image
              src={dynamicResume}
              alt="Dynamic Resume"
              className={styles.ProjectImg}
            />
            <h1>The Resume Generator</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
