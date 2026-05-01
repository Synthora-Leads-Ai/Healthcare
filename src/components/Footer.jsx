import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { clinicInfo, citiesServed } from '../config/clinicInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="font-bold text-white text-lg">{clinicInfo.shortName}</h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              {clinicInfo.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-medical-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-medical-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-medical-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-medical-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-medical-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-medical-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Orthopaedic Physiotherapy</li>
              <li>Neuro Physiotherapy</li>
              <li>Home Nursing Care</li>
              <li>Elder Care Services</li>
              <li>Sports Physiotherapy</li>
              <li>Pain Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href={`tel:${clinicInfo.contact.mobile}`} className="hover:text-medical-400">
                    {clinicInfo.contact.mobile}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${clinicInfo.contact.email}`} className="hover:text-medical-400 break-all">
                  {clinicInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  {clinicInfo.address.area}, {clinicInfo.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Mon-Sat: 9:30 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities Served */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h4 className="font-bold text-white mb-3 text-sm">Cities We Serve</h4>
          <div className="flex flex-wrap gap-2">
            {citiesServed.map((city) => (
              <span
                key={city}
                className="bg-gray-800 px-3 py-1 rounded-full text-xs"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} {clinicInfo.name}. All rights reserved.
          </p>
          <p>
            Designed with ❤️ for Better Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
