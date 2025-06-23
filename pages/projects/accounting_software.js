
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock, IoMdArrowDropdown } from "react-icons/io";
import { FaCashRegister, FaChartLine, FaGift, FaStar, FaUsers, FaPlug, FaMobileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AccountingSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeFaq, setActiveFaq] = useState(null);

  const slides = [
    { src: "/img/accounting.gif", alt: "AccountPro Dashboard" },
  ];

  const faqs = [
    {
      question: "What is accounting software?",
      answer: "Accounting software helps businesses manage financial tasks like invoicing, expense tracking, payroll, and reporting digitally.",
    },
    {
      question: "Who can use this software?",
      answer: "It’s ideal for small to large businesses, freelancers, and accountants needing to manage finances efficiently.",
    },
    {
      question: "Is the software suitable for Bangladeshi businesses?",
      answer: "Yes, it supports BDT currency, local tax/VAT regulations, and Bangla/English languages followed by NRB format.",
    },
    {
      question: "Can I access it online?",
      answer: "Yes, our software is cloud-based, allowing access anytime from any device.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use advanced encryption and regular backups to protect your financial data.",
    },
    {
      question: "Can multiple users access the software?",
      answer: "Yes, you can add team members with role-based permissions for secure collaboration.",
    },
    {
      question: "Does it support VAT calculation?",
      answer: "Yes, our software is fully compliant with Bangladesh’s VAT requirements.",
    },
    {
      question: "Is there customer support available?",
      answer: "Yes, we offer dedicated support via phone, email, and live chat.",
    },
    {
      question: "Can I generate financial reports?",
      answer: "Yes, you can generate real-time reports like profit & loss, balance sheets, and cash flow statements.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial to explore AccountPro’s features.",
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
      title: "Intuitive Dashboard",
      content:
        "Access financial data, track expenses, and monitor cash flow with a user-friendly interface designed for clarity and efficiency.",
    },
    {
      id: "invoicing",
      title: "Automated Invoicing",
      content:
        "Create and send professional invoices in seconds. Automate recurring billing and track payments effortlessly.",
    },
    {
      id: "reporting",
      title: "Advanced Reporting",
      content:
        "Generate detailed financial reports, monitor profit margins, and ensure compliance with real-time insights.",
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
        <title>Accounting Solutions</title>
        <meta
          name="description"
          content="Inflame Solution is an accounting software development company in Bangladesh, delivering robust, scalable solutions to optimize financial processes."
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
                Best accounting software <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Discover the best accounting software designed to simplify your finances, improve accuracy, and optimize bookkeeping for businesses of all sizes.
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
                src="/img/accounting.png"
                alt="AccountPro Dashboard"
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
            Premier Accounting Software Solutions in Bangladesh
          </span>
          <Link href="/contact" legacyBehavior>
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
              <h2 className="h1">Our Accounting Software Features</h2>
              <p className="text-content">
                Equip your financial team with tools for seamless bookkeeping, reporting, and compliance.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCashRegister />,
                  title: "Automated Invoicing",
                  desc: "Generate and send invoices instantly with automated reminders.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Financial Reporting",
                  desc: "Access real-time profit, loss, and balance sheet reports.",
                },
                {
                  icon: <FaUsers />,
                  title: "Multi-User Access",
                  desc: "Collaborate with your team with role-based permissions.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Access",
                  desc: "Manage finances on the go with our mobile app.",
                },
                {
                  icon: <FaGift />,
                  title: "Tax Compliance",
                  desc: "Simplify tax calculations and filings with built-in tools.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Data",
                  desc: "Protect your financial data with bank-grade encryption.",
                },
                {
                  icon: <FaPlug />,
                  title: "Seamless Integrations",
                  desc: "Connect with payroll, CRM, and banking platforms.",
                },
                {
                  icon: <FaStar />,
                  title: "Expense Tracking",
                  desc: "Monitor and categorize expenses effortlessly.",
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
              <h2 className="h1">Why Choose Inflame as Your Accounting Software Partner?</h2>
              <p className="text-content">
                Transform financial operations with tools that boost efficiency, reduce errors, and ensure compliance.
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
                  src="/img/accounting.jpg"
                  alt="AccountPro Benefits"
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
                    desc: "Our skilled developers deliver reliable accounting solutions.",
                  },
                  {
                    title: "Customizable Solutions",
                    desc: "Tailored software to fit your unique financial needs.",
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
                    desc: "Software that grows with your financial demands.",
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
              <h2>Why Choose Accounting software </h2>
              <p className="text-content">
                Explore the power of AccountPro’s accounting software through an interactive demo. See how our intuitive dashboard, automated invoicing, and advanced reporting can simplify your financial management.
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
                      "Effortless financial management with a clean interface",
                      "Real-time insights for better decision-making",
                      "Seamless integration with your existing tools",
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
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>FAQs Accounting Software Development Services</h4>
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
              <h2>Voices from Accounting Leaders</h2>
              <p>Hear from businesses thriving with AccountPro’s accounting solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Emma Thompson",
                  role: "Small Business Owner",
                  quote:
                    "AccountPro simplified our invoicing and tax prep. It’s a game-changer for our small team!",
                },
                {
                  name: "Rahul Patel",
                  role: "Freelance Accountant",
                  quote:
                    "The reporting tools are incredible. I can generate client reports in minutes, not hours.",
                },
                {
                  name: "Clara Kim",
                  role: "CFO, Retail Chain",
                  quote:
                    "AccountPro’s integrations and real-time data keep our finances on track across multiple locations.",
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
              <h2>Choose Your Accounting Plan</h2>
              <p>Flexible pricing to streamline your financial management.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$19",
                  features: [
                    "1 User",
                    "Basic Invoicing",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$49",
                  features: [
                    "Up to 5 Users",
                    "Expense Tracking",
                    "Tax Compliance Tools",
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
                  <Link href={plan.link} legacyBehavior>
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
              <h2>Ready to Transform Accounting?</h2>
              <p>
                Start your free trial and let AccountPro bring clarity to your finances and spark to your business growth.
              </p>
              <motion.a
                href="/signup"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Try for Free
              </motion.a>
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
}
