import React from "react";
import Footer from "./common/Footer";
import BlogProfileImage from "../assets/Blog Website Design.png";
import { Code, Palette, Globe } from "lucide-react";

function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Passionate about building innovative web solutions and sharing knowledge through tech blogs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={BlogProfileImage}
              alt="Vishwa"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm Vishwa, a Full Stack Developer with a passion for creating seamless, high-performance web applications. With expertise in modern technologies like React, Node.js, and Tailwind CSS, I focus on delivering user-centric solutions that combine functionality with aesthetic design.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Code className="w-6 h-6 text-blue-500" />
                <span>Proficient in full-stack development</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Palette className="w-6 h-6 text-indigo-500" />
                <span>Skilled in modern UI/UX design</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Globe className="w-6 h-6 text-green-500" />
                <span>Passionate about sharing knowledge</span>
              </div>
            </div>
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;