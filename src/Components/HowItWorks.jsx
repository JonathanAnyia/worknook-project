import React from 'react';


const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-10">
        <span className="bg-sky-600 text-white px-3 py-1 rounded-full uppercase text-sm font-semibold tracking-wide">
          Process
        </span>
        <h2 className="md:text-3xl text-[1.5rem] font-bold text-black mt-4">
          How It Works
        </h2>
        <p className="text-gray-500 mt-2 px-1">
          Discover the step-by-step journey we take to transform your environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-24">
        {/* Step 1 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
              1
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Sign Up</h3>
            <p className="text-gray-500">Reach out to us with your inquiries or to get started.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
              2
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Pick Your Location</h3>
            <p className="text-gray-500">After contacting us, request an Artisan.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
              3
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Schedule Services</h3>
            <p className="text-gray-500">Our experts will professionally handle your requests.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
              4
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Track and Monitor</h3>
            <p className="text-gray-500">Track your services in real-time using our online tracking system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;




// const steps = [
//   { step: 'Sign Up', description: 'Reach out to us for services.' },
//   { step: 'Pick Your Location', description: 'Request a quote for your location.' },
//   { step: 'Schedule Cleaning', description: 'Our experts will handle your request.' },
//   { step: 'Track and Monitor', description: 'Track your cleaning request.' },
// ];

// const HowItWorks = () => {
//   return (
//     <section id="how-it-works" className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-8">How It Works</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
//         {steps.map((step, index) => (
//           <div key={index} className="p-6 bg-gray-100 rounded-md">
//             <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
//             <p>{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


