import React from 'react';
import { motion } from 'framer-motion';
import { FaQuran, FaMosque, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';

const features = [
    {
        icon: <FaQuran />,
        title: "Quranic Studies",
        description: "Comprehensive Tajweed and Tafseer courses for all ages."
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Expert Scholars",
        description: "Learn from qualified and experienced Islamic scholars."
    },
    {
        icon: <FaMosque />,
        title: "Islamic History",
        description: "Explore the rich heritage and history of the Islamic civilization."
    },
    {
        icon: <FaGlobe />,
        title: "Online Learning",
        description: "Flexible schedules with live and recorded sessions accessible anywhere."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-islamic-green font-amiri text-xl mb-2">Why Choose Us</h2>
                    <h3 className="text-4xl font-playfair font-bold text-dark-blue">Excellence in Islamic Education</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-islamic-gold/10 rounded-full flex items-center justify-center text-3xl text-islamic-green mb-6 group-hover:bg-islamic-green group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-dark-blue mb-3">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
