// app/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <div className="text-center">
              {/* Animated title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-gradient">
                  Machine Learning
                  <span className="block mt-2 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 bg-clip-text text-transparent">
                    Engineer
                  </span>
                </h1>

                {/* Experience badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-cyan-100 font-semibold text-lg">
                    🚀 6+ Years in AI/ML Solutions
                  </span>
                </div>
              </div>

              {/* Main description with icons */}
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed font-light">
                  Transforming complex challenges into intelligent solutions through
                  <span className="text-cyan-200 font-semibold"> deep learning</span>,
                  <span className="text-purple-200 font-semibold"> computer vision</span>, and
                  <span className="text-pink-200 font-semibold"> scalable ML systems</span>
                </p>

                {/* Specializations grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl mb-4">🧠</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Deep Learning</h3>
                    <p className="text-blue-100 text-sm">Neural networks, transformers, and advanced architectures</p>
                  </div>

                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl mb-4">👁️</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
                    <p className="text-blue-100 text-sm">Object detection, image segmentation, and video analysis</p>
                  </div>

                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-lg font-semibold text-white mb-2">ML Systems</h3>
                    <p className="text-blue-100 text-sm">Scalable pipelines, MLOps, and production deployment</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
                    View My Work
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    Download Resume
                    <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                  </button>
                </div>
              </div>
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
        <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-20 -right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Career Journey</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
        Professional Experience
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        6+ years of progressive experience building and scaling software systems
      </p>
    </div>

    {/* Experience Timeline */}
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 hidden md:block"></div>

      <div className="space-y-12">
        {/* ML Engineer - Terminus */}
        <div className="relative group">
          <div className="md:flex items-center gap-12">
            {/* Date - Mobile & Desktop */}
            <div className="md:w-2/5 md:text-right mb-4 md:mb-0">
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">Mar 2023 - Present</span>
              </div>
              <p className="text-gray-500 mt-2 md:mt-3">Remote</p>
            </div>

            {/* Content Card */}
            <div className="md:w-3/5">
              <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                <div className="p-8">
                  {/* Role & Company */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ML Engineer
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold mt-1">Terminus</p>
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed and deployed end-to-end AI solutions for manufacturing automation, developing PyTorch models with custom training pipelines</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Engineered high-performance FastAPI services with async/await patterns to process real-time sensor data, reducing inference latency by <span className="text-green-600 font-semibold">30%</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built interactive manufacturing dashboards using React and TypeScript for real-time monitoring of equipment health and production metrics</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Containerized ML workloads using Docker and orchestrated deployments on Kubernetes clusters, improving system reliability by <span className="text-green-600 font-semibold">25%</span></span>
                    </li>
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">FastAPI</span>
                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">React/TypeScript</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Docker/K8s</span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Stack Developer - Kode Canvas */}
        <div className="relative group">
          <div className="md:flex items-center gap-12">
            {/* Date - Mobile & Desktop */}
            <div className="md:w-2/5 md:text-right mb-4 md:mb-0">
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold">Nov 2021 - May 2023</span>
              </div>
              <p className="text-gray-500 mt-2 md:mt-3">Remote</p>
            </div>

            {/* Content Card */}
            <div className="md:w-3/5">
              <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                        Full Stack Developer
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold mt-1">Kode Canvas</p>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed and created scalable online apps utilizing React, TypeScript, and Tailwind CSS, delivering dynamic and responsive user interfaces</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built and optimized RESTful APIs using Node.js and Express, ensuring fast server-side logic and seamless integration with PostgreSQL and DynamoDB</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented secure authentication and authorization procedures with JWT security standards</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Deployed and maintained serverless apps on AWS using Lambda, API Gateway, and S3 for cost-efficient scalability</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">React/TypeScript</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">Node.js/Express</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Engineer - BearingPoint */}
        <div className="relative group">
          <div className="md:flex items-center gap-12">
            {/* Date - Mobile & Desktop */}
            <div className="md:w-2/5 md:text-right mb-4 md:mb-0">
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold">Sept 2017 - Sept 2021</span>
              </div>
              <p className="text-gray-500 mt-2 md:mt-3">Bucharest, Romania</p>
            </div>

            {/* Content Card */}
            <div className="md:w-3/5">
              <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent">
                        Software Engineer
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold mt-1">BearingPoint</p>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed and maintained enterprise-level applications using .NET Core, C#, ASP.NET, and Angular</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed and optimized database structures with SQL Server and LINQ2SQL, reducing query execution time by <span className="text-green-600 font-semibold">20%</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced backend performance by optimizing indexing algorithms and query execution, leading to a <span className="text-green-600 font-semibold">15%</span> reduction in system load times</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contributed to automated testing, CI/CD pipelines, and debugging, ensuring faster and more stable software releases</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">.NET Core/C#</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Angular</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">SQL Server</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">ASP.NET</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Portfolio Showcase</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge machine learning solutions delivering measurable impact
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 - Object Detection */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:scale-105 transition-all duration-300">
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">👁️</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium">Live</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                      Real-time Object Detection
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">YOLO-based computer vision system</p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Advanced object detection system achieving <span className="text-green-600 font-semibold">90%+ mAP accuracy</span>.
                      Optimized for edge deployment with real-time inference capabilities.
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600">90%+</div>
                        <div className="text-xs text-gray-500">mAP Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">30ms</div>
                        <div className="text-xs text-gray-500">Inference Time</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium border border-cyan-200">Python</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">PyTorch</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">OpenCV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Recommendation Engine */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:scale-105 transition-all duration-300">
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🎯</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium">Live</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                      Recommendation Engine
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">Personalized content delivery</p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Collaborative filtering system serving <span className="text-purple-600 font-semibold">5M+ users</span> with
                      personalized recommendations at <span className="text-pink-600 font-semibold">sub-100ms latency</span>.
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">5M+</div>
                        <div className="text-xs text-gray-500">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">85ms</div>
                        <div className="text-xs text-gray-500">Avg Latency</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">Python</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">TensorFlow</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">Apache Spark</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Fraud Detection */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:scale-105 transition-all duration-300">
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🛡️</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium">Live</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-emerald-800 bg-clip-text text-transparent">
                      Fraud Detection System
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">Real-time anomaly detection</p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Advanced anomaly detection reducing fraudulent transactions by
                      <span className="text-green-600 font-semibold"> 85%</span> using ensemble methods
                      and real-time scoring algorithms.
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-xs text-gray-500">Fraud Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">99.2%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">Python</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">Scikit-learn</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200">FastAPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Projects */}
            <div className="text-center mt-12">
              <button className="group bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:border-gray-400 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                View All Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 -left-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-10 -right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-lg">
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
        <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Academic Background</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4">
        Education & Certifications
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Strong academic foundation in computer science complemented by industry certifications
      </p>
    </div>

    {/* Education Timeline */}
    <div className="max-w-4xl mx-auto">
      {/* Master's Degree */}
      <div className="group relative mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* University Logo & Date */}
          <div className="md:w-2/5 flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MIU</span>
              </div>
              {/* Animated ring */}
              <div className="absolute -inset-2 border-2 border-blue-200 rounded-2xl animate-pulse"></div>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold text-sm">Jan 2022 - Jan 2023</span>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="md:w-3/5">
            <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="p-8">
                {/* Degree & University */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Master's in Software Development
                    </h3>
                    <p className="text-xl text-gray-800 font-semibold mt-2 flex items-center gap-2">
                      <span>Maharishi International University</span>
                      <span className="text-lg">🎓</span>
                    </p>
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Key Focus Areas
                    </h4>
                    <ul className="text-gray-600 ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">⚡</span>
                        <span>Mastering web technologies and ability to learn new ones as they arise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">⚡</span>
                        <span>Building full stack web applications at any scale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">⚡</span>
                        <span>Developing mobile apps for business applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">⚡</span>
                        <span>Cloud computing and AWS Cloud services</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2 ml-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Full Stack</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm border border-purple-200">Web Technologies</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200">Mobile Development</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-200">AWS Cloud</span>
                    </div>
                  </div>
                </div>

                {/* Visit Website Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bachelor's Degree */}
      <div className="group relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* University Logo & Date */}
          <div className="md:w-2/5 flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">PUB</span>
              </div>
              {/* Animated ring */}
              <div className="absolute -inset-2 border-2 border-red-200 rounded-2xl animate-pulse delay-500"></div>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold text-sm">Oct 2013 - Jun 2017</span>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="md:w-3/5">
            <div className="group-hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="p-8">
                {/* Degree & University */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      B.S. in Computer Science
                    </h3>
                    <p className="text-xl text-gray-800 font-semibold mt-2 flex items-center gap-2">
                      <span>Politehnica University of Bucharest</span>
                      <span className="text-lg">⚡</span>
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">
                        Merit cum Means Scholarship
                      </span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200">
                        Top 10% of Students
                      </span>
                    </div>
                  </div>
                </div>

                {/* Focus Areas & Achievements */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Core Curriculum
                    </h4>
                    <ul className="text-gray-600 ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">⚡</span>
                        <span>Basic software engineering subjects: Data Structures, Algorithms, DBMS, OS, Computer Architecture, AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">⚡</span>
                        <span>Heavy focus on full stack engineering with modules on both front and back-end processes</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Achievements
                    </h4>
                    <ul className="text-gray-600 ml-4 space-y-1">
                      <li>• Selected for Merit cum Means Scholarship (top 10% of students)</li>
                      <li>• Received award from director for consistently best academic performance</li>
                      <li>• Excellence in software engineering and full-stack development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Technical Foundation
                    </h4>
                    <div className="flex flex-wrap gap-2 ml-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">Data Structures</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">Algorithms</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">DBMS</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">Operating Systems</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">Computer Architecture</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">Artificial Intelligence</span>
                    </div>
                  </div>
                </div>

                {/* Visit Website Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a href="#" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Certifications Section */}
    <div className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Professional Certifications</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* AWS Certification */}
        <div className="group">
          <div className="group-hover:scale-[1.05] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Certified Cloud Practitioner</h4>
                  <p className="text-sm text-gray-600">Amazon Web Services</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Fundamentals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ITIL Certification */}
        <div className="group">
          <div className="group-hover:scale-[1.05] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">ITIL Foundation</h4>
                  <p className="text-sm text-gray-600">PeopleCert</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  IT Service Management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* React Certification */}
        <div className="group">
          <div className="group-hover:scale-[1.05] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Modern React with Redux</h4>
                  <p className="text-sm text-gray-600">Stephen Grider - Udemy</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Frontend Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-100 font-semibold text-sm uppercase tracking-wide">Technical Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-4">
                Technologies & Skills
              </h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Comprehensive expertise across the machine learning ecosystem
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* ML Frameworks */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">ML Frameworks</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'PyTorch', level: 95, color: 'from-red-500 to-orange-500' },
                      { name: 'TensorFlow', level: 90, color: 'from-orange-500 to-yellow-500' },
                      { name: 'Keras', level: 85, color: 'from-red-500 to-pink-500' },
                      { name: 'Scikit-learn', level: 92, color: 'from-yellow-500 to-orange-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-cyan-100 text-sm font-medium">{tech.name}</span>
                          <span className="text-white text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Programming</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Python', level: 98, color: 'from-blue-500 to-cyan-500' },
                      { name: 'R', level: 80, color: 'from-blue-500 to-purple-500' },
                      { name: 'SQL', level: 88, color: 'from-purple-500 to-pink-500' },
                      { name: 'Bash', level: 85, color: 'from-gray-500 to-gray-700' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-cyan-100 text-sm font-medium">{tech.name}</span>
                          <span className="text-white text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">MLOps & Cloud</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Docker', level: 90, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Kubernetes', level: 85, color: 'from-blue-500 to-indigo-500' },
                      { name: 'AWS', level: 88, color: 'from-orange-500 to-red-500' },
                      { name: 'MLflow', level: 82, color: 'from-purple-500 to-pink-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-cyan-100 text-sm font-medium">{tech.name}</span>
                          <span className="text-white text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
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

              {/* Specializations */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Specializations</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Computer Vision', level: 95, color: 'from-green-500 to-emerald-500' },
                      { name: 'NLP', level: 88, color: 'from-blue-500 to-purple-500' },
                      { name: 'Deep Learning', level: 93, color: 'from-purple-500 to-pink-500' },
                      { name: 'ML Systems', level: 90, color: 'from-cyan-500 to-blue-500' }
                    ].map((tech) => (
                      <div key={tech.name} className="group/item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-cyan-100 text-sm font-medium">{tech.name}</span>
                          <span className="text-white text-xs font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
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
              <div className="inline-flex flex-wrap justify-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl text-cyan-400 mb-2">🚀</div>
                  <div className="text-white font-semibold">Real-time Systems</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-green-400 mb-2">📊</div>
                  <div className="text-white font-semibold">Data Engineering</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-purple-400 mb-2">🔍</div>
                  <div className="text-white font-semibold">Research & Development</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-orange-400 mb-2">🏗️</div>
                  <div className="text-white font-semibold">System Architecture</div>
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
                      <p className="text-white font-semibold">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-400 text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Location</p>
                      <p className="text-white font-semibold">San Francisco, CA</p>
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

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a href="https://linkedin.com/in/yourprofile" className="group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white group-hover:scale-110 transition-transform">💼</span>
                    </div>
                  </a>
                  <a href="https://github.com/yourprofile" className="group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white group-hover:scale-110 transition-transform">⚡</span>
                    </div>
                  </a>
                  <a href="https://twitter.com/yourprofile" className="group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white group-hover:scale-110 transition-transform">🐦</span>
                    </div>
                  </a>
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

                  <div>
                    <label htmlFor="projectType" className="block text-blue-200 text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select project type</option>
                      <option value="computer-vision" className="bg-gray-800">Computer Vision</option>
                      <option value="nlp" className="bg-gray-800">Natural Language Processing</option>
                      <option value="recommendation" className="bg-gray-800">Recommendation System</option>
                      <option value="ml-infra" className="bg-gray-800">ML Infrastructure</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
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
                  href="mailto:your.email@example.com"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>📧 Quick Email</span>
                </a>
                <a
                  href="https://calendly.com/yourprofile"
                  className="group bg-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>📅 Schedule Call</span>
                </a>
                <a
                  href="/resume.pdf"
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