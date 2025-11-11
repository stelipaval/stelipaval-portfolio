// app/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text content - left side */}
              <div className="lg:w-1/2 text-center lg:text-left">
                {/* Personal introduction section */}
                <div className="mb-8">
                  {/* Name and title */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-gradient">
                    Stelica Paval
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-cyan-100 mb-6">
                    ML Engineer | Full-Stack Developer
                  </h2>

                  {/* Experience badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-cyan-100 font-semibold text-lg">
                      7+ Years Building Scalable Solutions
                    </span>
                  </div>
                </div>

                {/* Personal description */}
                <div className="max-w-2xl">
                  <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed font-light">
                    I specialize in creating <span className="text-cyan-200 font-semibold">intelligent software solutions</span> that
                    bridge <span className="text-purple-200 font-semibold">cutting-edge AI</span> with
                    <span className="text-pink-200 font-semibold"> robust full-stack applications</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
                      <a href="#projects"> View Projects

                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </button>

                    <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <a href="/resume.pdf" download="StelicaDPaval-resume.pdf">
                        <span>📄 Download Resume</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile picture - right side */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                  {/* Profile image container */}
                  <div className="relative w-92 h-92 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/profile-picture.png"
                      alt="Stelica Paval - Senior Software Engineer"
                      className="object-cover "
                      width={500}
                      height={500}
                    />
                  </div>

                  {/* Floating tech badges */}
                  <div className="absolute -bottom-4 -left-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                    AI/ML
                  </div>
                  <div className="absolute -top-4 -right-4 bg-purple-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                    Full Stack
                  </div>
                  <div className="absolute top-1/2 -left-8 bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                    Cloud
                  </div>
                </div>
              </div>
            </div>


            {/* Social Links */}
            <div className="mt-12 flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/stelica-paval"
                className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/stelipaval"
                className="group flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />


        {/* Mentorship Section */}
        <section id="mentorship" className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 -right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Teaching & Mentorship</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-4">
                Education & Mentorship
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sharing knowledge and guiding the next generation of developers and engineers
              </p>
            </div>

            {/* Experience Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Teacher Assistant */}
              <div className="group">
                <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          Teacher Assistant
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold mt-1">Maharishi International University</p>
                      </div>
                      <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        On-site
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-6 self-start">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 font-semibold">Mar 2022 - Dec 2022</span>
                    </div>
                    <p className="text-gray-500 mb-4">Fairfield, IA</p>

                    <ul className="space-y-3 flex-grow">
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Graded homework, exams and provided detailed feedback to students</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Worked one-on-one with struggling students to improve understanding of complex topics</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Assisted students with projects and assignments, providing technical guidance and mentorship</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Facilitated learning through personalized support and additional explanations</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Teaching</span>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">Mentorship</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Academic Support</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Student Guidance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programming Instructor */}
              <div className="group">
                <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Programming Instructor
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold mt-1">Logiscool</p>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        On-site
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-6 self-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-semibold">Feb 2019 - Jan 2020</span>
                    </div>
                    <p className="text-gray-500 mb-4">Bucharest, Romania</p>

                    <ul className="space-y-3 flex-grow">
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Taught children aged 5-15 the fundamentals of programming, AI, Python, and Unity</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed engaging game-based learning exercises to explain complex programming concepts</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Created age-appropriate curriculum that made programming accessible and fun for young learners</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Fostered creativity and problem-solving skills through interactive coding activities and projects</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">Unity</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">AI Education</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Game Development</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Youth Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 -right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Early Career</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-orange-800 to-amber-800 bg-clip-text text-transparent mb-4">
                Internship Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Foundation of my professional journey in software development and machine learning
              </p>
            </div>

            {/* Internship Card */}
            <div className="group">
              <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Software Developer Intern
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold mt-1">Yardi Systems</p>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      On-site
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-6">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-semibold">May 2017 - Jul 2017</span>
                  </div>
                  <p className="text-gray-500 mb-6">Bucharest, Romania</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        Project Objectives
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Build a forecasting engine to predict daily freight rates based on historical data</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Embed features to explain seasonal changes in freight rates across different regions</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                        </svg>
                        Technical Implementation
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Deployed predictive model on AWS EC2 instance</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented Kafka stream jobs for real-time data processing</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Utilized ElasticSearch for efficient data indexing and search</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Managed data storage and retrieval with PostgreSQL</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">AWS EC2</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Kafka</span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">ElasticSearch</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Time Series</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <Projects />
        </section>

        {/* Education Section */}
        <Education />

        {/* Technologies Section */}
        <section id="technologies" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Elements - Consistent with previous sections */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Technical Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Technologies & Skills
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive expertise across machine learning, full-stack development, and cloud technologies
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* ML Frameworks */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white hover:border-cyan-300 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl text-white">🧠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">ML Frameworks</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'PyTorch', level: 95, color: 'from-red-500 to-orange-500' },
                      { name: 'TensorFlow', level: 90, color: 'from-orange-500 to-yellow-500' },
                      { name: 'FastAPI', level: 92, color: 'from-green-500 to-teal-500' },
                      { name: 'Scikit-learn', level: 88, color: 'from-yellow-500 to-orange-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
                          <span className="text-gray-600 text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Programming */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white hover:border-green-300 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl text-white">💻</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Programming</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Python', level: 98, color: 'from-blue-500 to-cyan-500' },
                      { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-500' },
                      { name: 'SQL', level: 88, color: 'from-purple-500 to-pink-500' },
                      { name: 'C#/.NET', level: 85, color: 'from-purple-500 to-indigo-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
                          <span className="text-gray-600 text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* MLOps & Cloud */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl text-white">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">MLOps & Cloud</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Docker', level: 90, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Kubernetes', level: 85, color: 'from-blue-500 to-indigo-500' },
                      { name: 'AWS', level: 88, color: 'from-orange-500 to-red-500' },
                      { name: 'PostgreSQL', level: 90, color: 'from-blue-500 to-purple-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
                          <span className="text-gray-600 text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frontend & Tools */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white hover:border-orange-300 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl text-white">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Frontend & Tools</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'React/Next.js', level: 92, color: 'from-cyan-500 to-blue-500' },
                      { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-cyan-500' },
                      { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
                      { name: 'Angular', level: 85, color: 'from-red-500 to-pink-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
                          <span className="text-gray-600 text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-wrap justify-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-200/50 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl text-cyan-600 mb-2">🚀</div>
                  <div className="text-gray-700 font-semibold">Real-time Systems</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-green-600 mb-2">📊</div>
                  <div className="text-gray-700 font-semibold">Data Engineering</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-purple-600 mb-2">🔍</div>
                  <div className="text-gray-700 font-semibold">Research & Development</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-orange-600 mb-2">🏗️</div>
                  <div className="text-gray-700 font-semibold">System Architecture</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-2">⚙️</div>
                  <div className="text-gray-700 font-semibold">CI/CD Pipelines</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-500"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Contact Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100 font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6">
                  Let&apos;s Build Something Amazing
                </h2>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Ready to bring your machine learning ideas to life?
                  Whether it&apos;s a complex AI challenge or innovative ML solution,
                  I&apos;m here to help transform your vision into reality.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-cyan-400 text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="text-white font-semibold">paval.stelica@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-400 text-xl">📞</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <p className="text-white font-semibold">(313) 663-1221</p>
                    </div>
                  </div>



                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-400 text-xl">🕒</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Response Time</p>
                      <p className="text-white font-semibold">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Send me a message</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-blue-200 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-blue-200 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-blue-200 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project and how I can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                  </button>

                  <p className="text-blue-200 text-sm text-center">
                    I&apos;ll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="text-center mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:paval.stelica@gmail.com"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>📧 Quick Email</span>
                </a>
                <a
                  href="https://calendly.com/paval-stelica/30min"
                  className="group bg-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>📅 Schedule Call</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="StelicaDPaval-resume.pdf"
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📄 Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}