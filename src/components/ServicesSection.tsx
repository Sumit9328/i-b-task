"use client";

const ServicesSection = () => {
    const services = [
        {
            icon: "💻",
            title: "Web Development",
            description: "Building responsive, modern websites with the latest technologies and best practices."
        },
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces that enhance user experience."
        },
        {
            icon: "📱",
            title: "App Development",
            description: "Developing mobile and web applications that solve real-world problems."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        My <span className="text-[#fa7c24]">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I offer comprehensive solutions to help bring your ideas to life
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#fa7c24] transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            <div className="mt-4 w-12 h-1 bg-[#fa7c24] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection; 