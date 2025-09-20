import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#provoke', label: 'The Challenge' },
    { href: '#use-cases', label: 'Examples' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#services', label: 'Services' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#membership', label: 'Join' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.92M9 10a4 4 0 110-5.292M15 10a4 4 0 110-5.292"></path></svg>
          <span className="text-xl font-bold text-slate-800 hidden sm:block">AISEPA</span>
        </a>
        <nav>
          <ul className="flex items-center space-x-4 sm:space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm sm:text-base font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#membership" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;