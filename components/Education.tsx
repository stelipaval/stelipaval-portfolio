import Image from 'next/image';

export default function Education() {
  return (
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
                <div className="max-w-6xl mx-auto">
    
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bachelor's Degree */}
                    <div className="group relative">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden h-full flex flex-col">
                        {/* Date Header */}
                        <div className="bg-gradient-to-r from-red-700 to-red-600 px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                              <span className="text-white font-semibold">Oct 2013 - Jun 2017</span>
                            </div>
                            <div className="text-white text-lg">⚡</div>
                          </div>
                        </div>
    
                        {/* Content */}
                        <div className="p-6 flex-1">
                          {/* University Logo & Name */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">PUB</span>
                              </div>
                              <div className="absolute -inset-1 border-2 border-red-200 rounded-2xl animate-pulse delay-500"></div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">B.S. in Computer Science</h3>
                              <p className="text-gray-600 font-semibold">Politehnica University of Bucharest</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs border border-red-200">
                                  Merit Scholarship
                                </span>
                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs border border-orange-200">
                                  Top 10%
                                </span>
                              </div>
                            </div>
                          </div>
    
                          {/* Focus Areas & Achievements */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Core Curriculum
                              </h4>
                              <ul className="text-gray-600 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <span className="text-red-500 mt-0.5">•</span>
                                  <span>Data Structures, Algorithms, DBMS, OS, Computer Architecture, AI</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-red-500 mt-0.5">•</span>
                                  <span>Heavy focus on full stack engineering and software development</span>
                                </li>
                              </ul>
                            </div>
    
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Achievements
                              </h4>
                              <ul className="text-gray-600 space-y-1 text-sm">
                                <li>• Merit cum Means Scholarship (top 10%)</li>
                                <li>• Award for best academic performance</li>
                                <li>• Excellence in software engineering</li>
                              </ul>
                            </div>
    
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                Technical Foundation
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">Data Structures</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">Algorithms</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">DBMS</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">AI</span>
                              </div>
                            </div>
                          </div>
                        </div>
    
                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50">
                          <a href="#" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors text-sm">
                            Visit Website
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Master's Degree */}
                    <div className="group relative">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden h-full flex flex-col">
                        {/* Date Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                              <span className="text-white font-semibold">Jan 2022 - Jan 2023</span>
                            </div>
                            <div className="text-white text-lg">🎓</div>
                          </div>
                        </div>
    
                        {/* Content */}
                        <div className="p-6 flex-1">
                          {/* University Logo & Name */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">MIU</span>
                              </div>
                              <div className="absolute -inset-1 border-2 border-blue-200 rounded-2xl animate-pulse"></div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">Master&apos;s in Software Development</h3>
                              <p className="text-gray-600 font-semibold">Maharishi International University</p>
                            </div>
                          </div>
    
                          {/* Key Learnings */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                Key Focus Areas
                              </h4>
                              <ul className="text-gray-600 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-0.5">•</span>
                                  <span>Mastering web technologies and ability to learn new ones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-0.5">•</span>
                                  <span>Building full stack web applications at any scale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-0.5">•</span>
                                  <span>Developing mobile apps for business applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-0.5">•</span>
                                  <span>Cloud computing and AWS Cloud services</span>
                                </li>
                              </ul>
                            </div>
    
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                Technical Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs border border-blue-200">Full Stack</span>
                                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs border border-purple-200">Web Technologies</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs border border-green-200">Mobile Development</span>
                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs border border-orange-200">AWS Cloud</span>
                              </div>
                            </div>
                          </div>
                        </div>
    
                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50">
                          <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm">
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
                              <Image src="/images/aws-logo.png" alt="AWS Logo" width={32} height={32} />
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
                              <span className="text-white font-bold text-sm">ITIL</span>
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
                              <Image src="/images/udemy-logo.png" alt="React Logo" width={32} height={32} />
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
  );
}