
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock, IoMdArrowDropdown } from "react-icons/io";
import { FaIndustry, FaChartLine, FaCogs, FaStar, FaPlug, FaMobileAlt, FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ManufacturingSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeFaq, setActiveFaq] = useState(null); // State for FAQ dropdown

  const slides = [
    { src: "/img/manu.png", alt: "ManuPro Dashboard" },
    // { src: "/img/2.jpg", alt: "Inventory Management" },
    // { src: "/img/3.jpg", alt: "Production Analytics" },
  ];

  const faqs = [
    {
      question: "What types of manufacturing software do you develop?",
      answer: "We develop solutions for production planning, inventory management, quality control, analytics, and more.",
    },
    {
      question: "Can I request custom features for my manufacturing needs?",
      answer: "Yes, we offer tailor-made features to align with your specific manufacturing processes.",
    },
    {
      question: "Is your software suitable for small manufacturers?",
      answer: "Absolutely, our solutions are scalable for businesses of all sizes, including small manufacturers and startups.",
    },
    {
      question: "What technologies do you use for manufacturing software?",
      answer: "We use modern technologies like React, Node.js, Laravel, and cloud-based architectures for performance and scalability.",
    },
    {
      question: "Does your software support mobile access?",
      answer: "Yes, our manufacturing software includes mobile apps for managing operations on the go.",
    },
    {
      question: "What is your pricing model for manufacturing software?",
      answer: "We offer flexible pricing based on project scope, including fixed, milestone-based, or subscription models.",
    },
    {
      question: "Do you provide ongoing support for the software?",
      answer: "Yes, we offer maintenance, updates, and 24/7 customer support to ensure smooth operations.",
    },
    {
      question: "How do you ensure data security in your software?",
      answer: "We implement encryption, secure coding practices, and regular backups to protect your data.",
    },
    {
      question: "Can your software integrate with existing systems?",
      answer: "Yes, we support integrations with ERP, supply chain, accounting systems, and other third-party tools.",
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
      id: "dashboard",
      title: "Manufacturing Dashboard",
      content:
        "Monitor production, track inventory, and manage workflows with a real-time dashboard.",
    },
    {
      id: "inventory",
      title: "Inventory Management",
      content:
        "Optimize stock levels, track materials, and automate reordering for efficiency.",
    },
    {
      id: "analytics",
      title: "Production Analytics",
      content:
        "Analyze production performance and identify bottlenecks with detailed reports.",
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
        <title>Manufacturing Software Development</title>
        <meta
          name="description"
          content="Inflame Solution Ltd is a leading manufacturing software development company in Bangladesh, delivering robust, scalable solutions to optimize production processes."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="pos-software">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h1">
                Best Manufacturing Software Company <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame Solution Ltd is a leading manufacturing software development company in Bangladesh, delivering robust, scalable solutions to optimize production processes, streamline inventory, and enhance operational efficiency for manufacturers of all sizes.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(244, 63, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="hero-image"
              variants={slideRight}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/img/img4.png"
                alt="ManuPro Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        {/* <div className="headers">
          <span className="banner-text">
            Premier Manufacturing Software Solutions in Bangladesh
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Book for Demo</span>
          </Link>
        </div> */}

        {/* Features Section */}
        <section className="features section-padding" id="features">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Our Manufacturing Software Features</h2>
              <p className="text-content">
                Equip your production team with tools for seamless operations, inventory management, and analytics.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaIndustry />,
                  title: "Production Planning",
                  desc: "Efficiently plan and schedule production workflows.",
                },
                {
                  icon: <FaTools />,
                  title: "Inventory Management",
                  desc: "Track materials and automate stock replenishment.",
                },
                {
                  icon: <FaCogs />,
                  title: "Quality Control",
                  desc: "Ensure product quality with integrated inspection tools.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Real-Time Analytics",
                  desc: "Monitor performance with actionable insights.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Access",
                  desc: "Manage operations anytime, anywhere with mobile apps.",
                },
                {
                  icon: <FaPlug />,
                  title: "System Integrations",
                  desc: "Connect with ERP, CRM, and supply chain systems.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Data Security",
                  desc: "Protect sensitive data with advanced encryption.",
                },
                {
                  icon: <FaStar />,
                  title: "Compliance Management",
                  desc: "Stay compliant with automated regulatory tracking.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
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
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits section-padding" id="benefits">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Why Choose Inflame as Your Manufacturing Software Partner?</h2>
              <p className="text-content">
                Transform manufacturing operations with tools that boost efficiency, reduce waste, and ensure quality.
              </p>
            </motion.div>
            <div className="benefits-grid">
              <motion.div
                className="benefits-image"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Image
                  src="/img/manufacturing.jpg"
                  alt="ManuPro Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Experienced Development Team",
                    desc: "Our skilled developers deliver reliable manufacturing solutions.",
                  },
                  {
                    title: "Customizable Solutions",
                    desc: "Tailored software to fit your unique production needs.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Built with modern tech for performance and scalability.",
                  },
                  {
                    title: "Cost-Effective Pricing",
                    desc: "Affordable solutions without compromising quality.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "We ensure projects are completed on schedule.",
                  },
                  {
                    title: "Robust Client Support",
                    desc: "24/7 support to keep your operations running smoothly.",
                  },
                  {
                    title: "Scalable Development",
                    desc: "Software that grows with your manufacturing demands.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    variants={slideRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <IoMdCheckmarkCircleOutline className="benefit-icon" />
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="demo-section section-padding" id="demo">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Why You Need the Best Manufacturing Software</h2>
              <p className="text-content">
                Discover ManuPro’s manufacturing software through an interactive demo. See how our dashboard, inventory management, and analytics optimize production.
              </p>
            </motion.div>
            <motion.div
              className="demo-container"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="demo-grid">
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
                        className="demo-img"
                        onError={() => console.error(`Failed to load image: ${slides[currentSlide].src}`)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => {
                          console.log("Carousel dot clicked:", index);
                          setCurrentSlide(index);
                        }}
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
                  <div className="demo-tabs">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => {
                          console.log("Tab clicked:", tab.id);
                          setActiveTab(tab.id);
                        }}
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
                      <h4>{tabs.find((tab) => tab.id === activeTab)?.title}</h4>
                      <p>{tabs.find((tab) => tab.id === activeTab)?.content}</p>
                    </motion.div>
                  </AnimatePresence>
                  <motion.div
                    className="demo-benefits"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      "Effortless production management with a sleek interface",
                      "Optimized inventory control in real time",
                      "Seamless integration with your manufacturing ecosystem",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="benefit-item"
                      >
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        <p>{benefit}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Request Demo Button */}
              
            </motion.div>

            {/* Updated FAQ Section with Dropdown */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>FAQs Manufacturing Software Development Services</h4>
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
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Voices from Manufacturing Leaders</h2>
              <p>Hear from production professionals thriving with ManuPro’s solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Mark Reynolds",
                  role: "Plant Manager",
                  quote:
                    "ManuPro’s inventory management has cut our waste by 30%. It’s a must-have!",
                },
                {
                  name: "Elena Martinez",
                  role: "Production Supervisor",
                  quote:
                    "The analytics dashboards help us spot inefficiencies in real time.",
                },
                {
                  name: "Rajesh Kumar",
                  role: "Operations Director",
                  quote:
                    "Managing production across facilities is seamless with ManuPro’s tools.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
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
                  <FaStar className="star-icon" />
                  <p className="quote">“{testimonial.quote}”</p>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="pricing section-padding" id="pricing">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Choose Your Manufacturing Plan</h2>
              <p>Flexible pricing to streamline your production and inventory operations.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$59",
                  features: [
                    "Up to 10 Users",
                    "Basic Production",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$129",
                  features: [
                    "Up to 50 Users",
                    "Inventory Management",
                    "Quality Control",
                    "Integrations",
                    "Priority Support",
                  ],
                  link: "/pricing/growth",
                  cta: "Choose Growth",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited Users",
                    "All Growth Features",
                    "Dedicated Manager",
                    "Custom Integrations",
                    "24/7 Support",
                  ],
                  link: "/contact",
                  cta: "Contact Us",
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
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
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    {plan.price}
                    {plan.price !== "Custom" && <span>/month</span>}
                  </div>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.link}>
                    <motion.a
                      className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
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

     
        
      </div>

  
     
    </>
  );
}
