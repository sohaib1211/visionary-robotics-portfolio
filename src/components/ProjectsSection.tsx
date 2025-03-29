
import { useState } from 'react';
import { Code, BookOpen } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'robotics' | 'automation' | 'design' | 'ai';
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Quadruped Robot with AI Muscles",
      description: "Designed and implemented a four-legged robot platform with artificial muscles controlled by AI algorithms for adaptive locomotion in varied terrains.",
      technologies: ["ROS 2", "Python", "Machine Learning", "SolidWorks", "Control Systems"],
      category: "robotics"
    },
    {
      id: 2,
      title: "5kW BLDC Motor for EVs",
      description: "Engineered a high-performance 5kW brushless DC motor optimized for electric vehicle applications with enhanced efficiency and thermal management.",
      technologies: ["Electromagnetic Design", "Thermal Analysis", "ANSYS", "CAD", "Power Electronics"],
      category: "design"
    },
    {
      id: 3,
      title: "AI Shaft Analysis",
      description: "Developed an intelligent system for predictive analysis of mechanical shaft performance using machine learning to forecast potential failures.",
      technologies: ["Python", "TensorFlow", "MATLAB", "Mechanical Analysis", "Data Visualization"],
      category: "ai"
    },
    {
      id: 4,
      title: "Fruit Picking Robot (NERC 2025)",
      description: "Leading the development of an autonomous robotic system for precise fruit harvesting, combining computer vision and soft robotics grippers.",
      technologies: ["Computer Vision", "PyTorch", "ROS", "Soft Robotics", "Path Planning"],
      category: "robotics"
    },
    {
      id: 5,
      title: "EWOD Microfluidics",
      description: "Researched and designed electrowetting-on-dielectric microfluidic systems for precise liquid handling in laboratory automation applications.",
      technologies: ["Microfluidics", "Surface Science", "Lab Automation", "COMSOL", "Microfabrication"],
      category: "automation"
    },
    {
      id: 6,
      title: "Pipe-Climbing Robot",
      description: "Engineered an autonomous robot capable of climbing and inspecting pipelines of various diameters, with integrated NDT sensors for defect detection.",
      technologies: ["Robotics", "NDT", "SolidWorks", "Embedded Systems", "Sensor Fusion"],
      category: "robotics"
    },
    {
      id: 7,
      title: "Planetary Cycloidal Drive",
      description: "Designed and optimized an innovative planetary cycloidal drive mechanism for high torque density and precision motion control in robotic applications.",
      technologies: ["Mechanical Design", "Gear Systems", "FEA", "Tolerance Analysis", "Prototyping"],
      category: "design"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'all' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'robotics' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveFilter('robotics')}
          >
            Robotics
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'design' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveFilter('design')}
          >
            Mechanical Design
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'ai' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI Systems
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'automation' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveFilter('automation')}
          >
            Automation
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-navy group-hover:text-teal transition-colors duration-300">{project.title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  project.category === 'robotics' ? 'bg-teal/10 text-teal-dark' :
                  project.category === 'automation' ? 'bg-blue-100 text-blue-700' :
                  project.category === 'design' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between mt-6">
                <a href="#" className="text-sm text-navy hover:text-teal flex items-center gap-1 transition-colors">
                  <BookOpen size={16} />
                  <span>Details</span>
                </a>
                <a href="#" className="text-sm text-navy hover:text-teal flex items-center gap-1 transition-colors">
                  <Code size={16} />
                  <span>Technologies</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
