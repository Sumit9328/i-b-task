"use client";

import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setIsSubscribed(true);
        setEmail('');

        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section className="py-20 bg-[#fa7c24]" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Subscribe to my newsletter for the latest insights, project updates, and industry trends delivered straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-white text-[#fa7c24] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>

                        {isSubscribed && (
                            <div className="mt-4 p-3 bg-white/20 rounded-lg text-white">
                                <p>Thank you for subscribing! 🎉</p>
                            </div>
                        )}
                    </form>

                    <p className="text-sm text-white/70 mt-6">
                        No spam, unsubscribe at any time. Your privacy is important to us.
                    </p>
                </div>
            </div>
        </section>
    );
} 