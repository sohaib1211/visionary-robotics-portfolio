
import { GraduationCap, Rocket, Code, Settings } from 'lucide-react';

const FutureSection = () => {
  const futureGoals = [
    {
      title: "Master's Degree",
      description: "Pursue advanced studies in Robotics Engineering or Mechanical Systems at a leading institution such as ETH Zurich, EPFL, or KTH to deepen my expertise in cutting-edge technologies.",
      icon: GraduationCap,
      timeframe: "2025-2027"
    },
    {
      title: "Robotics Startup",
      description: "Launch a technology venture focused on developing affordable, intelligent robotic systems for industrial applications in emerging markets.",
      icon: Rocket,
      timeframe: "2027-2030"
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Establish partnerships between industry and academic institutions to accelerate the transfer of robotics research into practical applications.",
      icon: Settings,
      timeframe: "Ongoing"
    },
    {
      title: "AI-based Mechanical Systems",
      description: "Develop frameworks and methodologies for integrating artificial intelligence with traditional mechanical engineering principles to create more adaptive and efficient systems.",
      icon: Code,
      timeframe: "Long-term Focus"
    }
  ];

  return (
    <section id="future" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Future Plans</h2>
        
        <div className="mt-12">
          <p className="text-gray-700 max-w-3xl mb-10">
            My vision is to be at the forefront of integrating artificial intelligence with mechanical systems,
            creating a new generation of robots and automated solutions that are more efficient, sustainable, and accessible.
            Here's how I plan to pursue this vision:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <goal.icon className="text-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{goal.title}</h3>
                    <span className="text-xs text-gray-500">{goal.timeframe}</span>
                  </div>
                </div>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-navy/10 to-teal/10 rounded-lg p-6 border border-navy/10">
            <h3 className="text-xl font-semibold text-navy mb-4">Research Interests</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-navy mb-2">Soft Robotics</h4>
                <p className="text-sm text-gray-600">Exploring compliant mechanisms and soft actuators for safer human-robot interaction and adaptable gripping.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-navy mb-2">Energy-Efficient Automation</h4>
                <p className="text-sm text-gray-600">Developing robotics solutions with lower energy consumption for sustainable industrial applications.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-navy mb-2">AI-Enhanced Mechanical Design</h4>
                <p className="text-sm text-gray-600">Using machine learning to optimize mechanical components for performance, weight, and manufacturability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
