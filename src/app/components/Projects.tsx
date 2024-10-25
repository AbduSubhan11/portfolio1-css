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
      <h1 className="myProjectHead text-[#868381] text-center font-semibold pb-12">
        MY NEW PROJECTS
      </h1>
      <div className="ProjectsGrid  ">
        <div className="project1">
          <Link href="/country-explorer" className="space-y-5">
            <Image
              src={countryProject}
              alt="Country Project"
              className="ProjectImg shadow-2xl shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif ">The Country Explorer</h1>
          </Link>
        </div>

        <div className="project2">
          <Link href="/e-commerce" className="space-y-7">
            <Image
              src={ecommerce}
              alt="E-commerce"
              className="ProjectImg shadow-2xl shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The E-commerce Web</h1>
          </Link>
        </div>

        <div className="project3">
          <Link href="/expense-tracker" className="space-y-7">
            <Image
              src={expenseTracker}
              alt="Expense Project"
              className="ProjectImg shadow-2xl shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The Expense Tracker</h1>
          </Link>
        </div>

        <div className="project4">
          <Link href="/my-resume" className="space-y-7">
            <Image
              src={staticResume}
              alt="My Resume"
              className="ProjectImg shadow-2xl shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">My Resume</h1>
          </Link>
        </div>

        <div className="project5">
          <Link href="/dynamic-resume" className="space-y-7">
            <Image
              src={dynamicResume}
              alt="Dynamic Resume"
              className="ProjectImg shadow-2xl shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The Resume Generator</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
