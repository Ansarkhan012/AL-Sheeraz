import React from 'react';
import { motion } from 'framer-motion';
// import enrollImg from '../assets/images/enroll.png'; 

const EnrollForm = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={enrollImg}
                            alt="Enroll"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-xl shadow-md"
                    >
                        <h3 className="text-3xl font-playfair font-bold text-dark-blue mb-6 text-center">
                            Enroll Now
                        </h3>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-islamic-green"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-islamic-green"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-islamic-green"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Course Interested In</label>
                                <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-islamic-green">
                                    <option>Quranic Studies</option>
                                    <option>Islamic History</option>
                                    <option>Expert Scholars Sessions</option>
                                    <option>All Courses</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-islamic-green text-white font-bold py-3 rounded-lg hover:bg-islamic-green-dark transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EnrollForm;
