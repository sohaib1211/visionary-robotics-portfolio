
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, research opportunities, or potential collaborations in 
              the fields of robotics, mechanical engineering, and automation. Feel free to reach out through any of 
              the channels below.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:muhammad.sohaib@example.com" className="contact-link">
                <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <Mail className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Email</h4>
                  <span className="text-gray-600">muhammad.sohaib@example.com</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <Linkedin className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">LinkedIn</h4>
                  <span className="text-gray-600">Connect professionally</span>
                </div>
              </a>
              
              <div className="contact-link">
                <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <MapPin className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Location</h4>
                  <span className="text-gray-600">Pakistan (Flexible for relocation)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 h-fit">
            <h3 className="text-xl font-semibold text-navy mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-navy hover:text-teal transition-colors"
              >
                Download CV <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
