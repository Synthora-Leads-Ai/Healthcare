import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const Contact = () => {
  return (
    <section className="section-padding gradient-bg-3">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-gradient-3">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your appointment today or reach out for home healthcare services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="glass-card-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-medical-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Phone Numbers</h3>
                  {clinicInfo.contact.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-medical-600 hover:text-medical-700 font-semibold"
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`tel:${clinicInfo.contact.mobile}`}
                    className="block text-medical-600 hover:text-medical-700 font-semibold mt-1"
                  >
                    {clinicInfo.contact.mobile} (Mobile)
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href={`https://wa.me/91${clinicInfo.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    +91 {clinicInfo.contact.whatsapp}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Quick messaging available</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-medical-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${clinicInfo.contact.email}`}
                    className="text-medical-600 hover:text-medical-700 font-semibold break-all"
                  >
                    {clinicInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-medical-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Clinic Address</h3>
                  <p className="text-gray-700">
                    {clinicInfo.address.street}<br />
                    {clinicInfo.address.area}<br />
                    {clinicInfo.address.city}, {clinicInfo.address.state} - {clinicInfo.address.pincode}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Landmark:</span> {clinicInfo.address.landmark}
                  </p>
                  <a
                    href={clinicInfo.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-medical-600 hover:text-medical-700 font-semibold text-sm"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-medical-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Clinic:</span> {clinicInfo.hours.clinic.weekdays}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Sunday:</span> {clinicInfo.hours.clinic.sunday}
                  </p>
                  <p className="text-green-600 font-semibold mt-2">
                    Home Care: {clinicInfo.hours.homecare}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123456789!2d79.909784!3d23.1829699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzU4LjciTiA3OcKwNTQnMzUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Soni Physiotherapy Centre Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
