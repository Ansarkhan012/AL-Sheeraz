import React from 'react';
import { FaUsers, FaGlobe, FaBookOpen } from 'react-icons/fa';
import Card from '../components/ui/Card';
import aboutUs from '../assets/images/aboutus.png'

const About = () => {
  return (
    <div>
      
      <section className="relative py-24 ">
  
  <div className="absolute inset-0 z-0">
            
            <div className="absolute inset-0 z-0">
                <img
                  src={aboutUs}
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
          </div>

  
  <div className="relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            About Us
          </h1>
          <p className="text-green-50 text-lg mt-4 drop-shadow-xl">
            Knowledge that inspires hearts and strengthens Imaan
          </p>
        </div>
</section>

<div className='className="pt-24 pb-16"'>


      {/* Mission, Vision, Values */}
      <section className="bg-green-50 py-16 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                <FaGlobe size={28} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make Quranic education accessible to every Muslim, regardless of their location or background.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                <FaBookOpen size={28} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted global platform for learning the Quran, Tajweed, and Islamic studies.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                <FaUsers size={28} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, Integrity, Dedication, and Respect for the sacred knowledge we impart.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary mb-12">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                {/* Placeholder for Teacher Image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <FaUsers size={40} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold">Sheikh Name</h3>
              <p className="text-primary font-medium">Quran Teacher</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;