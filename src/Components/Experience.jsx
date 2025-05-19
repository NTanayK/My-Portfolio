import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h1>

        {/* Experience 1: Tesseract eSports */}
        {/* <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">Dec 2023 - Jun 2024</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Technical Support Associate -{" "}
              <span className="text-sm text-purple-100">Accenture</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              Began my professional journey at Accenture as a Technical Support
              Associate, where I honed my communication, problem-solving, and
              collaboration skills.
            </p>
            <p className="mb-4 text-neutral-400">
              While I enjoyed my time and maintained excellent rapport with my
              manager and colleagues, I realized that my B.Tech background and
              passion for technology called for a more fulfilling path.
            </p>
            <p className="mb-4 text-neutral-400">
              Driven by this realization, I took a bold step to immerse myself
              in learning Full Stack Python Development in Ameerpet, a decision
              fueled by my determination to excel in the field of software
              development.
            </p>
            <p className="mb-4 text-neutral-400">
              The 5-month course equipped me with technical expertise and
              confidence to build end-to-end applications. Before even
              completing the program, I secured a position as a Full Stack
              Python Developer at LV Prasad Eye Institute.
            </p>
            <p className="mb-4 text-neutral-400">
              This transition showcases my determination, adaptability, and
              commitment to personal and professional growth as I continue to
              evolve in the ever-changing tech landscape.
            </p>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Effective Communication
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Problem Solving
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Adaptability
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Team Work
            </span>
          </motion.div>
        </div> */}

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">Dec 2023 - Jun 2024</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Technical Support Associate –{" "}
              <span className="text-sm text-purple-100">Accenture</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              At Accenture, I worked as a Technical Support Associate, where I
              handled client queries, resolved system-level issues, and ensured
              seamless customer experiences through effective troubleshooting
              and clear communication.
            </p>
            <p className="mb-4 text-neutral-400">
              I consistently met and exceeded performance metrics such as First
              Contact Resolution (FCR) and Average Handling Time (AHT), earning
              appreciation from both my team lead and clients. I actively
              contributed to internal knowledge base documentation and took the
              initiative to help onboard new team members, accelerating their
              learning curve.
            </p>
            <p className="mb-4 text-neutral-400">
              My ability to remain calm under pressure, prioritize tasks, and
              communicate effectively helped streamline escalations and improved
              team efficiency. I was frequently recognized for my
              problem-solving mindset and my collaborative attitude in resolving
              cross-functional issues.
            </p>
            <p className="mb-4 text-neutral-400">
              These experiences laid a strong foundation in technical
              communication, client interaction, and structured problem-solving
              — all of which continue to support my growth in the tech domain.
            </p>
            <p className="mb-4 text-neutral-400">
              While I found success and growth in my support role, I was driven
              by a long-standing goal of becoming a web developer in a reputed
              company. This aspiration led me to pursue focused training in full
              stack development and transition into a more technically creative
              role aligned with my passion.
            </p>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Effective Communication
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Incident Management
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Root Cause Analysis
            </span>
            <br />
            <br />
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Team Collaboration
            </span>
          </motion.div>
        </div>

        {/* Experience 2: LVPEI */}
        {/* <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">Nov 2024 - Present</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Software Developer -{" "}
              <span className="text-sm text-purple-100">
                LVPEI (L.V. Prasad Eye Institute)
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">
              Leading the development of a comprehensive eye recovery management
              system for the institute using cutting-edge web technologies.
            </p>
            <p className="mb-4 text-neutral-400">
              Designing user-friendly interfaces and workflows to streamline the
              process of tracking eye recovery cases.
            </p>
            <p className="mb-4 text-neutral-400">
              Collaborating with medical experts to implement features for
              securely managing sensitive patient data and ensuring compliance
              with data privacy regulations.
            </p>
            <p className="mb-4 text-neutral-400">
              Leveraging React, Django, and PostgreSQL to build scalable and
              maintainable solutions that meet the institute's unique
              requirements.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              React
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Django
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              MySQL
            </span>
          </motion.div>
        </div> */}

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">Nov 2024 - Present</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Software Developer –{" "}
              <span className="text-sm text-purple-100">
                LVPEI (L.V. Prasad Eye Institute)
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">
              At LVPEI, I dove headfirst into the world of healthcare-driven
              technology, leading the development of a high-impact eye recovery
              management system. I wasn’t just writing code—I was solving real
              problems that directly affected patient care.
            </p>
            <p className="mb-4 text-neutral-400">
              From designing seamless user interfaces to handling complex
              workflows, every screen and interaction was crafted with purpose.
              I worked closely with doctors and clinical teams, translating
              medical requirements into functional, secure web features.
            </p>
            <p className="mb-4 text-neutral-400">
              I faced real-world challenges—handling sensitive patient data,
              ensuring system compliance, and optimizing performance at scale.
              With every obstacle, I pushed harder—debugging under pressure,
              refining logic, and elevating the application experience.
            </p>
            <p className="mb-4 text-neutral-400">
              Using React, Django, and PostgreSQL, I architected reliable,
              maintainable modules that are now actively supporting
              decision-making for healthcare professionals across the institute.
            </p>
            <p className="mb-4 text-neutral-400">
              This experience has not only sharpened my technical edge but also
              deepened my passion for building software that makes a difference.
            </p>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Real-World Problem Solving
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              React + Django
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              PostgreSQL & Data Privacy
            </span>
            <br />
            <br />
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Full-Stack Development
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;
