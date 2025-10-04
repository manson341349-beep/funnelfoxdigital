'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff6817]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff6817]/3 to-transparent rounded-full blur-3xl"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ff6817" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1]"
              variants={fadeInUp}
            >
              We turn clicks into clients —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6817] to-[#ff8c42]">
                for real.
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mt-8 max-w-4xl text-xl sm:text-2xl leading-relaxed text-gray-600 font-light"
              variants={fadeInUp}
            >
              Conversion-first websites, SEO, and funnels for SMEs in Malaysia & SEA.
            </motion.p>
            
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#ff6817] to-[#ff8c42] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e55a14] to-[#ff6817] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Get Free Blueprint</span>
                  <motion.span 
                    className="relative ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`/${locale}/portfolio`}
                  className="group text-lg font-semibold leading-6 text-gray-700 hover:text-[#ff6817] transition-colors duration-300 flex items-center"
                >
                  View Our Work 
                  <motion.span 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KPI Cards Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { number: "+42%", label: "CVR", subtitle: "Conversion Rate" },
              { number: "+80%", label: "ROAS", subtitle: "Return on Ad Spend" },
              { number: "+156%", label: "Traffic", subtitle: "Organic Growth" },
              { number: "+230%", label: "Leads", subtitle: "Quality Inquiries" }
            ].map((kpi, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6817]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff6817]/20 to-[#ff8c42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  
                  <div className="relative">
                    <motion.div 
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ff6817] to-[#ff8c42] bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {kpi.number}
                    </motion.div>
                    <div className="mt-4 text-base font-medium text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                      {kpi.label}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {kpi.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              variants={fadeInUp}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 font-light"
              variants={fadeInUp}
            >
              Full-stack digital solutions that drive measurable results for your business.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Website Development",
                description: "Conversion-optimized websites built for performance and user experience.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              },
              {
                title: "SEO & Content",
                description: "Data-driven SEO strategies that rank and convert your target audience.",
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              },
              {
                title: "Funnel Optimization",
                description: "Sales funnels that guide prospects from awareness to conversion.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              },
              {
                title: "Analytics & Tracking",
                description: "Comprehensive tracking setup to measure and optimize performance.",
                icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                title: "Digital Marketing",
                description: "Integrated campaigns across Google Ads, Facebook, and other channels.",
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              },
              {
                title: "Conversion Audits",
                description: "In-depth analysis of your current funnel with actionable recommendations.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-100/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6817]/5 via-transparent to-[#ff8c42]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff6817]/20 to-[#ff8c42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center">
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6817] to-[#ff8c42] text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                          </svg>
                        </div>
                      </motion.div>
                      <div className="ml-6">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff6817] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6817] via-[#ff6817] to-[#e55a14]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              variants={fadeInUp}
            >
              Ready to turn your clicks into clients?
            </motion.h2>
            <motion.p 
              className="mx-auto mt-8 max-w-3xl text-xl sm:text-2xl text-orange-100 font-light leading-relaxed"
              variants={fadeInUp}
            >
              Get a free conversion audit and blueprint for your business. No fluff, just actionable insights.
            </motion.p>
            
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#ff6817] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Get Free Audit</span>
                  <motion.span 
                    className="relative ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`/${locale}/portfolio`}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  View Case Studies
                  <motion.span 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
