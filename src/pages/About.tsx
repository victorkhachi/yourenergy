
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import DP from "../assets/PHOTO-2025-03-31-16-38-31.jpg"
export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">About Y.E.G Solar Solutions</h1>
            <p className="text-xl text-gray-300">
              Y.E.G Solar Solutions is your neighborhood solar company, dedicated to helping homeowners in Maryland, DC, Virginia, Texas, Arizona, New Jersey, and more.
              We are also in Africa. Taking on projects in Nigeria.
            </p>
            <p>
              Pioneering a Greener Future
              For years, Y.E.G Solar Solutions LLC, has been at the forefront of the clean energy revolution, helping homeowners and businesses transition to sustainable solar power.
              With a deep commitment to environmental responsibility and energy efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div >
          <div style={{ minWidth: "40%", width: "60%", margin: "auto" }}>
            <img src={DP} alt="" />
          </div>
          <br /><br />
          <p className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
            Augustus, widely known as “Your Energy Guy”—has dedicated his career to reducing carbon footprints and making renewable energy accessible to all.
          </p>
          <br /><br />
          <p className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
            A Mission for Zero Emissions
            Y.E.G Solar Solutions was founded on the principle of sustainability, with a clear mission: to provide cost-effective, high-quality solar solutions that help clients cut energy costs while contributing to a cleaner planet.

            Over the years, the team at Y.E.G Solar Solutions LLC have empowered countless homeowners to harness the sun’s power, reducing reliance on fossil fuels and moving toward a net-zero emissions future.


            Expertise and Services
            With a wealth of experience in the renewable energy sector, Y.E.G Solar Solutions LLC specialize in:
            <br /><br />
            <ul>
              <li>
                <b style={{color:"orange"}}>Solar Energy Consulting </b>– Educating clients on the benefits of solar and customizing solutions to fit their energy needs.

              </li>
              <br />
              <li>
                <b style={{ color: "orange" }}>Solar Sales & Installation </b>– Delivering top-tier solar panel systems designed for long-term efficiency.
              </li>
              <br />
              <li>
                <b style={{ color: "orange" }}> EV Charging Solutions </b>– Helping homeowners integrate electric vehicle charging into their sustainable lifestyle.

              </li>
            </ul>
          </p>
          <br /><br /> <h3 className=' mx-auto px-4 sm:px-6 lg:px-8' style={{fontSize:"24px" }}>Impact and Vision</h3>
          <p className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
           

            Through expert guidance and state-of-the-art solar technology, Y.E.G Solar Solutions has saved customers thousands in energy costs while significantly reducing their carbon emissions.

            Y.E.G Solar Solutions LLC remains committed to innovation, ensuring that every home and business has access to reliable, renewable energy solutions.
            <br />
            As we always say, "We’re always here to help.”
            And with Y.E.G Solar Solutions LLC, the future is bright—powered by the sun.
          </p>

        </div>

        <div style={{ marginTop: "24px" }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate the world's transition to sustainable energy through accessible,
                innovative solar solutions that empower homes and businesses to achieve energy independence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                A world where clean, renewable energy is the standard, not the alternative.
                We envision communities powered entirely by sustainable energy sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Certification</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center max-w-lg mx-auto"
          >
            <div className="text-yellow-500 mb-4 inline-block">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold">Home Improvement License</h3>
            <p className="text-gray-600 mt-2">Licensed and certified for residential and commercial installations</p>
          </motion.div>
        </div>


      </section>
    </div>
  );
}