import { Phone, MessageCircle } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${clinicInfo.contact.whatsapp}?text=Hello, I would like to book an appointment`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="text-white" size={24} />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${clinicInfo.contact.mobile}`}
        className="w-14 h-14 bg-medical-600 hover:bg-medical-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse"
        aria-label="Call now"
      >
        <Phone className="text-white" size={24} />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
