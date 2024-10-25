import Image from "next/image";
import countryProject from "../../../public/Images/country.png";
import expenseTracker from "../../../public/Images/expense.png";
import staticResume from "../../../public/Images/static.png";
import dynamicResume from "../../../public/Images/dynamic.png";
import ecommerce from "../../../public/Images/e-commerce.png";
import Link from "next/link";

function Projects() {
  return (
    <section className="projectSection">
      <h1 className="myProjectHead ">
        MY NEW PROJECTS
      </h1>
      <div className="ProjectsGrid  ">
        <div className="project1">
          <Link href="/country-explorer">
            <Image
              src={countryProject}
              alt="Country Project"
              className="ProjectImg "
            />
            <h1 >The Country Explorer</h1>
          </Link>
        </div>

        <div className="project2">
          <Link href="/e-commerce" >
            <Image
              src={ecommerce}
              alt="E-commerce"
              className="ProjectImg "
            />
            <h1 >The E-commerce Web</h1>
          </Link>
        </div>

        <div className="project3">
          <Link href="/expense-tracker" >
            <Image
              src={expenseTracker}
              alt="Expense Project"
              className="ProjectImg "
            />
            <h1>The Expense Tracker</h1>
          </Link>
        </div>

        <div className="project4">
          <Link href="/my-resume" >
            <Image
              src={staticResume}
              alt="My Resume"
              className="ProjectImg "
            />
            <h1>My Resume</h1>
          </Link>
        </div>

        <div className="project5">
          <Link href="/dynamic-resume" >
            <Image
              src={dynamicResume}
              alt="Dynamic Resume"
              className="ProjectImg "
            />
            <h1>The Resume Generator</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
