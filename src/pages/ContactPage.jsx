import { motion } from 'framer-motion';
import Contact from '../components/Contact';
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
