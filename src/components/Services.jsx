import { motion } from 'framer-motion';
import { 
  Bone, Brain, HeartPulse, Activity, Zap, Baby,
  Home, Heart, Users, User, Stethoscope, ChevronRight
} from 'lucide-react';
import { services } from '../config/clinicInfo';

const iconMap = {
  bone: Bone,
  brain: Brain,
  'heart-pulse': HeartPulse,
  activity: Activity,
  zap: Zap,
  baby: Baby,
  home: Home,
  heart: Heart,
  users: Users,
  user: User,
  stethoscope: Stethoscope
};

const Services = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy and home healthcare services tailored to your needs
          </p>
        </motion.div>

        {/* Physiotherapy Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Physiotherapy Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.physiotherapy.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-medical-200 border-2 border-transparent"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center group-hover:bg-medical-600 transition-colors">
                      <Icon className="text-medical-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">{service.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {service.treatments.slice(0, 4).map((treatment, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <ChevronRight className="text-medical-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{treatment}</span>
                      </li>
                    ))}
                    {service.treatments.length > 4 && (
                      <li className="text-sm text-medical-600 font-semibold">
                        +{service.treatments.length - 4} more treatments
                      </li>
                    )}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Home Healthcare Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Home Healthcare Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.homeHealthcare.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-cyan-200 border-2 border-transparent"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                      <Icon className="text-cyan-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">{service.title}</h4>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/services" className="btn-primary inline-block">
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
