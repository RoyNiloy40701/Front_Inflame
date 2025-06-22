import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaLaptopCode, FaCloud, FaRobot, FaUsers, FaRocket, FaCogs, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SaaSProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("crm");
  const [activeFaq, setActiveFaq] = useState(null); // State for FAQ dropdown

  const slides = [
    { src: "/img/saas.gif", alt: "CloudSync CRM Dashboard" },
    { src: "/img/saas-project.jpg", alt: "Project Management Interface" },
    { src: "/img/saas-collab.gif", alt: "Collaboration Tools" },
  ];

  const faqs = [
    {
      question: "What is a SaaS Module?",
      answer: "A plug-and-play cloud-based tool to manage a specific business function like HR, inventory, or accounts etc.",
    },
    {
      question: "Can I use multiple modules together?",
      answer: "Yes, all our modules integrate seamlessly within one platform.",
    },
    {
      question: "Do I need to install anything?",
      answer: "No, it’s 100% web-based. You only need an internet connection and a browser.",
    },
    {
      question: "Is there any setup fee?",
      answer: "No setup fee for most modules. Customization charges may apply.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use encryption, cloud backups, and secure servers hosted in top-tier data centers.",
    },
    {
      question: "Can it support multiple branches?",
      answer: "Yes, all modules are built to handle multi-branch operations and users.",
    },
    {
      question: "Do I get training or support?",
      answer: "Yes, onboarding training and 24/7 support are included in your package.",
    },
    {
      question: "Can I customize the modules?",
      answer: "Yes, modules can be optimized to meet your specific business workflow.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, you can use our system on desktop, tablet, or mobile – anytime, anywhere in the world.",
    },
    {
      question: "Can I start with just one module?",
      answer: "Absolutely! You can begin with one and add more as you grow.",
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
      id: "crm",
      title: "CRM Tools",
      content: "Streamline customer relationships with our intuitive CRM platform.",
    },
    {
      id: "project",
      title: "Project Management",
      content: "Organize tasks and boost productivity with seamless project tracking.",
    },
    {
      id: "collaboration",
      title: "Collaboration Suite",
      content: "Connect teams with real-time communication and file sharing.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const slideRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const glowEffect = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)",
      rotate: 2,
      transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.95 },
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>SaaS Solutions</title>
        <meta
          name="description"
          content="Elevate your business with CloudSync’s SaaS products: CRM, project management, and collaboration tools designed for growth."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="software-dev">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="h1">
                Best SaaS Module in Bangladesh Flexible, <span>Smart and Responsible</span>
              </h1>
              <p className="text-content">
                Inflame SaaS Modules offer businesses in Bangladesh the flexibility to access powerful tools like Inventory, HR, Payroll, Accounting,
                CRM, and POS – all in one secure cloud-based platform.
                Whether you're a startup or a growing enterprise, our SaaS module in Bangladesh helps reduce IT overhead and scale faster
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  {...glowEffect}
                >
                  Discover Solutions
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  {...glowEffect}
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
                src="/img/saas-hero.png"
                alt="CloudSync Platform"
                width={1200}
                height={650}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        {/* <div className="headers">
          <span className="banner-text">
            Next-Gen SaaS for Modern Businesses
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Book a Demo</span>
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
              <h2 className="h1">Inflame SaaS Module</h2>
              <p className="text-content">
                Streamline operations with our powerful SaaS tools designed for efficiency and growth.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCogs />,
                  title: "Inventory Management",
                  desc: "Real-time tracking, multi-warehouse support, stock alerts, and purchase order automation.",
                },
                {
                  icon: <FaUsers />,
                  title: "HR & Payroll",
                  desc: "Automated payroll, tax calculation, attendance tracking, appraisal, and multi-branch employee management.",
                },
                {
                  icon: <FaLaptopCode />,
                  title: "Accounting & Finance",
                  desc: "Handle general ledger, income/expense tracking, bank reconciliation, and financial reporting.",
                },
                {
                  icon: <FaRocket />,
                  title: "CRM",
                  desc: "Track leads, manage client interactions, sales pipelines, and follow-ups with ease.",
                },
                {
                  icon: <FaCloud />,
                  title: "POS Module",
                  desc: "Fast billing, stock sync, customer database, sales analytics, and mobile-friendly UI.",
                },
                {
                  icon: <FaRobot />,
                  title: "Manufacturing",
                  desc: "Manage raw materials, production planning, batch tracking, and wastage control.",
                },
                {
                  icon: <FaStar />,
                  title: "Dealer & Distribution",
                  desc: "Monitor dealer performance, territory-wise sales, and centralized order management.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Multi-Vendor",
                  desc: "Enable multiple vendors to manage products, orders, and payments independently.",
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
              <h2 className="h1">Why Choose Inflame’s SaaS Module in Bangladesh?</h2>
              <p className="text-content">
                Boost productivity, simplify workflows, and scale your business with our SaaS platform.
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
                  src="/img/saas1.png"
                  alt="CloudSync Benefits"
                  width={1000}
                  height={550}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Cloud-based & Scalable",
                    desc: "Automate repetitive tasks to save time.",
                  },
                  {
                    title: " Easy Integration & API Ready",
                    desc: "Grow without worrying about infrastructure.",
                  },
                  {
                    title: "24/7 Access from Web & Mobile",
                    desc: "Use AI to gain actionable insights.",
                  },
                  {
                    title: "No Installation Required",
                    desc: "Keep your data safe with robust protection.",
                  },
                  {
                    title: " Data-Backups & Top-Notch Security",
                    desc: "Foster collaboration with integrated tools.",
                  },
                  {
                    title: " Multi-Branch & Multi-User Support",
                    desc: "Foster collaboration with integrated tools.",
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
              <h2>Why You Need the Best SaaS Module in Bangladesh</h2>
              <p className="text-content">
                See how our SaaS solutions for CRM, project management, and collaboration transform your business.
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
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={700}
                        height={500}
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
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4 }}
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
                      "Improves Efficiency Across Departments",
                      "Reduces IT Costs with Pay-as-You-Go Model",
                      "Easily Customizable & Add-on Ready",
                      "Ensures Data Security & Compliance",
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

              <Link href="/request-demo" legacyBehavior>
                <motion.a
                  className="btn btn-primary demo-request-btn"
                  onClick={() => console.log("Request Demo clicked")}
                  {...glowEffect}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  Request a Live Demo
                </motion.a>
              </Link>
            </motion.div>

            {/* Updated FAQ Section with Dropdown */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>FAQs Inflame SaaS Modules</h4>
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
                    style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                  >
                    <IoMdCheckmarkCircleOutline className="faq-icon" style={{ marginRight: "10px" }} />
                    <h5>{faq.question}</h5>
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
              <h2>Voices from Our Users</h2>
              <p>Hear from businesses thriving with CloudSync’s SaaS solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, GrowEasy",
                  quote: "CloudSync’s CRM transformed our sales pipeline. It’s so easy to use!",
                },
                {
                  name: "Raj Patel",
                  role: "Project Manager",
                  quote: "The project management tools keep our team on track and productive.",
                },
                {
                  name: "Emma Lee",
                  role: "Freelancer",
                  quote: "Collaboration features make working with clients a breeze.",
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

        {/* CTA Section */}
        {/* <section className="cta section-padding">
          <div className="container">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Start your free trial and experience CloudSync’s SaaS solutions today.
              </p>
              <motion.a
                href="/signup"
                className="btn cta-btn"
                {...glowEffect}
              >
                Try for Free
              </motion.a>
            </motion.div>
          </div>
        </section> */}
      </div>

      {/* CSS for FAQ Dropdown */}
      
    </>
  );
}