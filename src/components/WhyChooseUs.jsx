import { motion } from 'framer-motion';
import { 
  Award, Clock, DollarSign, Users, Shield, Zap, 
  Home, Package 
} from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const iconMap = {
  'Doctor-Led Care': Award,
  '10+ Years Experience': Clock,
  'Affordable Pricing': DollarSign,
  '24/7 Home Care': Clock,
  'Certified Staff': Users,
  'Hi-Tech Equipment': Zap,
  'Hospital-to-Home Specialists': Home,
  'All Therapies Under One Roof': Package
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Soni Physiotherapy?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of doctor-led, compassionate care with over a decade of excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicInfo.usps.map((usp, index) => {
            const Icon = iconMap[usp.title] || Shield;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-medical-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-medical-600 transition-colors">
                  <Icon className="text-medical-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{usp.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-medical-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Quality Treatment Assurance</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-600 mb-2">₹200</div>
              <p className="text-gray-700 font-semibold">Affordable Clinic Consultation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Home Healthcare Availability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
