import React, { useEffect, useState } from 'react';
import { ArrowUp, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='bg-gray-800 text-white w-full'>
            <footer className='container mx-auto py-6 px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className="mb-4 md:mb-0">
                        <p className="font-bold mb-2">Shop</p>
                        <p>© 2024 All rights reserved</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <p className="font-bold mb-2">Contact</p>
                        <p>info@shop.com</p>
                        <p>+1 (123) 456-7890</p>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Follow Us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition duration-300"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition duration-300"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition duration-300"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
            {isVisible && (
                <div 
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition duration-300"
                >
                    <ArrowUp size={24} />
                </div>
            )}
        </div>
    )
};

export default Footer;