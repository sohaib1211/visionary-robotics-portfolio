
import { Briefcase, Users, Star } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Robotics Club Lead",
      organization: "NERC 2025 Project",
      period: "2023 - Present",
      description: "Leading a team of 15 engineering students in developing an autonomous fruit picking robot for the National Engineering Robotics Contest. Managing project timeline, technical development, and resource allocation.",
      icon: Users,
      category: "leadership"
    },
    {
      title: "Mechanical Head",
      organization: "Formula Student",
      period: "2022 - 2023",
      description: "Supervised the mechanical design and fabrication of critical powertrain components for the university's Formula Student race car. Led a team of 8 mechanical engineers through design, analysis, and manufacturing phases.",
      icon: Briefcase,
      category: "leadership"
    },
    {
      title: "IMS Coordinator",
      organization: "GIKI",
      period: "2022 - Present",
      description: "Coordinating industry-academia partnerships and organizing technical workshops focused on mechanical engineering and robotics applications for undergraduate students.",
      icon: Star,
      category: "coordination"
    },
    {
      title: "Member",
      organization: "SMEP Society",
      period: "2021 - Present",
      description: "Active member of the Society of Mechanical Engineers and Practitioners, participating in technical discussions, collaborative projects, and community outreach programs related to sustainable engineering.",
      icon: Users,
      category: "membership"
    }
  ];
  
  const communityEngagements = [
    {
      title: "Robotics Industry Liaison",
      description: "Building connections between academic robotics research and industry applications through organized meetups and collaborative projects.",
    },
    {
      title: "Technical Workshop Facilitator",
      description: "Conducting workshops on robotics fundamentals, mechanical design, and programming for engineering students and enthusiasts.",
    },
    {
      title: "Online Community Engagement",
      description: "Hosting virtual discussions and knowledge-sharing sessions on emerging trends in industrial robotics and automation.",
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience & Leadership</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Roles & Responsibilities</h3>
            
            <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-11 p-2 bg-white rounded-full border-2 border-gray-200">
                    <exp.icon size={20} className="text-teal" />
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-navy">{exp.title}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-navy/10 text-navy">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{exp.organization}</p>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Community Engagement */}
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Community Engagement</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
              <p className="text-gray-700 mb-6">
                Beyond formal roles, I actively engage with the broader engineering and robotics community 
                to foster knowledge exchange and collaboration across disciplines and sectors.
              </p>
              
              <div className="space-y-6">
                {communityEngagements.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                      <span className="text-navy font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-lg shadow-md p-6">
              <h4 className="font-semibold text-xl mb-3">Personal Interests</h4>
              <p className="mb-4 text-gray-200">
                Outside of my academic and technical pursuits, I maintain several personal interests that contribute to my holistic development and creative thinking.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h5 className="font-medium text-white mb-2">Bonsai & Exotic Birds</h5>
                  <p className="text-sm text-gray-200">
                    Cultivating miniature trees and studying avian behavior patterns as hobbies that develop patience and attention to detail.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h5 className="font-medium text-white mb-2">Novel Technologies</h5>
                  <p className="text-sm text-gray-200">
                    Researching emerging technologies like wireless AC over sound transmission and their potential applications in engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
