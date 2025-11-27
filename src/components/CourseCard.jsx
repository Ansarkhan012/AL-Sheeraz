import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaClock, FaUserGraduate } from 'react-icons/fa';

const CourseCard = ({ title, description, image, level, duration, students }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
        >
            <div className="h-48 overflow-hidden relative">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute top-4 right-4 bg-islamic-gold text-dark-blue text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {level}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-dark-blue mb-3">{title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                        <FaClock className="mr-2 text-islamic-gold" />
                        {duration}
                    </div>
                    <div className="flex items-center">
                        <FaUserGraduate className="mr-2 text-islamic-gold" />
                        {students} Students
                    </div>
                </div>

                <button className="w-full flex items-center justify-center bg-dark-blue text-white py-3 rounded-lg hover:bg-islamic-green transition-colors duration-300 font-semibold group">
                    <FaBookOpen className="mr-2 group-hover:rotate-12 transition-transform" />
                    Enroll Now
                </button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
