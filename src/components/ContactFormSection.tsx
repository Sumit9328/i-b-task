"use client";

// import { useState } from 'react';

export default function ContactFormSection() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle form submission here
    //     console.log('Form submitted:', formData);
    // };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    return (
        <section className="py-20 bg-gray-50" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <section className='overflow-hidden sm:px-[0px] px-[15px] sm:pt-10'>
                    <div className='container-fluid'>
                        <div className='row'>

                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">

                                    <div data-aos="fade-right">
                                        <div className="mb-8">
                                            <h1 className="text-4xl font-bold text-orange-500">Contact Us</h1>
                                            <p className="mt-4 text-gray-600">
                                                We&apos;re here to help! Whether you have a question, need assistance with an order, or simply want to provide feedback, our team is ready to assist you. Reach out to us through any of the methods below, and we&apos;ll get back to you as quickly as possible.
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="font-semibold text-gray-800">hello@gmail.com</p>
                                            <p className="text-gray-600">+91 2615155444</p>
                                            <p className="text-gray-600">Addressee Line</p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <h2 className="text-lg font-semibold text-orange-500">Customer Support</h2>
                                                <p className="text-gray-600">Email: support@yourwebsite.com</p>
                                                <p className="text-gray-600">Phone: 1 (800) 123-4567</p>
                                                <p className="text-gray-600">Available Monday through Friday, 9 AM - 6 PM (EST).</p>
                                            </div>

                                            <div className="flex-1">
                                                <h2 className="text-lg font-semibold text-orange-500">Partnership Opportunities</h2>
                                                <p className="text-gray-600">Email us at: business@yourwebsite.com</p>
                                                <p className="text-gray-600">Live Chat: Click on the chat icon at the bottom right to chat with a live agent now.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="200">
                                        <div className="bg-white drop-shadow-[0_4px_6px_rgba(225,225,225,1)] rounded-lg p-6 h-full">
                                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Get In Touch</h2>
                                            <p className="text-gray-600 mb-6">Fill out the form below, and a member of our team will get back to you shortly.</p>

                                            <form className="space-y-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Last Name"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    />
                                                </div>
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="+91"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                />
                                                <textarea
                                                    rows={4} 
                                                    placeholder="Message"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                ></textarea>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                            <p className="mt-4 text-center text-gray-600">
                                                Thank you for reaching out to us! We value your feedback and look forward to assisting you.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-96" data-aos="fade-up" data-aos-delay="300">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.150841398175!2d77.1125!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0353b1f3cdff%3A0x872d4ecb51638d6f!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1694431696578!5m2!1sen!2sus"
                                        allowFullScreen 
                                        loading="lazy"
                                    ></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}



