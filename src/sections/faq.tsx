'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      number: "01",
      question: "What is your typical project timeline?",
      answer: "Most projects take 2-4 weeks from start to finish, depending on complexity and scope. I'll provide a detailed timeline during our initial consultation."
    },
    {
      number: "02", 
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, I offer various maintenance packages to keep your website updated, secure, and running smoothly. We can discuss the best option for your needs."
    },
    {
      number: "03",
      question: "Can you work with existing brand guidelines?", 
      answer: "Absolutely! I can work within your existing brand guidelines or help develop new ones if needed. Consistency across all touchpoints is crucial for brand recognition."
    },
    {
      number: "04",
      question: "How do you handle revisions and feedback?",
      answer: "I include multiple revision rounds in each project phase. I use collaborative tools to gather feedback efficiently and ensure we're aligned throughout the process."
    },
    {
      number: "05",
      question: "How do I get started?",
      answer: "Simply reach out through the contact form or email me directly. We'll schedule a free consultation to discuss your project goals and determine if we're a good fit."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 mb-8"
        >
          <div className="w-2 h-2 bg-electric-green rounded-full"></div>
          <span className="text-black font-medium">[05] — FAQ</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight border-4 border-blue-500 inline-block p-4">
            Got Questions?
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 font-medium">{faq.number}/</span>
                  <span className="text-black font-semibold text-lg">{faq.question}</span>
                </div>
                <div className={`text-2xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  +
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
