import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/6110379/pexels-photo-6110379.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Ultrasound Physiotherapy Treatment',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/7298900/pexels-photo-7298900.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Manual Therapy Session',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/6598591/pexels-photo-6598591.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Modern Treatment Room',
      category: 'Facility'
    },
    {
      url: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Professional Equipment Setup',
      category: 'Facility'
    },
    {
      url: 'https://images.pexels.com/photos/6247377/pexels-photo-6247377.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Orthopaedic Treatment',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Neuro Rehabilitation',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Breathing Exercise Session',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/8942999/pexels-photo-8942999.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Paediatric Therapy',
      category: 'Treatment'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg-2 py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-gradient-3">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Take a look at our modern facilities and professional treatment sessions
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white mesh-overlay">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl glass-card hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-medical-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="bg-white rounded-b-lg p-6">
              <span className="inline-block bg-medical-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                {selectedImage.category}
              </span>
              <h3 className="font-bold text-2xl text-gray-900">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="section-padding gradient-bg-4">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Quality Care?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Visit our modern facility or book a home visit for personalized treatment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary">
                Book Appointment
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
