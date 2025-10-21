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
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://sensai-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/images/project1.jpeg"
                  alt="SensAI - AI Career Coach"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>🚀 SensAI — My First AI-Powered Project (AI Career Coach)</h2>
              <p className="text-white-50 md:text-xl">
                SensAI is an AI-powered career coach built with Next.js,
                TailwindCSS, Shadcn UI, Prisma ORM, Clerk, and Gemini API. It
                provides AI-driven, real-time career insights through
                dashboards, resume builder, quizzes, and cover letter
                generation.
              </p>
            </div>
          </div>

          {/* right  */}
          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#ffe7eb]">
              <a
                href="https://habit-tracker-one-smoky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/images/project3.png"
                  alt="Library Management Platform"
                />
              </a>
            </div>
            <h2>HabitTracker AI - an intelligent habit tracking application</h2>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a
                  href="https://chatify-1-rk2d.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </a>
              </div>
              <h2>Chatify - a real-time chat application</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
