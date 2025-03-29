
import { Computer, Settings, Rocket } from 'lucide-react';

const SkillsSection = () => {
  const designSkills = [
    { name: "SolidWorks", proficiency: 90 },
    { name: "ANSYS", proficiency: 85 },
    { name: "AutoCAD", proficiency: 80 },
    { name: "3D Printing & Prototyping", proficiency: 75 },
    { name: "GD&T", proficiency: 70 },
  ];

  const programmingSkills = [
    { name: "Python", proficiency: 85 },
    { name: "ROS 2", proficiency: 80 },
    { name: "Machine Learning", proficiency: 75 },
    { name: "Computer Vision", proficiency: 70 },
    { name: "MATLAB", proficiency: 85 },
  ];

  const systemsSkills = [
    { name: "BLDC Motors", proficiency: 90 },
    { name: "Drive Systems", proficiency: 85 },
    { name: "Electromagnetics", proficiency: 80 },
    { name: "Control Theory", proficiency: 75 },
    { name: "Mechanical Analysis", proficiency: 90 },
  ];

  const certifications = [
    { name: "SOLIDWORKS Professional Certification", status: "completed", year: "2023" },
    { name: "ROS 2 Developer", status: "in progress", year: "2024" },
    { name: "Machine Learning Specialization", status: "planned", year: "2024" },
    { name: "Control Systems Professional", status: "planned", year: "2025" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Design Skills */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-navy/10 rounded-lg">
                <Settings className="text-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy">Mechanical Design</h3>
            </div>
            
            <div className="space-y-4">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Programming Skills */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-navy/10 rounded-lg">
                <Computer className="text-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy">Programming</h3>
            </div>
            
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Systems Skills */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-navy/10 rounded-lg">
                <Rocket className="text-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy">Motors & Systems</h3>
            </div>
            
            <div className="space-y-4">
              {systemsSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-navy mb-6">Certifications</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 border border-gray-100 flex flex-col"
              >
                <h4 className="font-medium text-navy">{cert.name}</h4>
                <div className="flex items-center mt-2 mb-1">
                  <span className={`h-2 w-2 rounded-full mr-2 ${
                    cert.status === 'completed' ? 'bg-green-500' : 
                    cert.status === 'in progress' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></span>
                  <span className="text-sm text-gray-600 capitalize">{cert.status}</span>
                </div>
                <span className="text-xs text-gray-500 mt-auto">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
