"use client";

const WhyChooseMeSection = () => {
    const reasons = [
        {
            icon: "✨",
            title: "Clean Code",
            description: "Well-structured, maintainable code that follows industry standards"
        },
        {
            icon: "🚀",
            title: "SEO Optimized",
            description: "Websites built with search engine optimization in mind"
        },
        {
            icon: "⚡",
            title: "Fast Delivery",
            description: "Quick turnaround times without compromising on quality"
        },
        {
            icon: "📱",
            title: "Responsive Design",
            description: "Websites that work perfectly on all devices and screen sizes"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-[#fa7c24]">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I bring a unique combination of skills and dedication to every project
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#fa7c24] transition-colors duration-300">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                            <div className="mt-4 w-8 h-1 bg-[#fa7c24] rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMeSection; 