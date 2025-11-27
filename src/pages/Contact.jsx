import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import aboutUs from '../assets/images/aboutus.png'

const Contact = () => {
  return (
    <>
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
            Contact Us
          </h1>
          <p className="text-green-50 text-lg mt-4 drop-shadow-xl">
            Knowledge that inspires hearts and strengthens Imaan
          </p>
        </div>
    </section>
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">

        
        


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info Section */}
          <div className="">
            <Card className="flex items-start  gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100  flex items-center justify-center text-primary flex-shrink-0">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+92 (310) 2073882 </p>
                <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@alsheeraz.com</p>
                <p className="text-gray-500 text-sm">We reply within 24 hours</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold mb-2">Office</h3>
                <p className="text-gray-600">
                 Islamic Center ,<br />Mansehra, Pakistan
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form Section */}
          <Card>
            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Country + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your Country"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your City"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
