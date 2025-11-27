import React from 'react';
import CourseCard from './CourseCard';

const courses = [
    {
        title: "Tajweed Ul Quran",
        description: "Master the art of Quranic recitation with proper pronunciation and rules.",
        image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1000&auto=format&fit=crop",
        level: "Beginner",
        duration: "3 Months",
        students: "120+"
    },
    {
        title: "Arabic Language",
        description: "Learn to read, write, and speak Arabic fluently with our comprehensive course.",
        image: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?q=80&w=1000&auto=format&fit=crop",
        level: "Intermediate",
        duration: "6 Months",
        students: "85+"
    },
    {
        title: "Islamic Jurisprudence",
        description: "Understand the fundamental rules of Fiqh for daily life application.",
        image: "https://images.unsplash.com/photo-1591628001888-76cc02e2c227?q=80&w=1000&auto=format&fit=crop",
        level: "Advanced",
        duration: "4 Months",
        students: "50+"
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-white" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-islamic-gold font-amiri text-xl mb-2">Our Courses</h2>
                    <h3 className="text-4xl font-playfair font-bold text-dark-blue">Start Your Journey</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-dark-blue text-dark-blue font-bold rounded-full hover:bg-dark-blue hover:text-white transition-colors duration-300">
                        View All Courses
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
