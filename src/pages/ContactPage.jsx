import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import { clinicInfo } from '../config/clinicInfo';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Contact <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We're here to help. Reach out for appointments, home care services, or any queries
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <ContactForm />
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-6">
                  Have questions about our services? Need to book an appointment? We're here to help you with all your healthcare needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-700">Quick response within 4 hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-700">Expert consultation available</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-700">24/7 home care services</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="font-bold text-lg text-gray-900 mb-4">Prefer to call?</h4>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team for immediate assistance
                </p>
                <a
                  href={`tel:${clinicInfo.contact.mobile}`}
                  className="btn-primary w-full text-center"
                >
                  Call {clinicInfo.contact.mobile}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Quick Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-xl p-6 text-center"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Clinic Consultation</h3>
              <p className="text-3xl font-bold text-medical-600 mb-2">{clinicInfo.fees.clinic}</p>
              <p className="text-sm text-gray-600">No booking fee required</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Response Time</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">~4 Hours</p>
              <p className="text-sm text-gray-600">Average enquiry response time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Home Care</h3>
              <p className="text-3xl font-bold text-cyan-600 mb-2">24/7</p>
              <p className="text-sm text-gray-600">Available all days including holidays</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
