import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Hook to detect when section is in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Service data with SVG icons
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "/img/software.png",
      description:
        "Inflame Solution Are Provide very good in web development offering services, inflame offer reliable web development services to generate the remarkable results which your business need.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/web_development",
    },
    {
      id: 2,
      title: "Software Development",
      icon: "/img/software.png",
      description:
        "Inflame Solution provides robust software development services to streamline operations and achieve your business goals.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/software_development",
    },
    {
      id: 3,
      title: "Creative Design",
      icon: "/img/creative.png",
      description:
        "Inflame Solution delivers creative design services to elevate your brand with stunning visuals and user experiences.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/creative_design",
    },
    {
      id: 4,
      title: "Organic Marketing",
      icon: "/img/organic.png",
      description:
        "Inflame Solution boosts your online presence with organic marketing strategies to attract and engage your audience.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/organic_marketing",
    },
    {
      id: 5,
      title: "Paid Marketing",
      icon: "/img/software.png",
      description:
        "Inflame Solution maximizes ROI with targeted paid marketing campaigns tailored to your business needs.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/paid_marketing",
    },
    {
      id: 6,
      title: "Products",
      icon: "/img/software.png",
      description:
        "Inflame Solution offers innovative products designed to solve common business challenges efficiently.",
      features: [
        "Performance & Load Time",
        "Reusable",
        "Responsiveness",
        "Quality assurance and testing",
        "Quality maintenance, update, and bug fixes",
      ],
      link: "/products",
    },
  ];

  // Pricing plans
  const pricingPlans = [
    {
      title: "Lite Plan",
      price: 29,
      description: "Perfect Choice For Individual",
      features: [
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
      ],
    },
    {
      title: "Premium Plan",
      price: 59,
      description: "Perfect Choice For Individual",
      features: [
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
      ],
    },
    {
      title: "Pro Plan",
      price: 79,
      description: "Perfect Choice For Individual",
      features: [
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
        "Powerful admin panel",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Services - Inflame Solutions</title>
        <meta
          name="description"
          content="Explore Inflame Solutions' comprehensive services, including web design, software development, creative design, and marketing."
        />
        <meta
          name="keywords"
          content="web development, software development, creative design, organic marketing, paid marketing, Inflame Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="servicespage bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="topservices bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Inflame Solutions Services
            </motion.h2>
            <nav className="text-center text-lg">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              <span className="mx-2">/</span> Services
            </nav>
          </div>
        </section>

        {/* Services Section */}
        <section className="centerservices py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white mb-8"
            >
              Our Services
            </motion.h2>
            <div ref={ref} className="cservicesbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="csservice bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h2>
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-12 h-12 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <IoMdCheckmark className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{service.description}</p>
                  <Link href={service.link}>
                    <button className="learn_more_button mt-4">Learn More</button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricingplansec bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pricingtitles text-center mb-8"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <img src="/img/chevron_right.png" alt="Chevron icon" className="w-6 h-6 mr-2" />
                PRICING PLAN
              </h3>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                Inflame All Service Pricing
              </h2>
            </motion.div>
            <div className="pricingcards grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  className="pricingcard bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{plan.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
                  <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-4">
                    ${plan.price}.00 <span className="text-lg font-normal">/Monthly</span>
                  </h2>
                  <Link href="/contact">
                    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                      Get Started Now
                    </button>
                  </Link>
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white">{plan.title} Includes:</h5>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                          <IoMdCheckmark className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}