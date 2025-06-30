"use client";

export default function ParallaxSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-in">
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23fa7c24;stop-opacity:0.1"/><stop offset="50%" style="stop-color:%23e66a1a;stop-opacity:0.2"/><stop offset="100%" style="stop-color:%23d45a0a;stop-opacity:0.1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/><circle cx="200" cy="200" r="50" fill="%23fa7c24" opacity="0.1"/><circle cx="1000" cy="300" r="80" fill="%23fa7c24" opacity="0.08"/><circle cx="800" cy="600" r="60" fill="%23fa7c24" opacity="0.12"/><circle cx="300" cy="600" r="40" fill="%23fa7c24" opacity="0.15"/><circle cx="1100" cy="700" r="70" fill="%23fa7c24" opacity="0.1"/></svg>')`
                }}
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Building the Future
                    <span className="block text-[#fa7c24]">One Project at a Time</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Transforming ideas into powerful digital experiences with cutting-edge technology and innovative design solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-[#fa7c24] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e66a1a] transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Your Project
                    </button>

                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                        View Portfolio
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#fa7c24] mb-2">50+</div>
                        <div className="text-white/80">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#fa7c24] mb-2">98%</div>
                        <div className="text-white/80">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#fa7c24] mb-2">5+</div>
                        <div className="text-white/80">Years Experience</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
} 