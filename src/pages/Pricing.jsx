import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import aboutUs from '../assets/images/aboutus.png'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$30',
      period: '/month',
      features: ['2 Classes per week', '30 Minutes per class', 'Basic Tajweed', 'Male/Female Tutors'],
      recommended: false
    },
    {
      name: 'Standard',
      price: '$50',
      period: '/month',
      features: ['3 Classes per week', '30 Minutes per class', 'Advanced Tajweed', 'Hifz Program', 'Progress Reports'],
      recommended: true
    },
    {
      name: 'Premium',
      price: '$80',
      period: '/month',
      features: ['5 Classes per week', '30 Minutes per class', 'All Courses Included', 'Priority Support', 'Certificate of Completion'],
      recommended: false
    }
  ];

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
            Affordable Pricing
          </h1>
          <p className="text-green-50 text-lg mt-4 drop-shadow-xl">
            Knowledge that inspires hearts and strengthens Imaan
          </p>
        </div>
       </section>

        <div className='className="pt-24 pb-16 bg-gray-50"'>

        

      <div className="container mt-12 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${plan.recommended ? 'border-2 border-primary shadow-2xl scale-105 z-10' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-primary flex justify-center items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <FaCheck className="text-primary flex-shrink-0" size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? 'primary' : 'outline'}
                className="w-full"
              >
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Pricing;