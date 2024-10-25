import Image from "next/image";
import img1 from "../../../public/Images/img1.jpg";
import img2 from "../../../public/Images/Img2.jpg";
import img3 from "../../../public/Images/img3.jpg";
import Skill from "../components/Skill";

function Page() {
  return (
    <section >
      <div className="aboutUpper ">
        <h1 >
          My name is Subhan, I’m a Frontend Developer. I create engaging,
          responsive websites and web applications, ensuring seamless user
          experiences across all devices.
        </h1>
      </div>

      {/* 3 PICS AND TEXT */}
      <div>
        <div className="aboutImageParent ">
          <Image
            src={img1}
            alt="img1"
            className="aboutImage1 "
          />
          <Image
            src={img2}
            alt="img2"
            className="aboutImage2 "
          />
          <Image
            src={img3}
            alt="img3"
            className="aboutImage3 "
          />
        </div>
        <div className="aboutTextParent">
          <h1 >
            With 1+ year of experience, I specialize in crafting intuitive,
            dynamic, and responsive user interfaces that deliver seamless
            digital experiences. With a deep understanding of modern web
            technologies, including HTML, CSS, Tailwind, TypeScript, JavaScript,
            and frameworks like React and Next.js, I bring designs to life with
            clean, efficient, and maintainable code.
          </h1>
          <h3>
            I am adept at creating dynamic, visually appealing interfaces,
            implementing animations, and optimizing user experience. Throughout
            my experience, I have worked on various projects, including
            e-commerce websites, inventory management systems, portfolio
            websites, and more, focusing on delivering high-quality solutions
            while continuously learning and adapting to new technologies.
          </h3>
        </div>
      </div>

      <Skill />
    </section>
  );
}

export default Page;
