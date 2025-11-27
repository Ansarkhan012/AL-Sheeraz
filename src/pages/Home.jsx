import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuran, FaUserGraduate, FaMosque, FaArrowRight } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import banner from '../assets/images/banner.png'
import about from '../assets/images/about.png'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 z-0 opacity-70">
          
          <div className="absolute inset-0 z-0">
              <img
                src={banner}
                alt=""
                className="w-full h-full object-cover opacity-60"
              />
            </div>
        </div>

        <div className="container mx-auto md:mt-9 px-4 md:px-6 z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight animate-fadeInUp">
            Learn Quran & <br />
            <span className="text-white">Islamic Studies</span> Online
            <br />With Certified Scholars
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl mx-auto animate-fadeInUp delay-100">
            Al Sheeraz Islamic Academy welcomes you to a spiritual journey of Quranic learning.
We offer interactive one-on-one classes, expert tutors, flexible timings, and a structured Islamic curriculum for children and adults worldwide.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeInUp delay-200">
            <Link to="/enrollment">
              <Button variant="primary" className="text-lg px-8 py-3">Start Free Trial</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="text-lg px-8 py-3">View Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-secondary mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a supportive and enriching environment for learning the Quran and Islamic values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                
                <FaUserGraduate size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Expert Tutors</h3>
              <p className="text-gray-600">
                Our teachers are certified, experienced, and trained in Tajweed & Islamic studies. Each tutor is selected after a strict evaluation process.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <FaQuran size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose class timings that fit your schedule. Morning, evening, weekend — we make Islamic learning easy and accessible.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <FaMosque size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Interactive One-on-One Classes</h3>
              <p className="text-gray-600">
                We provide personalized attention to every student, ensuring proper pronunciation, Tajweed, and continuous progress.
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* About Us Section */}
<section className="py-20 bg-white">
  <h1 className='text-center text-4xl font-bold'>ABout Us</h1>
  <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

   
    <div>
      <h2 className="font-playfair text-3xl font-bold text-secondary mb-6">
        Al Sheeraz Islamic Academy
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Al Sheeraz Islamic Academy is dedicated to providing authentic and high-quality
        Quranic education to students around the world. Our mission is to make learning
        the Quran easier, accessible, and engaging for all ages.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        With qualified tutors, structured courses, and personalized one-on-one classes,
        we ensure every student progresses with proper guidance, Tajweed, and Islamic values.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          Certified and Experienced Teachers
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          One-on-One Interactive Classes
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          Kids, Adults & Beginners Programs
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          Flexible Timings & Affordable Fee
        </li>
      </ul>
    </div>

    
    <div className="flex justify-center">
      <img
        src={about}
        alt="About Al Sheeraz Islamic Academy"
        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

  </div>
</section>


{/* Pricing Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="font-playfair text-4xl font-bold text-secondary mb-4">
        Affordable Pricing
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Choose the plan that suits you best. Quality Islamic education made affordable for everyone.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Basic Plan */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 text-center">
        <h3 className="font-playfair text-2xl font-bold mb-4">Basic Plan</h3>
        <p className="text-gray-600 mb-6">2 Classes Per Week</p>

        <div className="text-4xl font-bold text-green-600 mb-6">$30</div>

        <ul className="space-y-3 mb-8 text-gray-700">
          <li>✔ One-on-One Classes</li>
          <li>✔ Tajweed Basics</li>
          <li>✔ Flexible Timings</li>
          <li>✔ Monthly Progress Report</li>
        </ul>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl w-full">
          Start Now
        </button>
      </div>

      {/* Standard Plan */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-600 text-center transform md:scale-105">
        <h3 className="font-playfair text-2xl font-bold mb-4">Standard Plan</h3>
        <p className="text-gray-600 mb-6">3 Classes Per Week</p>

        <div className="text-4xl font-bold text-green-600 mb-6">$50</div>

        <ul className="space-y-3 mb-8 text-gray-700">
          <li>✔ One-on-One Classes</li>
          <li>✔ Advanced Tajweed</li>
          <li>✔ Free Trial (2 Days)</li>
          <li>✔ Quran Memorization Guidance</li>
        </ul>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl w-full">
          Most Popular
        </button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 text-center">
        <h3 className="font-playfair text-2xl font-bold mb-4">Premium Plan</h3>
        <p className="text-gray-600 mb-6">5 Classes Per Week</p>

        <div className="text-4xl font-bold text-green-600 mb-6">$80</div>

        <ul className="space-y-3 mb-8 text-gray-700">
          <li>✔ One-on-One Live Sessions</li>
          <li>✔ Full Quran + Tajweed</li>
          <li>✔ Hifz / Nazra Specialized</li>
          <li>✔ 24/7 Student Support</li>
        </ul>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl w-full">
          Enroll Now
        </button>
      </div>

    </div>

  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-green-50">
            Experience our teaching style with a 2-day free trial.
Join thousands of students learning the Quran with clarity, confidence, and proper Tajweed.
          </p>
          <Link to="/enrollment">
            <Button variant="white" className="text-primary font-bold text-lg px-10 py-4 shadow-xl">
              Register Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;