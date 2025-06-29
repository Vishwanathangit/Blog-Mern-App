import React from "react";
import BlogProfileImage from "../assets/Blog Website Design.png";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import { Download, ArrowRight, Code, Palette, Database, ExternalLink } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const skills = [
    { icon: HTML, name: "HTML5", color: "from-orange-500 to-red-500" },
    { icon: CSS, name: "CSS3", color: "from-blue-500 to-blue-700" },
    { icon: JS, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { icon: REACTICON, name: "React", color: "from-blue-100 to-blue-200" },
    { icon: DB, name: "Database", color: "from-green-400 to-green-600" },
    { icon: NODE, name: "Node.js", color: "from-green-500 to-green-700" },
  ];

  const projects = [
    { image: P1, title: "E-commerce Platform", tech: "React, Node.js" },
    { image: P2, title: "Task Management App", tech: "React, Firebase" },
    { image: P3, title: "Portfolio Website", tech: "React, Tailwind" },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Open for Opportunities
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Hey, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Vishwa
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  Full Stack Developer & UI/UX Enthusiast
                </p>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Crafting seamless, high-performance web experiences with a focus on modern technologies and user-centric design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Hire Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={BlogProfileImage}
                alt="Vishwa - Full Stack Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">My Tech Stack</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Leveraging modern tools to build innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group flex flex-col items-center space-y-3">
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl p-3 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-300`}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
                <div className="text-gray-600 font-medium">Months Experience</div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Professional{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-lg text-gray-500 mt-4">
                  Delivering end-to-end web solutions with a focus on performance and design.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Responsive Web Development</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Modern UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Full-Stack Solutions</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Performance Optimization</span>
                </div>
              </div>
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download CV
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
              Showcasing innovative solutions and modern web development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.tech}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={BlogImage}
                alt="Tech Blogging"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Passionate About{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Tech Blogs
                  </span>
                </h2>
                <p className="text-lg text-gray-500 mt-4">
                  Sharing insights, tutorials, and trends in web development and technology.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Database className="w-6 h-6 text-blue-500" />
                  <span>Latest Technology Trends</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Code className="w-6 h-6 text-indigo-500" />
                  <span>Development Best Practices</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Palette className="w-6 h-6 text-green-500" />
                  <span>Design Insights & Tips</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/blogs")}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              >
                Read My Blogs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;