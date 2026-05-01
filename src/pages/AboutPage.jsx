import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, CheckCircle } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We integrate with your family and develop emotional bonds alongside clinical care'
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: '100% commitment to best-practice approaches with advanced equipment'
    },
    {
      icon: Users,
      title: 'Certified Professionals',
      description: 'All staff are trained, qualified, and background-verified'
    },
    {
      icon: Target,
      title: 'Affordable Quality',
      description: 'Hospital-grade care at economical rates with special package discounts'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg-3 py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-gradient-3">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Over a decade of dedicated service in physiotherapy and home healthcare
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white mesh-overlay">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {clinicInfo.mission}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Soni Home Healthcare Services is one of the few home healthcare providers in India 
                that has been founded and is run by a doctor. We specialize in hospital-to-home 
                transition — ensuring patients continue to receive quality clinical care from the 
                safety and comfort of their own homes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our services are designed to be more affordable than hospitals and nursing homes, 
                while being just as effective — delivered with greater compassion and a personal 
                bond with the patient's family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-2xl p-8"
            >
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-medical-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">DS</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">{clinicInfo.doctor.name}</h3>
                    <p className="text-medical-600 font-semibold text-lg">{clinicInfo.doctor.qualification}</p>
                    <p className="text-gray-600">{clinicInfo.doctor.designation}</p>
                  </div>
                </div>
                <div className="border-t pt-4 space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Experience:</span> {clinicInfo.doctor.experience} in Healthcare
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Specializations:</p>
                    <ul className="space-y-1">
                      {clinicInfo.doctor.specialization.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="text-medical-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-medical-600 mb-1">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-medical-600 mb-1">5000+</p>
                  <p className="text-sm text-gray-600">Patients Treated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding gradient-bg-2">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to exceptional healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-medical-600" size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-medical-600 to-cyan-600 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-lg opacity-90">Years of Service</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">5000+</p>
                <p className="text-lg opacity-90">Happy Patients</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">24/7</p>
                <p className="text-lg opacity-90">Home Care Available</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">4.5★</p>
                <p className="text-lg opacity-90">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
