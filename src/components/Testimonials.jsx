import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../config/clinicInfo';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Patient <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied patients about their recovery journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-medical-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 text-medical-200" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              <div className="border-t border-medical-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                {testimonial.location && (
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                )}
                <p className="text-sm text-medical-600 mt-1">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ratings Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-medical-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.5/5</div>
              <p className="text-sm opacity-90">Justdial Rating</p>
              <p className="text-xs opacity-75">189 Reviews</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.3/5</div>
              <p className="text-sm opacity-90">Lybrate Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.0/5</div>
              <p className="text-sm opacity-90">IndiaMart Rating</p>
              <p className="text-xs opacity-75">100% Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">691</div>
              <p className="text-sm opacity-90">Facebook Likes</p>
              <p className="text-xs opacity-75">175 Check-ins</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
