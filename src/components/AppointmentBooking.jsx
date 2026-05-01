import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    appointmentType: 'clinic',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Orthopaedic Physiotherapy',
    'Neuro Physiotherapy',
    'Sports Physiotherapy',
    'Pain Management',
    'Home Physiotherapy',
    'Elder Care',
    'Post-Surgical Rehabilitation',
    'Other'
  ];

  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM',
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
    '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate booking submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create WhatsApp message
      const whatsappMessage = `*New Appointment Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nService: ${formData.serviceType}\nType: ${formData.appointmentType === 'clinic' ? 'Clinic Visit' : 'Home Visit'}\n\nMessage: ${formData.message || 'N/A'}`;
      
      const whatsappLink = `https://wa.me/919584212143?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, '_blank');
      
      setStatus({
        type: 'success',
        message: 'Appointment request sent! We will confirm your booking shortly via WhatsApp or call.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        serviceType: '',
        appointmentType: 'clinic',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to book appointment. Please call us directly at 9584212143.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center">
          <Calendar className="text-medical-600" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Book an Appointment</h3>
          <p className="text-sm text-gray-600">Schedule your visit with us</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            <User size={18} />
            Personal Information
          </h4>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
                placeholder="10-digit number"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            <Calendar size={18} />
            Appointment Details
          </h4>
          
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
              Service Required *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Type *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`flex items-center justify-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.appointmentType === 'clinic' 
                  ? 'border-medical-600 bg-medical-50' 
                  : 'border-gray-300 hover:border-medical-300'
              }`}>
                <input
                  type="radio"
                  name="appointmentType"
                  value="clinic"
                  checked={formData.appointmentType === 'clinic'}
                  onChange={handleChange}
                  className="text-medical-600 focus:ring-medical-500"
                />
                <span className="font-medium">Clinic Visit</span>
              </label>
              
              <label className={`flex items-center justify-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.appointmentType === 'home' 
                  ? 'border-medical-600 bg-medical-50' 
                  : 'border-gray-300 hover:border-medical-300'
              }`}>
                <input
                  type="radio"
                  name="appointmentType"
                  value="home"
                  checked={formData.appointmentType === 'home'}
                  onChange={handleChange}
                  className="text-medical-600 focus:ring-medical-500"
                />
                <span className="font-medium">Home Visit</span>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all"
              >
                <option value="">Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all resize-none"
            placeholder="Any specific requirements or health concerns..."
          ></textarea>
        </div>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800' 
                : 'bg-red-50 text-red-800'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <p className="text-sm">{status.message}</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Booking...
            </>
          ) : (
            <>
              <Calendar size={20} />
              Book Appointment
            </>
          )}
        </button>

        <div className="bg-medical-50 border border-medical-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This is a booking request. Our team will confirm your appointment via WhatsApp or phone call within 1-2 hours during working hours.
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default AppointmentBooking;
