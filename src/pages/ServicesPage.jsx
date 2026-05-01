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

const serviceImages = {
  'Orthopaedic Physiotherapy': '/images/services/ortho.jpg',
  'Neuro Physiotherapy': '/images/services/neuro.jpg',
  'Cardiovascular & Pulmonary': '/images/services/cardio.jpg',
  'Sports Physiotherapy': '/images/services/sports.jpg',
  'Pain Management': '/images/services/pain.jpg',
  'Paediatric & Developmental': '/images/services/paediatric.jpg'
};

const homeHealthcareImages = {
  'Home Physiotherapy': '/images/services/home-physio.jpg',
  'Home Nursing Care': '/images/services/home-nursing.jpg',
  'Trained Attendants': '/images/services/attendant.jpg',
  'Elder Care Services': '/images/services/elder-care.jpg',
  'Doctor Home Visits': '/images/services/doctor-visit.jpg',
  'Babysitter / Child Care': '/images/services/child-care.jpg'
};

const getPlaceholderImage = (text, color) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23${color}' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='white' font-size='32' font-family='Arial'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
};

const servicePlaceholders = {
  'Orthopaedic Physiotherapy': getPlaceholderImage('Orthopaedic', '0284c7'),
  'Neuro Physiotherapy': getPlaceholderImage('Neuro', '0369a1'),
  'Cardiovascular & Pulmonary': getPlaceholderImage('Cardio', '0891b2'),
  'Sports Physiotherapy': getPlaceholderImage('Sports', '06b6d4'),
  'Pain Management': getPlaceholderImage('Pain Mgmt', '0284c7'),
  'Paediatric & Developmental': getPlaceholderImage('Paediatric', '0369a1')
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
                  className="card overflow-hidden"
                >
                  <img 
                    src={serviceImages[service.category]}
                    alt={service.category}
                    className="w-full h-56 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = servicePlaceholders[service.category];
                    }}
                  />
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
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={homeHealthcareImages[service.title]}
                    alt={service.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-6">
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
                  </div>
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
