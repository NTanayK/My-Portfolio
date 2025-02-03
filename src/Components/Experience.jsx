import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <>
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Experience</motion.h1>


                {/* Experience 1: Tesseract eSports */}
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>Dec 2023 - Jun 2024</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            Technical Support Associate - <span className='text-sm text-purple-100'>Accenture</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            Began my professional journey at Accenture as a Technical Support Associate, where I honed my communication, problem-solving, and collaboration skills.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            While I enjoyed my time and maintained excellent rapport with my manager and colleagues, I realized that my B.Tech background and passion for technology called for a more fulfilling path.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            Driven by this realization, I took a bold step to immerse myself in learning Full Stack Python Development in Ameerpet, a decision fueled by my determination to excel in the field of software development.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            The 5-month course equipped me with technical expertise and confidence to build end-to-end applications. Before even completing the program, I secured a position as a Full Stack Python Developer at LV Prasad Eye Institute.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            This transition showcases my determination, adaptability, and commitment to personal and professional growth as I continue to evolve in the ever-changing tech landscape.
                        </p>


                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            Effective Communication
                        </span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            Problem Solving 
                        </span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            Adaptability
                        </span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            Team Work
                        </span>
                    </motion.div>
                </div>

                {/* Experience 2: LVPEI */}
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>Nov 2024 - Present</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            Software Developer - <span className='text-sm text-purple-100'>LVPEI (L.V. Prasad Eye Institute)</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            Leading the development of a comprehensive eye recovery management system for the institute using cutting-edge web technologies.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            Designing user-friendly interfaces and workflows to streamline the process of tracking eye recovery cases.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            Collaborating with medical experts to implement features for securely managing sensitive patient data and ensuring compliance with data privacy regulations.
                        </p>
                        <p className='mb-4 text-neutral-400'>
                            Leveraging React, Django, and PostgreSQL to build scalable and maintainable solutions that meet the institute's unique requirements.
                        </p>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            React
                        </span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            Django
                        </span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            MySQL
                        </span>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Experience;
