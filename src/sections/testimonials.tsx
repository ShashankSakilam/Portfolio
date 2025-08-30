'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const metrics = [
    {
      number: "95+",
      label: "Percent\ncustomer satisfaction",
      bgColor: "bg-electric-green",
      textColor: "text-black"
    },
    {
      number: "10+", 
      label: "Years\nof experience",
      bgColor: "bg-gray-800",
      textColor: "text-white"
    },
    {
      number: "24+",
      label: "Projects\ncompleted", 
      bgColor: "bg-white",
      textColor: "text-black"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Andrew transformed my business idea into a stunning website in just two weeks, and I couldn't be happier! His attention to detail and quick turnaround time were impressive.",
      author: "Andrew Mathews",
      avatar: "/api/placeholder/40/40"
    },
    {
      rating: 5,
      text: "Attention to detail is evident in the responsive layouts, ensuring seamless performance across all devices.",
      author: "Sarah Teller", 
      avatar: "/api/placeholder/40/40"
    },
    {
      rating: 5,
      text: "Pleasure to work with. S can't recommend enough",
      author: "Tyler Stars",
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${metric.bgColor} ${metric.textColor} p-8 rounded-lg`}
            >
              <div className="text-6xl font-bold mb-4">{metric.number}</div>
              <div className="text-lg leading-relaxed whitespace-pre-line">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 mb-8"
        >
          <div className="w-2 h-2 bg-electric-green rounded-full"></div>
          <span className="text-white font-medium">[04] — Testimonials</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight border-4 border-blue-500 inline-block p-4">
            Don't take my<br />
            word for it
            <span className="text-electric-green">*</span>
          </h2>
          <p className="text-gray-400 mt-4">* Take theirs</p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-electric-green font-bold">{testimonial.rating}/5</span>
                <div className="flex space-x-1 ml-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-electric-green">★</span>
                  ))}
                </div>
              </div>

              {/* Quote icon */}
              <div className="text-gray-600 text-4xl mb-4">"</div>

              {/* Testimonial text */}
              <p className="text-white leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full bg-gray-700"
                />
                <span className="text-gray-300 font-medium">{testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
