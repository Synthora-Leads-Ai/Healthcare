export const clinicInfo = {
  name: "Soni Physiotherapy Centre & Home Healthcare Services",
  shortName: "Soni Physiotherapy Centre",
  tagline: "Devoted to Patient Care - Quality Healthcare at Home & Clinic",
  
  doctor: {
    name: "Dr. Arvind Soni",
    qualification: "MPT (Ortho)",
    designation: "Senior Physiotherapist",
    experience: "10+ Years",
    specialization: [
      "Musculoskeletal & Orthopaedic Physiotherapy",
      "Sports Physiotherapy",
      "Pain Management",
      "Occupational Therapy"
    ]
  },

  contact: {
    phone: ["07041659814", "07614072143"],
    mobile: "9584212143",
    whatsapp: "9584212143",
    email: "drarvindsonijbp@gmail.com"
  },

  address: {
    street: "Manora Tower, M.R. 4 Main Road",
    area: "Ekta Chowk, Vijay Nagar",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    pincode: "482002",
    landmark: "Near Ekta Chowk / Near Shiva Temple, Yashwar Nagar",
    mapLink: "https://maps.google.com/?q=23.1829699,79.909784"
  },

  hours: {
    clinic: {
      weekdays: "Monday - Saturday: 9:30 AM - 6:30 PM",
      sunday: "Closed (Clinic) / Available for Home Visits",
      earlySlot: "Monday - Saturday: 8:00 AM - 10:00 AM (Early appointments)"
    },
    homecare: "24 Hours / 7 Days a Week - Including Sundays and Holidays"
  },

  fees: {
    clinic: "₹200 per session",
    homeVisit: "On request",
    bookingFee: "NIL - No booking fee"
  },

  ratings: {
    justdial: { rating: 4.5, reviews: 189 },
    lybrate: { rating: 4.3, reviews: 1 },
    indiamart: { rating: 5.0, reviews: 1 },
    facebook: { likes: 691, checkins: 175 }
  },

  social: {
    facebook: "https://facebook.com/sonihomehealthcar",
    website: "www.sonihomecare.in"
  },

  mission: "This premises is totally devoted toward patient care — providing home care facility with complete care for patients, elders, and families.",

  usps: [
    {
      title: "Doctor-Led Care",
      description: "Founded and run by qualified physiotherapist Dr. Arvind Soni (MPT Ortho)"
    },
    {
      title: "10+ Years Experience",
      description: "Over a decade of trusted service in Jabalpur and Madhya Pradesh"
    },
    {
      title: "Affordable Pricing",
      description: "Hospital-grade care at ₹200 per visit with special package discounts"
    },
    {
      title: "24/7 Home Care",
      description: "Round-the-clock home healthcare services, every day of the week"
    },
    {
      title: "Certified Staff",
      description: "All nurses, physiotherapists, and attendants are trained and certified"
    },
    {
      title: "Hi-Tech Equipment",
      description: "Advanced electrotherapy and ultrasound machinery for modern treatment"
    },
    {
      title: "Hospital-to-Home Specialists",
      description: "Expert in seamless transition from hospital discharge to home recovery"
    },
    {
      title: "All Therapies Under One Roof",
      description: "Physiotherapy, OT, Speech Therapy, Special Education - comprehensive care"
    }
  ]
};

export const services = {
  physiotherapy: [
    {
      category: "Orthopaedic Physiotherapy",
      icon: "bone",
      treatments: [
        "Knee Physiotherapy (Pre & Post Replacement)",
        "Back & Spine Physiotherapy",
        "Neck / Cervical Physiotherapy",
        "Shoulder Physiotherapy (Frozen Shoulder)",
        "Post-Surgical Rehabilitation",
        "Lower Back Pain Treatment",
        "PIVD Therapy",
        "Sciatica Pain Management"
      ]
    },
    {
      category: "Neuro Physiotherapy",
      icon: "brain",
      treatments: [
        "Stroke Rehabilitation (Hemiplegia)",
        "Parkinson's Disease Physiotherapy",
        "Cerebral Palsy Management",
        "Multiple Sclerosis Physiotherapy",
        "Spinal Cord Injury Rehabilitation",
        "Bell's Palsy Treatment"
      ]
    },
    {
      category: "Cardiovascular & Pulmonary",
      icon: "heart-pulse",
      treatments: [
        "Chest Physiotherapy",
        "Breathing Exercise Programs",
        "Post Cardiac Surgery Rehabilitation",
        "COPD Management",
        "Lung Function Improvement"
      ]
    },
    {
      category: "Sports Physiotherapy",
      icon: "activity",
      treatments: [
        "Sports Injury Management",
        "Work Injury Treatment",
        "Athletic Performance Recovery",
        "Muscle Strain & Sprain Treatment"
      ]
    },
    {
      category: "Pain Management",
      icon: "zap",
      treatments: [
        "Chronic Pain Management",
        "Joint Pain Relief Therapy",
        "Trigger Point Therapy",
        "Electrotherapy for Pain Control"
      ]
    },
    {
      category: "Paediatric & Developmental",
      icon: "baby",
      treatments: [
        "Occupational Therapy (OT)",
        "Speech Therapy",
        "Special Education Programs",
        "Sensory Integration Therapy",
        "Behavior Modification & Counselling"
      ]
    }
  ],

  homeHealthcare: [
    {
      title: "Home Physiotherapy",
      icon: "home",
      description: "Professional physiotherapy sessions at your home",
      features: [
        "On-call physiotherapist for special cases",
        "Hospital-to-home transition care",
        "Elder physiotherapy at home"
      ]
    },
    {
      title: "Home Nursing Care",
      icon: "heart",
      description: "24-hour nursing care by registered nurses",
      features: [
        "Personalized nursing equivalent to hospital standards",
        "Compassionate family-integrated care",
        "Post-operative & ICU-discharged patient care"
      ]
    },
    {
      title: "Trained Attendants",
      icon: "users",
      description: "12-hour / 24-hour certified caretaker services",
      features: [
        "Male and female attendants available",
        "Background-verified care staff",
        "All-time caretaker services"
      ]
    },
    {
      title: "Elder Care Services",
      icon: "user",
      description: "Dedicated care programs for senior citizens",
      features: [
        "Daily assistance for elderly",
        "Companionship and personal care",
        "Chronic condition monitoring"
      ]
    },
    {
      title: "Doctor Home Visits",
      icon: "stethoscope",
      description: "Medical consultation at your doorstep",
      features: [
        "Doctor visit for assessment",
        "Consultation for home-bound patients"
      ]
    },
    {
      title: "Babysitter / Child Care",
      icon: "baby",
      description: "Full-time, part-time & 24-hour services",
      features: [
        "Trained child care providers",
        "Aaya services for newborns",
        "Experienced caregivers"
      ]
    }
  ]
};

export const conditions = [
  { name: "Cervical Spondylosis", category: "ortho" },
  { name: "Lumbar Spondylitis", category: "ortho" },
  { name: "PIVD", category: "ortho" },
  { name: "Sciatica", category: "ortho" },
  { name: "Knee Osteoarthritis", category: "ortho" },
  { name: "Frozen Shoulder", category: "ortho" },
  { name: "Lower Back Pain", category: "ortho" },
  { name: "Stroke (CVA)", category: "neuro" },
  { name: "Parkinson's Disease", category: "neuro" },
  { name: "Cerebral Palsy", category: "neuro" },
  { name: "Bell's Palsy", category: "neuro" },
  { name: "COPD", category: "cardio" },
  { name: "Post-Cardiac Surgery", category: "cardio" },
  { name: "Sports Injuries", category: "sports" },
  { name: "Chronic Pain", category: "pain" }
];

export const testimonials = [
  {
    name: "Jyoti Verma",
    treatment: "Physiotherapy Treatment",
    rating: 5,
    text: "Excellent physiotherapy treatment. Dr. Soni's approach is very professional and caring. Saw improvement within first few sessions."
  },
  {
    name: "Deepa Balvalli",
    treatment: "Back Pain Treatment",
    rating: 5,
    text: "Received effective back pain treatment. The staff is friendly and the equipment is modern. Highly recommend for anyone with back issues."
  },
  {
    name: "Rajendra Shrivastava",
    treatment: "Work Injury Recovery",
    rating: 5,
    text: "Successful work injury treatment and recovery. Dr. Arvind Soni's expertise helped me get back to work quickly. Very satisfied with the care."
  },
  {
    name: "Satyendra Mishra",
    location: "Bhopal",
    treatment: "Home Healthcare",
    rating: 5,
    text: "Great home healthcare service. The team is professional and compassionate. They truly care about patient recovery and comfort."
  }
];

export const citiesServed = [
  "Jabalpur",
  "Bhopal",
  "Indore",
  "Gwalior",
  "Katni"
];
