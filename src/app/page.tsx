import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Email from "./components/Email/Email";

export default function Home() {
  return (
    <section className="homeSection">
      {/* FRONT PART */}
      <div className="heroes ">
        <h1 className="heroesH1 ">
          Front-End <span className="heroesDevloper ">Developer.</span>
        </h1>
        <p >
          Crafting beautiful, responsive websites that deliver seamless user
          experiences. Turning ideas into reality through code and design. I
          create responsive, interactive interfaces that engage users across all
          devices. With a strong commitment to performance and accessibility, I
          transform design visions into dynamic web applications, ensuring every
          interaction is intuitive and delightful.
        </p>
        <p className="heroesScroll ">SCROLL ↓</p>
      </div>

      <Skill />
      <Projects />
      <Email />
    </section>
  );
}
