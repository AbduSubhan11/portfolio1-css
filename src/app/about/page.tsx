import Image from "next/image";
import img1 from "../../../public/Images/img1.jpg";
import img2 from "../../../public/Images/Img2.jpg";
import img3 from "../../../public/Images/img3.jpg";
import Skill from "../components/Skill";

function Page() {
  return (
    <section className="space-y-20">
      <div className="aboutUpper ">
        <h1 className="text-center text-white md:text-3xl font-semibold">
          My name is Subhan, I’m a Frontend Developer. I create engaging,
          responsive websites and web applications, ensuring seamless user
          experiences across all devices.
        </h1>
      </div>

      {/* 3 PICS AND TEXT */}
      <div className="space-y-10">
        <div className="aboutImageParent flex justify-center items-center relative md:gap-x-36 gap-x-24">
          <Image
            src={img1}
            alt="img1"
            className="aboutImage1 md:w-40 w-20 md:h-36 h-20 rounded-[50%]"
          />
          <Image
            src={img2}
            alt="img2"
            className="aboutImage2 md:w-56 w-36 md:h-56 h-36 absolute rounded-[50%]"
          />
          <Image
            src={img3}
            alt="img3"
            className="aboutImage3 md:w-40 w-20 md:h-36 h-20 rounded-[50%]"
          />
        </div>
        <div className="aboutTextParent md:px-80 px-5 text-[#202426] text-center space-y-5">
          <h1 className=" font-semibold md:text-2xl">
            With 1+ year of experience, I specialize in crafting intuitive,
            dynamic, and responsive user interfaces that deliver seamless
            digital experiences. With a deep understanding of modern web
            technologies, including HTML, CSS, Tailwind, TypeScript, JavaScript,
            and frameworks like React and Next.js, I bring designs to life with
            clean, efficient, and maintainable code.
          </h1>
          <h3 className="text-1xl">
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
