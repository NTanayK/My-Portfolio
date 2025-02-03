import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiMongodb, SiSvelte } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiFramer } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Technologies = () => {
    const iconVariants = (duration) => (
        {
            initial: { y: -30 },
            animate: {
                y: [10, -10],
                transition: {
                    duration: duration,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: "reverse",
                }
            }
        }
    );

    return (
        <>
            <div className='border-b border-neutral-800 pb-24'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className='my-20 text-center text-5xl'>
                    Technologies
                </motion.h1>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className='flex flex-wrap items-center justify-center gap-4'>

                    {/* React */}
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                    </motion.div>

                    {/* MySQL */}
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <GrMysql className='text-7xl text-blue-600' />
                    </motion.div>

                    {/* Tailwind CSS */}
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTailwindcss className='text-7xl text-teal-400' />
                    </motion.div>

                    {/* Framer Motion */}
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiFramer className='text-7xl text-pink-500' />
                    </motion.div>

                    {/* Python */}
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaPython className='text-7xl text-yellow-400' />
                    </motion.div>

                    {/* Django */}
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiDjango className='text-7xl text-green-700' />
                    </motion.div>

                    {/* HTML */}
                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiHtml5 className='text-7xl text-orange-600' />
                    </motion.div>

                    {/* CSS */}
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiCss3 className='text-7xl text-blue-500' />
                    </motion.div>

                    {/* JavaScript */}
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiJavascript className='text-7xl text-yellow-500' />
                    </motion.div>

                    {/* MongoDB */}
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiMongodb className='text-7xl text-green-600' />
                    </motion.div>

                 

                    {/* Bootstrap */}
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <BsBootstrap className='text-7xl text-purple-600' />
                    </motion.div>

                </motion.div>
            </div>
        </>
    );
};

export default Technologies;
