import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen mt-2 flex items-center justify-center overflow-hidden bg-dark-blue text-white">
            
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>


            <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 to-dark-blue"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-islamic-green text-xl md:text-2xl font-amiri mb-4 tracking-wide">
                        بسم الله الرحمن الرحيم
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 leading-tight">
                        Seek Knowledge from <br />
                        <span className="text-islamic-green">Cradle to Grave</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Join Al Sheeraz on a path of Ilm, Imaan, and Hikmah, bringing timeless Islamic teachings to the modern learner, anytime, anywhere.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-islamic-green text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors text-lg"
                        >
                            Start Learning
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-dark-blue transition-colors text-lg"
                        >
                            Explore Courses
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            
        </section>
    );
};

export default Hero;
