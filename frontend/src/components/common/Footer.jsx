import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 ">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-white">Vishwa</span>
            </div>
            <p className="text-sm text-gray-400">
              Building innovative web solutions with modern technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/blogs" className="hover:text-blue-400 transition-colors">Blogs</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:example@email.com" className="hover:text-blue-400 transition-colors">Email</a></li>
              <li><a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" className="hover:text-blue-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vishwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;