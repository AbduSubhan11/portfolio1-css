import Image from "next/image";
import staticResume from "../../../public/Images/static.png"
function page() {
  return (
    <div>
        <Image src={staticResume} alt="Myresume" className="myResumeImage"></Image>
      <div className="myResumeTextParent ">
        <h1 >
          Frontend Developer
        </h1>
        <p className="myResumeTextPara1 ">
          Welcome to my resume! I am a passionate and skilled frontend developer
          with hands-on experience in building responsive, user-friendly
          websites and web applications. Whether it&apos;s bringing a creative design
          to life or optimizing the performance of a web project, I am dedicated
          to delivering high-quality solutions.
        </p>

        <h2 className="myResumeFeaturHead ">
          Key Skills
        </h2>
        <ul>
          <li >
            HTML, CSS, JavaScript, React, and Tailwind CSS
          </li>
          <li >
            Responsive Design and Cross-Browser Compatibility
          </li>
          <li >Performance Optimization and Accessibility</li>
          <li >Version Control (Git, GitHub)</li>
        </ul>

        <h3 className="myResumeFreelanceHead ">
          Freelance Opportunities
        </h3>
        <p className="myResumeTextPara2 ">
          I am available to work as a freelancer for frontend development
          projects. If you&apos;re looking to hire a talented and flexible developer
          for your project, feel free to get in touch with me.
        </p>

        <p className="myResumePara3 ">
          Let&apos;s work together to bring your vision to life with modern, scalable
          frontend technologies.
        </p>

        <div className="myResumeStart">
          Visit the platform {""}
          <a
            href="https://subhan-static-resume.netlify.app/"
            className="myResumeVisitLink "
          >
            Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
