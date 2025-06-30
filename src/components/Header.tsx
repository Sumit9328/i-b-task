"use client";

import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
    title: string;
    description: string;
    href: string;
}

interface DropdownData {
    title: string;
    items: DropdownItem[];
    image: string;
}

const dropdownData: Record<string, DropdownData> = {
    product: {
        title: "Product Solutions",
        items: [
            { title: "Web Development", description: "Custom websites and web applications", href: "#" },
            { title: "Mobile Apps", description: "iOS and Android development", href: "#" },
            { title: "UI/UX Design", description: "User interface and experience design", href: "#" },
            { title: "E-commerce", description: "Online store development", href: "#" },
            { title: "API Development", description: "RESTful and GraphQL APIs", href: "#" },
            { title: "Cloud Solutions", description: "AWS, Azure, and Google Cloud", href: "#" }
        ],
        image: "/public/globe.svg"
    },
    solutions: {
        title: "Industry Solutions",
        items: [
            { title: "Healthcare", description: "Digital health solutions", href: "#" },
            { title: "Finance", description: "Fintech and banking applications", href: "#" },
            { title: "Education", description: "EdTech platforms and tools", href: "#" },
            { title: "Retail", description: "E-commerce and retail solutions", href: "#" },
            { title: "Manufacturing", description: "Industry 4.0 and IoT", href: "#" },
            { title: "Real Estate", description: "Property management systems", href: "#" }
        ],
        image: "/public/window.svg"
    },
    resources: {
        title: "Resources & Tools",
        items: [
            { title: "Documentation", description: "Comprehensive guides and docs", href: "#" },
            { title: "Blog", description: "Latest insights and tutorials", href: "#" },
            { title: "Case Studies", description: "Success stories and examples", href: "#" },
            { title: "Templates", description: "Ready-to-use components", href: "#" },
            { title: "Community", description: "Developer community forum", href: "#" },
            { title: "Support", description: "Help and technical support", href: "#" }
        ],
        image: "/public/file.svg"
    }
};

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = (dropdown: string) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        ...Object.keys(dropdownData).map(key => ({ name: key, href: `#${key}`, hasDropdown: true })),
        { name: 'Pricing', href: '#pricing' },
        { name: 'Wix Studio', href: '#wix-studio' },
        { name: 'Enterprise', href: '#enterprise' }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? 'bg-white shadow-lg backdrop-blur-md bg-white/95'
                    : 'bg-white/90 backdrop-blur-sm'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[#fa7c24] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">Portfolio</span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {Object.entries(dropdownData).map(([key, data]) => (
                                <div
                                    key={key}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(key)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#fa7c24] transition-colors duration-200 font-medium">
                                        <span className="capitalize">{key}</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {activeDropdown === key && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 ease-out opacity-100 scale-100 animate-slide-down"
                                        >
                                            <div className="grid grid-cols-2">
                                                <div className="p-6">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{data.title}</h3>
                                                    <div className="space-y-3">
                                                        {data.items.map((item, index) => (
                                                            <a
                                                                key={index}
                                                                href={item.href}
                                                                className="block group"
                                                            >
                                                                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                                                    <div className="w-2 h-2 bg-[#fa7c24] rounded-full mt-2 flex-shrink-0"></div>
                                                                    <div>
                                                                        <p className="font-medium text-gray-900 group-hover:text-[#fa7c24] transition-colors duration-200">
                                                                            {item.title}
                                                                        </p>
                                                                        <p className="text-sm text-gray-600">{item.description}</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-gray-50 flex items-center justify-center p-6">
                                                    <div className="w-32 h-32 bg-[#fa7c24]/10 rounded-lg flex items-center justify-center">
                                                        <svg className="w-16 h-16 text-[#fa7c24]" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <a href="#pricing" className="text-gray-700 hover:text-[#fa7c24] transition-colors duration-200 font-medium">
                                Pricing
                            </a>
                            <a href="#wix-studio" className="text-gray-700 hover:text-[#fa7c24] transition-colors duration-200 font-medium">
                                Wix Studio
                            </a>
                            <a href="#enterprise" className="text-gray-700 hover:text-[#fa7c24] transition-colors duration-200 font-medium">
                                Enterprise
                            </a>
                        </nav>

                        <div className="hidden md:block">
                            <button className="bg-[#fa7c24] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e66a1a] transition-colors duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                    }`}
            >
                <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col h-full">
                    <nav className="flex-grow">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-2xl font-semibold text-gray-800 hover:text-[#fa7c24] py-2 transition-colors duration-200 capitalize"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-auto">
                        <button className="w-full bg-[#fa7c24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e66a1a] transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
} 