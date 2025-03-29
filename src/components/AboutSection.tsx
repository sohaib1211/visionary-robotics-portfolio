
import { Briefcase, GraduationCap, MapPin, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy">Personal Background</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a mechanical engineering student with a passion for robotics, automation, and intelligent systems. 
              My journey is driven by a desire to bridge the gap between theoretical engineering concepts and 
              practical, innovative applications that can transform industries and improve lives.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-teal mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-navy">Education</h4>
                  <p className="text-gray-600">Mechanical Engineering, Ghulam Ishaq Khan Institute (GIKI)</p>
                  <p className="text-gray-500 text-sm">Currently in 6th Semester</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-teal mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-navy">Location</h4>
                  <p className="text-gray-600">Pakistan (Flexible for relocation)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy">Professional Goals</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="text-teal mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-navy">Career Objective</h4>
                  <p className="text-gray-700">
                    To contribute to the development of intelligent, sustainable robotics systems 
                    that can revolutionize industrial processes while addressing environmental challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Rocket className="text-teal mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-navy">Academic Goal</h4>
                  <p className="text-gray-700">
                    Pursue a Master's degree in Robotics or Mechanical Systems from a leading institution 
                    such as ETH Zurich, EPFL, or KTH to further enhance my technical expertise and research capabilities.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-navy/5 rounded-lg border border-navy/10 mt-6">
                <h4 className="font-medium text-navy">Areas of Interest</h4>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    <span className="text-gray-700">Industrial Robotics & Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    <span className="text-gray-700">Machine Learning for Mechanical Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    <span className="text-gray-700">Sustainable Engineering Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
