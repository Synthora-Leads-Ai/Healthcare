import { motion } from 'framer-motion';
import { Phone, MapPin, Star, Award, Users, Clock } from 'lucide-react';
import { clinicInfo } from '../config/clinicInfo';

const Hero = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Happy Patients', value: '5000+' },
    { icon: Star, label: 'Rating', value: '4.5/5' },
    { icon: Clock, label: 'Home Care', value: '24/7' }
  ];

  return (
    <section className="relative gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-medical-100 text-medical-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ Rated 4.5/5 on Justdial - 189 Reviews
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Quality Healthcare
              <span className="text-gradient block">At Your Doorstep</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {clinicInfo.mission}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${clinicInfo.contact.mobile}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now: {clinicInfo.contact.mobile}
              </a>
              <a
                href={`https://wa.me/91${clinicInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg">
              <MapPin className="text-medical-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Visit Our Clinic</p>
                <p className="text-gray-700 text-sm">
                  {clinicInfo.address.street}, {clinicInfo.address.area}
                </p>
                <p className="text-gray-700 text-sm">
                  {clinicInfo.address.city}, {clinicInfo.address.state} - {clinicInfo.address.pincode}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="text-medical-600 mb-3" size={32} />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Doctor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-medical-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">DS</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{clinicInfo.doctor.name}</h3>
                  <p className="text-medical-600 font-semibold">{clinicInfo.doctor.qualification}</p>
                  <p className="text-sm text-gray-600">{clinicInfo.doctor.designation}</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Experience:</span> {clinicInfo.doctor.experience}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Specialization:</span> Orthopaedic & Sports Physiotherapy
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
