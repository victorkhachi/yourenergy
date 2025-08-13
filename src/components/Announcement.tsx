import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import ann from "../assets/announcememt.jpeg"

const recentProjects: Project[] = [
 

  {
    id: '1',
    title: 'Solar Street Lights',
    type: 'residential',
    location: ' Abo, Delta, Nigeria',
    description: " We’re Expanding  Join the Solar Movement! ☀️ Y.E.G Solar Solutions LLC is on a mission to power homes, businesses and municipals with clean, affordable energy and we’re hiring! We’re looking for driven, energetic, and goal- oriented individuals to join our fast growing team in the following roles:\n•	🔹 Sales Consultants \n•	🔹 Field Sales Agents  \nIf you’re hungry for success, passionate about making an impact, and excited to work in one of the fastest - growing industries this is your moment. 📧 Apply now: Send your resume to hireme @yourenergyguy.com and we’ll be in touch with next steps. \nLet’s build a brighter, cleaner future together.",
    imageUrl: ann,
  },
  
];

export default function Announcement() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Announcements</h2>
          {/* <p className="mt-4 text-xl text-gray-600">See how we're transforming energy consumption</p> */}
        </div>
        <div style={{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
          <div style={{ width: "500px" }}> <img style={{ width: "100%" }} src={ann} alt="" /></div><p style={{ maxWidth: "500px" }}>🚨 We’re Expanding  Join the Solar Movement!<br/>
            {" "} ☀️ Y.E.G Solar Solutions LLC is on a mission to power homes, businesses and municipals with clean, affordable energy and we’re hiring! We’re looking for driven, energetic, and goal- oriented individuals to join our fast growing team in the following roles: <p>•	🔹 Sales Consultants </p>
            <p>•	🔹 Field Sales Agents </p> <br /> If you’re hungry for success, passionate about making an impact, and excited to work in one of the fastest - growing industries this is your moment. <br /> 📧 Apply now: Send your resume to hireme @yourenergyguy.com and we’ll be in touch with next steps. \nLet’s build a brighter, cleaner future together.",
</p>  
        </div>
        <div className="text-left mt-12">
          
        </div>
      </div>
    </section>
  );
}