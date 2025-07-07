
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { FaGlobe, FaRocket,FaCogs,FaLanguage,FaTools,FaUsers, FaPaintBrush, FaSearch, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WebDevelopment() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("responsive");
  const [activeFaq, setActiveFaq] = useState(null); // State for FAQ dropdown

  const slides = [
    { src: "/img/webadmin.png", alt: "Responsive Web Design" },
    { src: "/img/webadmin2.png", alt: "SEO Optimization" },
    { src: "/img/webdesing.png", alt: "Custom UI/UX" },
  ];

  const faqs = [
    {
      question: "What kind of websites do you develop?",
      answer: "We create corporate, e-commerce, portfolio, blog, and customize web portals.",
    },
    {
      question: "Is the website mobile responsive?",
      answer: "Yes, every site we build is fully mobile-friendly.",
    },
    {
      question: "Do you use WordPress or custom code?",
      answer: "We offer both, CMS like WordPress or fully custom solutions based on your needs like Node.js, React.js, Laravel, and Express.js.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer: "Absolutely. All our websites are SEO-optimized for better visibility.",
    },
    {
      question: "Do you provide domain and hosting?",
      answer: "Yes, we offer secure hosting and assist with domain registration from the market of national and international.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we can revamp and modernize your current site.",
    },
    {
      question: "Is eCommerce functionality included?",
      answer: "Yes, we can build complete online stores with payment gateways.",
    },
    {
      question: "How long will it take to build my site?",
      answer: "Project timelines depend on complexity but typically range from 7 to 25 working days.",
    },
    {
      question: "Do I get training on how to manage the site?",
      answer: "Yes, we provide training and documentation.",
    },
    {
      question: "What support do you provide after launch?",
      answer: "Ongoing maintenance, backups, updates, and 24/7 tech support.",
    },
    {
      question: "Can I add features later?",
      answer: "Yes, our websites are scalable and modular for future updates.",
    },
    {
      question: "Do you offer UI/UX design only services?",
      answer: "Yes, we also offer standalone design services for apps or existing platforms.",
    },
  ];

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabs = [
    {
      id: "responsive",
      title: "Responsive Design",
      content:
        "Ensure your website looks stunning on all devices with fully responsive designs tailored to your audience.",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      content:
        "Boost your visibility with SEO-friendly structures that rank higher on search engines like Google.",
    },
    {
      id: "uiux",
      title: "Custom UI/UX",
      content:
        "Create intuitive and engaging user experiences with custom designs that reflect your brand identity.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title> Custom Web Developer Company in Bangladesh</title>
        <meta
          name="description"
          content="Create responsive, secure, and SEO-optimized websites with the best web developer company in Bangladesh." />
        <meta
          name="keywords"
          content="web development, web design, responsive websites, SEO, UI/UX, Inflame Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="web-development">
        {/* Hero Section */}
        <section className="hero relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/wave-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="hero-content text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h1">
                Web Developer Company <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame is a trusted web developer company in Bangladesh. Inflame offers high-tech website development services tailored to grow your business online. Whether you’re a startup or an enterprise, our expert team at our web design and development company in Dhaka Bangladesh, ensures fast, secure, and responsive websites that convert visitors into customers.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(147, 197, 253, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Demo
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="hero-image mt-8"
              variants={slideRight}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/img/3d.png.gif"
                alt="Web Design Illustration"
                width={800}
                height={400}
                style={{ objectFit: "contain" }}
                className="hero-img"
              />
            </motion.div>
          </div>
        </section>
        {/* <div className="headers">
          <span className="banner-text">
            Leading Web Design & Development Company in Bangladesh
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Book a Consultation</span>
          </Link>
        </div> */}

        {/* Features Section */}
        <section className="features section-padding" id="features">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Key Features of Inflame Website Development Service</h2>
              <p className="text-content">
                Build a website that captivates users and drives growth with our advanced design and development tools.
              </p>
            </motion.div>
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaPaintBrush />,
                  title: "Custom Website Design",
                  desc: "Unique, user-friendly designs aligned with your brand identity.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Responsive Development",
                  desc: "Mobile-optimized websites that work smoothly across all devices.",
                },
                {
                  icon: <FaGlobe />,
                  title: "E-Commerce Integration",
                  desc: "Build feature-rich online stores with secure payment gateways.",
                },
                {
                  icon: <FaSearch />,
                  title: "SEO-Optimized Coding",
                  desc: "Clean, fast-loading code that ranks better on search engines.",
                },
                {
                  icon: <FaRocket />,
                  title: "Speed & Performance Optimization",
                  desc: "Blazing-fast websites with advanced performance tuning.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Secure Hosting & SSL",
                  desc: "Safe and reliable hosting with free SSL for encryption.",
                },
                {
                  icon: <FaCogs />,
                  title: "Custom Web Applications",
                  desc: "Tailor-made portals, dashboards, and business solutions.",
                },
                {
                  icon: <FaLanguage />,
                  title: "Multi-Language Support",
                  desc: "Websites in Bangla, English, or any language of your choice.",
                },
                
                
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
                  variants={index % 2 === 0 ? slideLeft : slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="icon-wrapper text-blue-600 dark:text-blue-400 text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits section-padding bg-gray-100 dark:bg-gray-800" id="benefits">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Why You Need the Best Website Development Service</h2>
              <p className="text-content">
                We deliver websites that not only look great but also drive measurable results for your business.
              </p>
            </motion.div>
            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="benefits-image"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Image
                  src="/img/webdesign.png"
                  alt="Web Design Benefits"
                  width={600}
                  height={400}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Professional Online Presence",
                    desc: "Establish a professional online presence to build credibility.",
                  },
                  {
                    title: "Drive More Leads and Sales",
                    desc: "Convert visitors into customers with optimized designs.",
                  },
                  {
                    title: "Improved User Experience",
                    desc: "Enhance user experience and mobile accessibility for engagement.",
                  },
                  {
                    title: "Stand Out from Competitors",
                    desc: "Differentiate your brand with unique, high-quality websites.",
                  },
                  {
                    title: "SEO-Ready Websites",
                    desc: "Get SEO-ready websites for better ranking on search engines.",
                  },
                  {
                    title: "Scalable Growth",
                    desc: "Scale easily with business growth using modular designs.",
                  },
                  {
                    title: "Ongoing Support",
                    desc: "Benefit from ongoing technical support and security updates.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item flex items-start space-x-4"
                    variants={slideRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <IoMdCheckmarkCircleOutline className="benefit-icon text-green-500 text-2xl" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="demo-section section-padding" id="demo">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">See Our Web Solutions in Action</h2>
              <p className="text-content">
                Discover how our responsive designs, SEO strategies, and custom UI/UX can transform your online presence.
              </p>
            </motion.div>
            <motion.div
              className="demo-container"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="demo-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Carousel */}
                <motion.div
                  className="demo-carousel"
                  variants={slideLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={600}
                        height={400}
                        style={{ objectFit: "cover" }}
                        className="demo-img rounded-lg shadow-lg"
                        onError={() => console.error(`Failed to load image: ${slides[currentSlide].src}`)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls flex justify-center mt-4 space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Tabs and Content */}
                <motion.div
                  className="demo-content"
                  variants={slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="demo-tabs flex flex-wrap gap-4 mb-6">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        className={`demo-tab px-4 py-2 rounded-lg font-semibold ${activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"}`}
                        onClick={() => setActiveTab(tab.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="demo-tab-content"
                    >
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{tabs.find((tab) => tab.id === activeTab)?.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{tabs.find((tab) => tab.id === activeTab)?.content}</p>
                    </motion.div>
                  </AnimatePresence>
                  <motion.div
                    className="demo-benefits space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      "Pixel-perfect designs that adapt to any screen size",
                      "Optimized for search engines to drive organic traffic",
                      "User-centric interfaces that enhance engagement",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="benefit-item flex items-center space-x-3"
                      >
                        <IoMdCheckmarkCircleOutline className="check-icon text-green-500 text-xl" />
                        <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Request Demo Button */}
              
            </motion.div>

            {/* Updated FAQ Section with Dropdown */}
            <motion.div
              className="demo-faq mt-12"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">FAQs Inflame Website Development Service</h4>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <IoMdCheckmarkCircleOutline className="faq-icon" style={{ marginRight: "10px" }} />
                      <h5>{faq.question}</h5>
                    </div>
                    <motion.div
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoMdArrowDropdown className="faq-dropdown-icon" />
                    </motion.div>
                  </motion.div>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials section-padding" id="testimonials">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">What Our Clients Say</h2>
              <p className="text-content">Hear from businesses thriving with our web design and development solutions.</p>
            </motion.div>
            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "E-Commerce Owner",
                  quote: "Inflame Solutions transformed our online store with a stunning design that doubled our sales!",
                },
                {
                  name: "Michael Lee",
                  role: "Startup Founder",
                  quote: "Their SEO strategies got us on the first page of Google in just three months.",
                },
                {
                  name: "Emily Davis",
                  role: "Marketing Director",
                  quote: "The custom UI/UX design they created for us has significantly improved user engagement.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <FaGlobe className="star-icon text-blue-600 dark:text-blue-400 text-3xl mb-4" />
                  <p className="quote text-gray-600 dark:text-gray-300 italic">“{testimonial.quote}”</p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">{testimonial.name}</h4>
                  <p className="role text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="pricing section-padding bg-gray-100 dark:bg-gray-800" id="pricing">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Choose Your Web Development Plan</h2>
              <p className="p">Flexible pricing to bring your vision to life.</p>
            </motion.div>
            <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$999",
                  features: [
                    "Responsive Design",
                    "Basic SEO",
                    "1-5 Pages",
                    "Email Support",
                  ],
                  link: "contact",
                  cta: "Get Started",
                },
                {
                  name: "Professional",
                  price: "$2,499",
                  features: [
                    "Custom UI/UX",
                    "Advanced SEO",
                    "Up to 15 Pages",
                    "Integrations",
                    "Priority Support",
                  ],
                  link: "contact",
                  cta: "Choose Professional",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Fully Custom Design",
                    "E-Commerce Features",
                    "Unlimited Pages",
                    "Custom Integrations",
                    "24/7 Support",
                  ],
                  link: "/contact",
                  cta: "Contact Us",
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center relative ${plan.popular ? "popular border-2 border-blue-600" : ""}`}
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  {plan.popular && <span className="popular-badge absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{plan.name}</h3>
                  <div className="price text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg font-normal text-gray-600 dark:text-gray-400">/project</span>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <IoMdCheckmarkCircleOutline className="check-icon text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.link}>
                    <motion.a
                      className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} inline-block`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {plan.cta}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="cta section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Ready to Build Your Dream Website?</h2>
              <p className="p">
                Let Inflame Solutions create a website that elevates your brand and drives growth. Get started today!
              </p>
              <motion.a
                href="/contact"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(147, 197, 253, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </div>
        </section> */}
      </div>

     
     
    </>
  );
}
