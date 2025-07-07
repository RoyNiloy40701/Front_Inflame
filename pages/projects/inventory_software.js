import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock, IoMdArrowDropdown } from "react-icons/io";
import { FaCashRegister, FaChartLine, FaGift, FaStar, FaUsers, FaPlug, FaMobileAlt, FaBarcode, FaWarehouse, FaFileInvoice, FaHandshake, FaCalculator, FaCheckSquare, FaCloud } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function InflameInventory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("tracking");
  const [activeFaq, setActiveFaq] = useState(null);

  const slides = [
    { src: "/img/inventory.gif", alt: "Inflame Real-Time Tracking" },
    { src: "/img/inventory.jpg", alt: "Inflame Barcode Scanning Interface" },
    { src: "/img/inflame-analytics-dashboard.jpg", alt: "Inflame Analytics Dashboard" },
  ];

  const faqs = [
    {
      question: "What is Inflame Inventory Software?",
      answer: "Inflame is a powerful inventory management solution that helps businesses track stock, manage orders, and optimize inventory operations.",
    },
    {
      question: "Who can use this software?",
      answer: "It’s ideal for retailers, wholesalers, distributors, manufacturers, and multi-store businesses many more in Bangladesh.",
    },
    {
      question: "Is the software cloud-based?",
      answer: "Yes, Inflame Inventory Software is cloud-based, allowing access anytime, anywhere in the world.",
    },
    {
      question: "Does it support barcode scanning?",
      answer: "Absolutely! It supports barcode generation and scanning for faster and more accurate inventory control.",
    },
    {
      question: "Can it manage multiple warehouses?",
      answer: "Yes, the software supports multi-location and multi-warehouse inventory management.",
    },
    {
      question: "Is it integrated with accounting systems?",
      answer: "Yes, it optimally integrates with accounting modules and external any systems for better financial tracking for businesses.",
    },
    {
      question: "Does it offer reporting features?",
      answer: "Yes, it includes detailed reports on stock levels, sales, purchases, and more.",
    },
    {
      question: "Is the software customizable?",
      answer: "Absolutely, modules and features can be tailored to your business needs.",
    },
    {
      question: "What kind of support is available?",
      answer: "Inflame offers full customer support, including training, live assistance, and regular updates.",
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
      id: "tracking",
      title: "Real-Time Tracking",
      content: "Monitor inventory levels across all locations with live updates.",
    },
    {
      id: "barcode",
      title: "Barcode Scanning",
      content: "Streamline stock updates with fast, accurate barcode scanning.",
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      content: "Gain deep insights with detailed reports and sales forecasting.",
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
        <title>Best Inventory management software in bangladesh</title>
        <meta
          name="description"
          content="Track stock, manage warehouses, and optimize supply chains with the best inventory management software in Bangladesh 2025."
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
                Best Inventory Management Software <span>in Bangladesh 2025</span>
              </h1>
              <p className="text-content">
                Inflame empowers businesses with real-time inventory tracking, barcode scanning, multi-location support, and advanced analytics. Manage purchase and sales orders, suppliers, returns, and more with seamless integrations, making it the top inventory software in Bangladesh.
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
                src="/img/inventroy.png"
                alt="Inflame Dashboard"
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
            Best Inventory Software in Bangladesh
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
              <h2 className="h1">Features of Inflame</h2>
              <p className="text-content">
                Transform your inventory management with a comprehensive suite of tools designed for efficiency and scalability.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCashRegister />,
                  title: "Real-Time Inventory Tracking",
                  desc: "Monitor stock levels instantly across all locations.",
                },
                {
                  icon: <FaBarcode />,
                  title: "Barcode Scanning",
                  desc: "Update inventory quickly with integrated barcode support.",
                },
                {
                  icon: <FaGift />,
                  title: "Stock Level Alerts",
                  desc: "Receive automated alerts to prevent stockouts.",
                },
                {
                  icon: <FaFileInvoice />,
                  title: "Purchase Order Management",
                  desc: "Streamline procurement with efficient PO workflows.",
                },
                {
                  icon: <FaWarehouse />,
                  title: "Multi-Location Support",
                  desc: "Manage inventory across multiple warehouses seamlessly.",
                },
                {
                  icon: <FaHandshake />,
                  title: "Supplier & Vendor Management",
                  desc: "Track and manage supplier relationships effectively.",
                },
                {
                  icon: <FaCalculator />,
                  title: "Stock Valuation",
                  desc: "Calculate inventory value with accurate methods.",
                },
                {
                  icon: <FaCheckSquare />,
                  title: "Inventory Audits & Adjustments",
                  desc: "Conduct audits and adjust stock with ease.",
                },
                {
                  icon: <FaPlug />,
                  title: "Accounting & ERP Integration",
                  desc: "Sync with QuickBooks, SAP, and other systems.",
                },
                {
                  icon: <FaUsers />,
                  title: "User Role Management",
                  desc: "Control access with customizable user permissions.",
                },
                {
                  icon: <FaCloud />,
                  title: "Cloud-Based Access",
                  desc: "Access your inventory from anywhere, anytime.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Access",
                  desc: "Manage inventory on the go with our mobile app.",
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
              <h2 className="h1">Why Inflame Stands Out</h2>
              <p className="text-content">
                Optimize your operations with Inflame’s robust, feature-rich inventory solution built for businesses of all sizes.
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
                  src="/img/inventory.jpg"
                  alt="Inflame Benefits"
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
                    title: "Real-Time Tracking",
                    desc: "Monitor stock levels instantly across all locations.",
                  },
                  {
                    title: "Error Reduction",
                    desc: "Minimize stock misplacement and manual mistakes.",
                  },
                  {
                    title: "Multi-Location Management",
                    desc: "Handle inventory from different branches easily.",
                  },
                  {
                    title: "Optimize Orders",
                    desc: "Automate purchase and sales order processing.",
                  },
                  {
                    title: "Supplier & Return Handling",
                    desc: "Efficiently manage vendors and product returns.",
                  },
                  {
                    title: "Time Saving",
                    desc: "Automates tasks, saving hours of manual work.",
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
              <h2>Experience Inflame in Action</h2>
              <p className="text-content">
                Discover how Inflame’s real-time tracking, barcode scanning, and advanced analytics can transform your inventory management.
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
                      "Real-time inventory control with live updates",
                      "Accurate stock management with barcode scanning",
                      "Data-driven decisions with advanced analytics",
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

            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>Frequently Asked Questions</h4>
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
              <h2>Voices from Our Clients</h2>
              <p>Hear from businesses thriving with Inflame’s comprehensive inventory solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Ayesha Khan",
                  role: "Retail Manager",
                  quote: "Inflame’s barcode scanning and real-time tracking eliminated our stock discrepancies.",
                },
                {
                  name: "Rahim Hossain",
                  role: "E-commerce Owner",
                  quote: "The e-commerce integration and sales forecasting tools boosted our efficiency and sales.",
                },
                {
                  name: "Sofia Rahman",
                  role: "Supply Chain Manager",
                  quote: "Multi-location support and supplier management streamlined our operations across Bangladesh.",
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
              <h2>Ready to Transform Your Inventory?</h2>
              <p>
                Start your free trial and experience Inflame’s comprehensive inventory management solution tailored for your business.
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
