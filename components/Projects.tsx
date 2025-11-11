"use client";
import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTE=",
            name: "NikeStore",
            createdAt: "2021-12-16T14:24:55Z",
            url: "https://stelpav-nikestore.netlify.app",
            description: "Ecommerce front-end for a Nike store. It is made using react-touch-carousel, react-hot-toast and lots of tailwind",
            isFork: false,
            color: "#bbd7f0",
            gradient: "from-blue-500 to-cyan-500",
            icon: "👟",
            metrics: {
                primary: "E-commerce",
                secondary: "Frontend"
            },
            languages: [
                { name: "Typescript", iconifyClass: "logos-typescript-icon-round" },
                { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTF=",
            name: "Puzzle App",
            createdAt: "2022-07-19T14:24:55Z",
            url: "https://stelpav-puzzleapp.netlify.app/",
            description: "This project is a game where you have to put the pieces of the puzzle in the right place. It is made using ReactJS, TailwindCSS and react-router-dom",
            isFork: false,
            color: "#f0d5bb",
            gradient: "from-orange-500 to-amber-500",
            icon: "🧩",
            metrics: {
                primary: "Interactive",
                secondary: "Game"
            },
            languages: [
                { name: "JavaScript", iconifyClass: "logos-javascript" },
                { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTG=",
            name: "Restaurant App",
            createdAt: "2022-11-11T14:24:55Z",
            url: "https://stelpav-restaurant.netlify.app",
            description: "This front-end SPA is web application for a restaurant. It can be customized to offer more details about the food, reviews, and more.",
            isFork: false,
            color: "#e8f0bb",
            gradient: "from-green-500 to-emerald-500",
            icon: "🍽️",
            metrics: {
                primary: "Food",
                secondary: "Booking"
            },
            languages: [
                { name: "Material UI", iconifyClass: "logos-material-ui" },
                { name: "CSS", iconifyClass: "logos-css-3" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTH=",
            name: "Youtube Simplified",
            createdAt: "2022-02-23T14:24:55Z",
            url: "https://stelpav-youtube.netlify.app",
            description: "Youtube Simplified is a front-end SPA that uses the Youtube API to search for videos and display them. It is made using ReactJS, TailwindCSS and react-router-dom",
            isFork: false,
            color: "#f0bbdf",
            gradient: "from-red-500 to-pink-500",
            icon: "📺",
            metrics: {
                primary: "Video",
                secondary: "Search"
            },
            languages: [
                { name: "YouTube", iconifyClass: "logos-youtube" },
                { name: "Material UI", iconifyClass: "logos-material-ui" },
                { name: "Angular", iconifyClass: "logos-angular-icon" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTI=",
            name: "Crypto Tracker",
            createdAt: "2021-12-29T14:24:55Z",
            url: "https://stelpav-crypto-checker.netlify.app",
            description: "Crypto Tracker is a front-end SPA that uses the CoinGecko API to search for cryptocurrencies and display details about them in real time.",
            isFork: false,
            color: "#f0bbdf",
            gradient: "from-yellow-500 to-orange-500",
            icon: "₿",
            metrics: {
                primary: "Real-time",
                secondary: "Crypto"
            },
            languages: [
                { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
                { name: "coinGecko", iconifyClass: "arcticons:coingecko" },
                { name: "Angular", iconifyClass: "logos-angular-icon" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTJ=",
            name: "Music App",
            createdAt: "2022-05-29T14:24:55Z",
            url: "https://stelpav-lyriks.netlify.app",
            description: "This music app is a front-end SPA used to search for songs and display lyrics in real time, similar to Spotify.",
            isFork: false,
            color: "#bbd7f0",
            gradient: "from-purple-500 to-pink-500",
            icon: "🎵",
            metrics: {
                primary: "Music",
                secondary: "Lyrics"
            },
            languages: [
                { name: "React", iconifyClass: "logos-react" },
                { name: "Redux", iconifyClass: "logos-redux" },
                { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" }
            ]
        },
        {
            id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTK=",
            name: "Dashboard",
            createdAt: "2022-05-02T14:24:55Z",
            url: "https://stelpav-dashboard.netlify.app",
            description: "This project is a front-end admin dashboard app with a lot of features, including four Apps, and seven fully functional charts",
            isFork: false,
            color: "#bbf0c8",
            gradient: "from-indigo-500 to-blue-500",
            icon: "📊",
            metrics: {
                primary: "Admin",
                secondary: "Analytics"
            },
            languages: [
                { name: "JavaScript", iconifyClass: "logos-javascript" },
                { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
        {
            id: "social-app",
            name: "Social App",
            createdAt: "2023-01-15T14:24:55Z",
            url: "https://stelpav-twitter.netlify.app",
            description: "Full-stack social media application with real-time messaging, post interactions, and user authentication. Features include live notifications and responsive design.",
            isFork: false,
            color: "#f0bbdf",
            gradient: "from-pink-500 to-purple-500",
            icon: "👥",
            metrics: {
                primary: "Real-time",
                secondary: "Messaging"
            },
            languages: [
                { name: "Next.js", iconifyClass: "logos-nextjs-icon" },
                { name: "Firebase", iconifyClass: "logos-firebase" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
        {
            id: "gym-app",
            name: "Gym Exercises",
            createdAt: "2023-03-10T14:24:55Z",
            url: "https://gym-exercises-stelpaval.netlify.app",
            description: "Comprehensive fitness application featuring detailed exercise demonstrations, workout routines, and progress tracking. Includes video tutorials and personalized recommendations.",
            isFork: false,
            color: "#bbf0c8",
            gradient: "from-green-500 to-emerald-500",
            icon: "💪",
            metrics: {
                primary: "500+",
                secondary: "Exercises"
            },
            languages: [
                { name: "HTML", iconifyClass: "logos-html-5" },
                { name: "Node.js", iconifyClass: "logos-nodejs-icon" },
                { name: "React", iconifyClass: "logos-react" }
            ]
        },
    ];

    const [visibleProjects, setVisibleProjects] = useState(3);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const projectsToShow = projects.slice(0, visibleProjects);
    const hasMoreProjects = visibleProjects < projects.length;



    return (
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
                    Cutting-edge solutions across AI/ML systems and modern web applications
                </p>
            </div>

            {/* AI/ML Projects Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full mb-4">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="font-semibold text-sm">AI & Machine Learning</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">Intelligent Systems</h3>
                    <p className="text-gray-600 mt-2">Advanced AI solutions with real-world impact</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

                    {/* Project 2 - Fraud Detection */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:scale-105 transition-all duration-300">
                            {/* Project Header */}
                            <div className="p-6 border-b border-gray-200/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">🛡️</span>
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
            </div>

            {/* Frontend Applications Section */}
            <div>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="font-semibold text-sm">Frontend Applications</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">Web & Mobile Interfaces</h3>
                    <p className="text-gray-600 mt-2">Modern, responsive applications with exceptional UX</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsToShow.map((project, index) => (
                        <div key={project.id} className="group relative animate-fade-in" style={{ 
        animationDelay: index >= visibleProjects - 3 ? `${(index - (visibleProjects - 3)) * 0.1}s` : '0s'
      }}>
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:scale-105 transition-all duration-300">
                                {/* Project Header */}
                                <div className="p-6 border-b border-gray-200/50">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}>
                                            <span className="text-white font-bold text-lg">{project.icon}</span>
                                        </div>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 text-gray-700 hover:text-gray-900"
                                        >
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm font-medium">View Demo</span>
                                        </a>
                                    </div>
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-2">{project.description.split('.')[0]}.</p>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-800">{project.metrics.primary}</div>
                                            <div className="text-xs text-gray-500">Feature</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-800">{project.metrics.secondary}</div>
                                            <div className="text-xs text-gray-500">Focus</div>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.languages.map((language, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                                            >
                                                {language.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMoreProjects && (
                    <div className="text-center mt-12">
                        <button
                            onClick={loadMoreProjects}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                        >
                            <span>Load More Projects</span>
                            <span className="text-sm">({projects.length - visibleProjects} remaining)</span>
                        </button>
                    </div>
                )}

                {/* Show message when all projects are loaded */}
                {!hasMoreProjects && projects.length > 3 && (
                    <div className="text-center mt-8">
                        <p className="text-gray-600 font-medium">🎉 All projects loaded! Thank you for exploring my work.</p>
                    </div>
                )}
            </div>
        </div>)
}