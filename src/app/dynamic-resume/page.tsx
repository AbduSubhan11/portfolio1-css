import Link from "next/link";
import dynamic from "../../../public/Images/dynamic.png";
import Image from "next/image";

function page() {
  return (
    <div>
      <Image src={dynamic} alt="dynamic-resume" className="dynamicResumeImage "></Image>
      <div className="dynamicResumeTextParent ">
        <h1 >
          Dynamic Resume Builder
        </h1>
        <p className="dynamicResumePara1 ">
          Create your personalized resume effortlessly! Simply fill out the form
          with your personal information, skills, and experience, and instantly
          generate a professionally designed resume tailored to your input.
        </p>

        <h2 className="dynamicResumeFeaturHead">
          Key Features
        </h2>
        <ul >
          <li >
            <strong>Form-Based Input:</strong> Users can enter their personal
            details, skills, education, and work experience.
          </li>
          <li >
            <strong>Real-Time Preview:</strong> See your resume update as you
            fill out the form, ensuring everything looks perfect before
            downloading.
          </li>
          <li >
            <strong>Customization Options:</strong> Choose from a range of
            templates, colors, and layouts to personalize your resume.
          </li>
          <li >
            <strong>Download and Share:</strong> Generate a downloadable PDF of
            your resume, ready to be shared with employers or recruiters.
          </li>
        </ul>

        <h3 className="dynamicResumeHowWork ">
          How It Works
        </h3>
        <p className="dynamicResumePara2 ">
          1. Fill out the form with your personal details (name, contact info,
          skills, work experience, education).
          <br />
          2. Instantly preview your resume as you type, with real-time updates.
          <br />
          3. Customize the layout and design to suit your preferences.
          <br />
          4. Once you’re satisfied, download your resume as a PDF and start
          sharing it with potential employers!
        </p>

        <h3 className="dynamicResumeStart ">
          Start Building Your Resume
        </h3>
        <p className="dynamicResumePara3 ">
          Ready to create your resume? Fill out the form below to get started.
          Your resume will update dynamically based on the information you
          provide.
        </p>

        <div className="dynamicResumeStart ">
            visit platform
          <Link
            href="https://subhan-dynamic-resume.netlify.app/"
            className="dynamicResumeVisitLink "
          >
            &nbsp;Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
