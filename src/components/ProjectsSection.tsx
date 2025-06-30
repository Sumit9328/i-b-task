"use client";

import Image from "next/image";

const ProjectsSection = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
            image: "/assets/images/Screenshotone.png",
            github: "https://github.com/Sumit9328/amzncln.git",
            demo: "https://amznclnn.vercel.app/"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates.",
            image: "/assets/images/Screenshottwo.png",
            github: "https://dashboard-one-fawn-91.vercel.app/",
            demo: "https://dashboard-one-fawn-91.vercel.app/"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
            image: "/assets/images/Screenshotthree.png",
            github: "https://us-seven-gold.vercel.app/",
            demo: "https://us-9ll2.vercel.app/"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        My <span className="text-[#fa7c24]">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I&apos;ve worked on recently
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                        >
                            {/* Project Image */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#fa7c24] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#fa7c24] hover:bg-[#e66a1a] text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
