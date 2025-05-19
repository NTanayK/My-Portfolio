import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>

        {/* Project 1: E-commerce Website */}
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={300}
                height={150}
                src="ecommerce.jpg"
                alt="E-commerce Website"
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">E-commerce Website</h6>
              <p className="mb-4 text-neutral-400">
                Empower: An e-commerce platform for a 15-year-old family-owned
                crackers shop in Himayat Nagar, Hyderabad. Built using Django,
                it allows customers to check available crackers, book them
                online, and opt for home delivery. The project demonstrates my
                skills in creating tailored, user-centric solutions. It is
                currently under development with plans for further improvements.
                Deployment is planned for the near future.
              </p>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Django
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                HTML
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                JavaScript
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Bootstrap
              </span>
            </motion.div>
          </div>
        </div>

        {/* Project 4: Eye Bank Information System */}
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={300}
                height={150}
                src="eye.jpg"
                alt="Eye Bank Information System"
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                Eye Bank Information System
              </h6>
              <p className="mb-4 text-neutral-400">
                Successfully developed and deployed a real-time Eye Bank
                Information System using React, Django, and MySQL. The
                application supports efficient management of donor and recipient
                data, enabling fast processing across multiple workflows.
              </p>
              <p className="mb-4 text-neutral-400">
                Built to handle over <strong>100,000+ records</strong> with
                optimized performance and smooth user experience, the system is
                now ready to support real-world operations within the institute.
              </p>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                React
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Tailwind CSS
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Django
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                MySQL
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                Role-Based Access (RBAC)
              </span>
            </motion.div>
          </div>
        </div>

        {/* Project 4: Ticketing System */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              width={300}
              height={150}
              src="Ticket.jpg"
              alt="Ticketing System"
              className="mb-6 rounded"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Ticketing System Web Application
            </h6>
            <p className="mb-4 text-neutral-400">
              Designed and built a full-stack ticketing system to streamline
              internal task requests, communication, and workflow assignment.
              The platform supports role-based access for users, admins, and
              sub-admins — ensuring secure and controlled interactions at every
              level.
            </p>
            <p className="mb-4 text-neutral-400">
              Users can raise tickets, upload files (CSV/PDF), request meetings,
              and track progress, while admins can assign tasks, prioritize
              issues, and monitor team workloads in real time.
            </p>
            <p className="mb-4 text-neutral-400">
              Integrated WebSocket-based chat and notification system using
              Django Channels to enable seamless real-time communication,
              instant status updates, and presence tracking.
            </p>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Role-Based Access (RBAC)
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Real-Time WebSocket Chat
            </span>
            <br />
            <br />
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              React + Django + MySQL
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              File Upload & Meeting Booking
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
