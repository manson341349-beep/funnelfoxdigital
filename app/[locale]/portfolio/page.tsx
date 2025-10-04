import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - FunnelFox Digital",
  description: "Explore our portfolio of successful digital marketing campaigns and web development projects that have transformed businesses.",
};

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Growth Strategy",
      client: "TechGear Pro",
      industry: "Technology Retail",
      description: "Increased online sales by 340% through comprehensive digital marketing strategy including SEO, PPC, and conversion optimization.",
      results: [
        "340% increase in online sales",
        "280% improvement in organic traffic",
        "45% reduction in customer acquisition cost",
        "92% increase in conversion rate",
      ],
      tags: ["E-commerce", "SEO", "PPC", "CRO"],
      image: "🛒",
    },
    {
      title: "SaaS Lead Generation",
      client: "CloudSync Solutions",
      industry: "Software as a Service",
      description: "Developed a comprehensive lead generation funnel that increased qualified leads by 450% and reduced cost per lead by 60%.",
      results: [
        "450% increase in qualified leads",
        "60% reduction in cost per lead",
        "180% improvement in lead quality score",
        "25% increase in trial-to-paid conversion",
      ],
      tags: ["SaaS", "Lead Generation", "Content Marketing", "Marketing Automation"],
      image: "☁️",
    },
    {
      title: "Local Business Domination",
      client: "Metro Dental Group",
      industry: "Healthcare",
      description: "Transformed local dental practice into the #1 ranked dental service in their city through local SEO and reputation management.",
      results: [
        "#1 ranking for 15+ local keywords",
        "520% increase in appointment bookings",
        "4.9/5 star average rating across platforms",
        "300% growth in new patient acquisition",
      ],
      tags: ["Local SEO", "Reputation Management", "Healthcare Marketing"],
      image: "🦷",
    },
    {
      title: "B2B Manufacturing Growth",
      client: "Industrial Solutions Inc",
      industry: "Manufacturing",
      description: "Modernized digital presence and implemented account-based marketing strategy resulting in significant enterprise client acquisition.",
      results: [
        "8 new enterprise clients acquired",
        "150% increase in qualified inquiries",
        "45% improvement in sales cycle length",
        "220% ROI on marketing investment",
      ],
      tags: ["B2B Marketing", "Account-Based Marketing", "Web Development"],
      image: "🏭",
    },
    {
      title: "Restaurant Chain Expansion",
      client: "Gourmet Burger Co",
      industry: "Food & Beverage",
      description: "Supported rapid expansion with digital marketing strategy that increased brand awareness and drove foot traffic to new locations.",
      results: [
        "12 new locations successfully launched",
        "380% increase in online orders",
        "65% improvement in brand recognition",
        "40% increase in average order value",
      ],
      tags: ["Multi-location Marketing", "Social Media", "Local SEO"],
      image: "🍔",
    },
    {
      title: "Fitness App Launch",
      client: "FitTrack Pro",
      industry: "Health & Fitness",
      description: "Launched fitness app with comprehensive digital marketing campaign achieving 100K+ downloads in first 6 months.",
      results: [
        "100K+ app downloads in 6 months",
        "4.8/5 app store rating",
        "35% monthly active user retention",
        "150% above projected user acquisition",
      ],
      tags: ["App Marketing", "Influencer Marketing", "Social Media"],
      image: "💪",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through strategic digital marketing and innovative solutions.
            </p>
            <div className="mt-10">
              <Link
                href="/blueprint"
                className="bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg transition-all duration-200"
              >
                Get Your Custom Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-5xl">{project.image}</div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">{project.client}</p>
                        <p className="text-gray-600 text-sm">{project.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                    <ul className="space-y-3">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-6">
              <div className="text-primary text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "FunnelFox Digital transformed our online presence completely. The results exceeded our expectations."
              </p>
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-gray-600 text-sm">CEO, TechGear Pro</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-primary text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "The team's expertise in SaaS marketing is unmatched. They delivered exceptional results."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-gray-600 text-sm">Founder, CloudSync Solutions</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-primary text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "Professional, results-driven, and always available. Highly recommend their services."
              </p>
              <div className="font-semibold text-gray-900">Dr. Jennifer Adams</div>
              <div className="text-gray-600 text-sm">Owner, Metro Dental Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join Our Success Stories?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Let's create a custom strategy that delivers the same exceptional results for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/blueprint"
                className="bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg transition-all duration-200"
              >
                Get Your Blueprint
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold leading-6 text-white hover:text-primary-200 transition-colors duration-200"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}