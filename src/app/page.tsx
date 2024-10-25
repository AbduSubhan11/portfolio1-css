import styles from "./page.module.css";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function Home() {
  return (
    <section className="homeSection md:space-y-16 space-y-10 bg-[#F4F4F4]">
      {/* FRONT PART */}
      <div className="heroes text-center space-y-5 md:py-12 py-10 ">
        <h1 className="heroesH1 text-[#202426] font-bold md:text-[6vw] text-[15vw]">
          Front-End <span className="heroesDevloper text-[#FF5A13]">Developer.</span>
        </h1>
        <p className="text-1xl md:px-80 px-10">
          Crafting beautiful, responsive websites that deliver seamless user
          experiences. Turning ideas into reality through code and design. I
          create responsive, interactive interfaces that engage users across all
          devices. With a strong commitment to performance and accessibility, I
          transform design visions into dynamic web applications, ensuring every
          interaction is intuitive and delightful.
        </p>
        <p className="heroesScroll text-[#B9B2AE] pt-5">SCROLL ↓</p>
      </div>

      <Skill />
      <Projects />
      <Email />
    </section>
  );
}
