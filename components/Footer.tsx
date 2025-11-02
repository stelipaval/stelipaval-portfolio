// components/Footer.tsx
"use client";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Main Footer Content */}
    <div className="py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              ML Engineer
            </h3>
          </div>
          <p className="text-blue-200 mb-6 max-w-md leading-relaxed">
            6+ years of experience building cutting-edge machine learning solutions. 
            Specializing in deep learning, computer vision, and scalable AI systems.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-blue-200">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                Projects
              </a>
            </li>
            <li>
              <a href="#technologies" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                Technologies
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <div className="space-y-3">
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-300 group">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <span className="text-sm">your.email@example.com</span>
            </a>
            <div className="flex items-center gap-3 text-blue-200">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-sm">📍</span>
              </div>
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <a href="/resume.pdf" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-300 group">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <span className="text-sm">📄</span>
              </div>
              <span className="text-sm">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="py-6 border-t border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} ML Engineer. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <span className="text-sm hidden sm:block">LinkedIn</span>
          </a>

          <a 
            href="https://github.com/yourprofile" 
            className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="text-sm hidden sm:block">GitHub</span>
          </a>

          <a 
            href="https://twitter.com/yourprofile" 
            className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <span className="text-sm hidden sm:block">Twitter</span>
          </a>

          <a 
            href="mailto:your.email@example.com" 
            className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span className="text-sm hidden sm:block">Email</span>
          </a>
        </div>
      </div>
    </div>

    {/* Back to Top */}
    <div className="text-center py-4 border-t border-white/20">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 group"
      >
        <span>Back to Top</span>
        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
      </button>
    </div>
  </div>
</footer>
  );
}