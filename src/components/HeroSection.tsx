"use client";

import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Left: Text Content */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="space-y-6"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Sumit Dhir
                        </h1>
                        <h2 className="text-2xl lg:text-3xl text-[#fa7c24] font-medium">
                            Front-End Developer
                        </h2>

                        <div className="text-lg text-gray-600 space-y-4 text-left">
                            <p>
                                I am a passionate and skilled Front-End Developer with a Bachelor&apos;s degree in Computer Science (B.Sc.). With hands-on experience in building responsive, dynamic, and user-friendly web applications, I specialize in using modern technologies such as React, React Native, Next.js, HTML, CSS, JavaScript, and Tailwind CSS.
                            </p>
                            <p>
                                Having worked on several projects using Next.js for server-side rendering and static site generation, along with Tailwind CSS for rapid and efficient styling, I create seamless, performance-optimized solutions tailored to meet both business and user needs.
                            </p>
                            <p>
                                I thrive on turning creative concepts into functional and visually stunning web applications, collaborating with cross-functional teams, and continuously improving my skills to stay at the forefront of emerging technologies.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#fa7c24] hover:bg-[#e66a1a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Hire Me
                            </button>
                            <a
                                href="/assets/pdf/UPCV2025.pdf"
                                download="Sumit_Dhir_Resume.pdf"
                                className="border-2 border-[#fa7c24] text-[#fa7c24] hover:bg-[#fa7c24] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                                role="button"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right: Animated Image */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="relative flex justify-center"
                    >
                        <div className="w-102 h-102 rounded-full overflow-hidden border-4 border-[#fa7c24] shadow-lg animate-floating">
                            <Image
                                src="/assets/images/WhatsApp_Image_2024-12-14_at_14.57.25_44c41be1-removebg-preview.png" // Replace with your image
                                alt="Sumit Dhir"
                                width={288}
                                height={288}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tailwind Custom Animation */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translatey(0px);
                    }
                    50% {
                        transform: translatey(-15px);
                    }
                    100% {
                        transform: translatey(0px);
                    }
                }
                .animate-floating {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
