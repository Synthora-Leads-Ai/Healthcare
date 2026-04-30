import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-medical-700 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{clinicInfo.contact.phone[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Mon-Sat: 9:30 AM - 6:30 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
              24/7 Home Care Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-medical-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900 leading-tight">
                  {clinicInfo.shortName}
                </h1>
                <p className="text-xs text-gray-600">Dr. Arvind Soni - MPT (Ortho)</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-medical-600'
                      : 'text-gray-700 hover:text-medical-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${clinicInfo.contact.mobile}`}
                className="btn-primary"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium ${
                    location.pathname === link.path
                      ? 'text-medical-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${clinicInfo.contact.mobile}`}
                className="btn-primary block text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
