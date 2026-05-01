import { motion } from 'framer-motion';
import AppointmentBooking from '../components/AppointmentBooking';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const BookingPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg-4 py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Book Your <span className="text-gradient-2">Appointment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Schedule your visit with Dr. Arvind Soni and start your journey to recovery
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <AppointmentBooking />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${clinicInfo.contact.mobile}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Call Now</p>
                      <p className="font-semibold text-gray-900">{clinicInfo.contact.mobile}</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/91${clinicInfo.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">WhatsApp</p>
                      <p className="font-semibold text-gray-900">Chat with us</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-medical-600" size={20} />
                  <h3 className="font-bold text-lg text-gray-900">Working Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Saturday</span>
                    <span className="font-semibold text-gray-900">9:30 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Home Care</span>
                      <span className="font-semibold text-green-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-medical-600" size={20} />
                  <h3 className="font-bold text-lg text-gray-900">Our Location</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  {clinicInfo.address.street}<br />
                  {clinicInfo.address.area}<br />
                  {clinicInfo.address.city}, {clinicInfo.address.state} - {clinicInfo.address.pincode}
                </p>
                <a
                  href={clinicInfo.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medical-600 hover:text-medical-700 font-semibold text-sm"
                >
                  View on Google Maps →
                </a>
              </motion.div>

              {/* Fees Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4">Consultation Fees</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Clinic Visit</p>
                    <p className="text-2xl font-bold text-gray-900">{clinicInfo.fees.clinic}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Home Visit</p>
                    <p className="text-lg font-semibold text-gray-900">{clinicInfo.fees.homeVisit}</p>
                  </div>
                  <p className="text-xs text-gray-600 pt-2 border-t">
                    {clinicInfo.fees.bookingFee}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="section-padding gradient-bg-3">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Book With Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Expert Care', desc: 'Dr. Arvind Soni - MPT (Ortho) with 10+ years experience' },
              { title: 'Flexible Timing', desc: 'Clinic & home visits available at your convenience' },
              { title: 'Affordable', desc: 'Quality treatment at just ₹200 per session' },
              { title: 'Quick Confirmation', desc: 'Get appointment confirmation within 1-2 hours' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
