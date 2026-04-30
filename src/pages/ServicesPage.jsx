import { motion } from 'framer-motion';
import { 
  Bone, Brain, HeartPulse, Activity, Zap, Baby,
  Home, Heart, Users, User, Stethoscope, ChevronRight, CheckCircle
} from 'lucide-react';
import { services, conditions } from '../config/clinicInfo';

const iconMap = {
  bone: Bone, brain: Brain, 'heart-pulse': HeartPulse,
  activity: Activity, zap: Zap, baby: Baby, home: Home,
  heart: Heart, users: Users, user: User, stethoscope: Stethoscope
};

const ServicesPage = () => {
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
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive physiotherapy and home healthcare services with advanced equipment and certified professionals
          </motion.p>
        </div>
      </section>

      {/* Physiotherapy Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Physiotherapy Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.physiotherapy.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-medical-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-medical-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">{service.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="text-medical-600 flex-shrink-0 mt-0.5" size={18} />
                        <span>{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Home Healthcare Services */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Home Healthcare Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.homeHealthcare.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-cyan-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Conditions We Treat
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-900 text-sm">{condition.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-medical-600 to-cyan-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book your appointment today and experience quality healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9584212143" className="bg-white text-medical-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call: 9584212143
              </a>
              <a href="https://wa.me/919584212143" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
