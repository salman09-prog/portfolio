import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref} data-aos="fade-up">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="SensAI - AI Career Coach" />
            </div>
            <div className="text-content">
              <h2>🚀 SensAI — My First AI-Powered Project (AI Career Coach)</h2>
              <p className="text-white-50 md:text-xl">
                SensAI is an AI-powered career coach built with{" "}
                <strong>
                  Next.js, TailwindCSS, Shadcn UI, Prisma ORM, and Gemini API
                </strong>
                . It delivers{" "}
                <strong>AI-driven, real-time career insights</strong> across
                resumes, dashboards, quizzes, and cover letters.
              </p>

              <ul className="list-disc list-inside mt-3 text-white-70 md:text-lg">
                <li>
                  AI-powered industry insights dashboard updated weekly via
                  Inngest
                </li>
                <li>
                  Resume Builder with real-time markdown preview + “Improve with
                  AI” feature
                </li>
                <li>Interview Prep with AI-generated quizzes and feedback</li>
                <li>
                  Cover Letter Generator — role and company-specific with Gemini
                  API
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://lnkd.in/dNe5cga2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🌐 Live Demo
                </a>
                <a
                  href="https://lnkd.in/dX5kCdKy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  💻 GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* right  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
