import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import emailjs from '@emailjs/browser';


const Enrollment = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mpp71jb", // Replace with your EmailJS Service ID
      "template_u42zmcg", // Replace with your EmailJS Template ID
      e.target,
      "tWc3eGGzZ4hnhR-JK" // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert("Enrollment submitted! Check your email.");
      e.target.reset(); // Reset form after submit
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
            Student Enrollment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to enroll in our courses. We look forward to having you with us.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
         
          <form className="space-y-8" onSubmit={sendEmail}>

            
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 border-b pb-2">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Student's Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Age"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select
                    id="language"
                    name="language"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    required
                  >
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Course Selection */}
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 border-b pb-2">Course Selection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    required
                  >
                    <option value="">Select a Course</option>
                    <option value="quran-reading">Quran Reading (Nazra)</option>
                    <option value="tajweed">Tajweed Rules</option>
                    <option value="hifz">Quran Memorization (Hifz)</option>
                    <option value="islamic-studies">Islamic Studies</option>
                    <option value="arabic">Arabic Language</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-2">Preferred Schedule</label>
                  <select
                    id="schedule"
                    name="schedule"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    required
                  >
                    <option value="">Select Time Slot</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 border-b pb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Parent's Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="+1 (234) 567-8900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Country"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" name="terms" className="rounded text-primary focus:ring-primary" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a>
              </label>
            </div>

            <Button variant="primary" className="w-full text-lg py-3">
              Submit Enrollment
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Enrollment;
