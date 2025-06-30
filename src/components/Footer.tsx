"use client";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (

    <>

      <footer className="bg-gray-900 text-white py-12" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0" data-aos="fade-right">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-[#fa7c24] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="text-2xl font-bold">Sumit Dhir</h3>
              </div>
              <p className="text-gray-400">Front End Developer</p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0" data-aos="fade-left">
              <a href="#" className="text-gray-400 hover:text-[#fa7c24] transition-colors duration-300 transform hover:scale-110">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa7c24] transition-colors duration-300 transform hover:scale-110">
                <span className="text-2xl">💼</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa7c24] transition-colors duration-300 transform hover:scale-110">
                <span className="text-2xl">🐙</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa7c24] transition-colors duration-300 transform hover:scale-110">
                <span className="text-2xl">🐦</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400">
              © 2025 Sumit Dhir. All rights reserved. | Built with ❤️ and <span className="text-[#fa7c24]">Next.js</span>
            </p>
          </div>
        </div>
      </footer>


      <section className="bg-white border-t border-gray-200 px-0 sm:px-10 py-10" data-aos="fade-up">
        <div className="max-w mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-3">
                <Image
                  src="/assets/images/Group 45.svg"
                  alt="Agile Logo"
                  width={42}
                  height={42}
                />
                <h2 className="ml-2 text-blue-600 text-xl font-semibold">Agile</h2>
              </div>
              <p className="text-sm text-black">
                &quot;I&apos;ve been using [Your Company Name]&apos;s products for years, and they never disappoint. If their future releases are anything like what they&apos;ve teased, I can&apos;t wait to try them!&quot;
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#"><Image src="/assets/images/Vector (2).svg" width={24} height={24} alt="Instagram" /></Link>
                <Link href="#"><Image src="/assets/images/p.svg" width={24} height={24} alt="Pinterest" /></Link>
                <Link href="#"><Image src="/assets/images/i.svg" width={24} height={24} alt="LinkedIn" /></Link>
                <Link href="#"><Image src="/assets/images/f.svg" width={24} height={24} alt="Facebook" /></Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h5 className="text-lg font-semibold text-[#FF6A00]">Company</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="text-black"><Link href="#">Shop</Link></li>
                <li className="text-black"><Link href="#">Services</Link></li>
                <li className="text-black"><Link href="#">Contact Us</Link></li>
                <li className="text-black"><Link href="#">Categories</Link></li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h5 className="text-lg font-semibold text-[#FF6A00]">Support</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="text-black"><Link href="#">Terms of Service</Link></li>
                <li className="text-black"><Link href="#">Return & Refund Policy</Link></li>
                <li className="text-black"><Link href="#">Privacy Policy</Link></li>
                <li className="text-black"><Link href="#">Shipping Policy</Link></li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h5 className="text-lg font-semibold text-[#FF6A00]">Newsletter</h5>
              <p className="text-sm mt-3 text-black">
                Sign up to receive occasional emails on special promos, early access to new products, and much more :)
              </p>
              <form className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="px-3 py-2 border rounded text-sm w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-[#FF6A00] text-white px-4 py-2 rounded text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-sm" data-aos="fade-up" data-aos-delay="500">
            <p className="text-black">&copy; 2025 - Agile.</p>
            <div className="mt-4 sm:mt-0">
              <Image
                src="/assets/images/Untitled-1 1.svg"
                alt="Payment Methods"
                width={300}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>

    </>


  );
};

export default Footer; 