import React from "react";
import Link from "next/link";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-neutral-50 py-20 md:py-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              We turn <span className="text-[#ff6817]">clicks into clients</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
              Conversion-first websites, SEO, and funnels for SMEs in Malaysia & SEA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/blueprint`} className="btn-primary text-lg px-8 py-4">
                Get Free Blueprint
              </Link>
              <Link href={`/${locale}/cases`} className="btn btn-outline text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff6817] mb-2">150+</div>
              <div className="text-neutral-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff6817] mb-2">95%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff6817] mb-2">3x</div>
              <div className="text-neutral-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff6817] mb-2">24/7</div>
              <div className="text-neutral-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to grow your business online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Design & Development</h3>
              <p className="text-neutral-600 mb-4">
                Conversion-optimized websites that turn visitors into customers
              </p>
              <Link href={`/${locale}/services/web-design`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-neutral-600 mb-4">
                Rank higher on Google and drive organic traffic to your business
              </p>
              <Link href={`/${locale}/services/seo`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Strategy</h3>
              <p className="text-neutral-600 mb-4">
                Data-driven strategies to scale your business and maximize ROI
              </p>
              <Link href={`/${locale}/services/business-strategy`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">App UI/UX Design</h3>
              <p className="text-neutral-600 mb-4">
                User-centered design that creates engaging digital experiences
              </p>
              <Link href={`/${locale}/services/app-design`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand & Copy</h3>
              <p className="text-neutral-600 mb-4">
                Compelling brand identity and copy that resonates with your audience
              </p>
              <Link href={`/${locale}/services/branding-copy`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#ff6817] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p className="text-neutral-600 mb-4">
                Custom WordPress solutions that are fast, secure, and scalable
              </p>
              <Link href={`/${locale}/services/wordpress`} className="text-[#ff6817] font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff6817] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-neutral-600">We analyze your business, goals, and target audience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff6817] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy</h3>
              <p className="text-neutral-600">We create a custom blueprint for your success</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff6817] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Execute</h3>
              <p className="text-neutral-600">We implement the solution with precision and care</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff6817] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimize</h3>
              <p className="text-neutral-600">We continuously improve and scale your results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff6817]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get your free digital marketing blueprint and discover how we can help you turn clicks into clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/blueprint`} className="bg-white text-[#ff6817] px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors">
              Get Free Blueprint
            </Link>
            <Link href={`/${locale}/contact`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#ff6817] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}