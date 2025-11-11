export default function Experience() {
    return (
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
                7+ years of progressive experience building and scaling software systems
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/3 transform md:-translate-x-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 hidden md:block"></div>

              <div className="space-y-12">
                {/* ML Engineer - Terminus */}
                <div className="relative group">
                  <div className="md:flex items-center gap-12">
                    {/* Date - Mobile & Desktop */}
                    <div className="md:w-1/5 md:text-right mb-4 md:mb-0">
                      <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-semibold">Mar 2023 - Present</span>
                      </div>
                      <p className="text-gray-500 mt-2 md:mt-3">Remote</p>
                    </div>

                    {/* Content Card */}
                    <div className="md:w-4/5">
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
                    <div className="md:w-1/5 md:text-right mb-4 md:mb-0">
                      <div className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 font-semibold">Nov 2021 - May 2023</span>
                      </div>
                      <p className="text-gray-500 mt-2 md:mt-3">Remote</p>
                    </div>

                    {/* Content Card */}
                    <div className="md:w-4/5">
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
                    <div className="md:w-1/5 md:text-right mb-4 md:mb-0">
                      <div className="inline-flex items-center gap-3 bg-white px-2 py-2 rounded-full shadow-lg border border-gray-200">
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <span className="text-gray-700 font-semibold">Sept 2017 - Sept 2021</span>
                      </div>
                      <p className="text-gray-500 mt-2 md:mt-3">Bucharest, Romania</p>
                    </div>

                    {/* Content Card */}
                    <div className="md:w-4/5">
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
      );
    }      
