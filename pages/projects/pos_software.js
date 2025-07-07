import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock, IoMdArrowDropdown } from "react-icons/io";
import { FaCashRegister, FaChartLine, FaGift, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaPlug, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

export default function POSSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("threeMonths"); // Default to 3 months

  const slides = [
    { src: "/img/pos.jpg", alt: "Inflame POS Dashboard" },
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
      title: "Sleek Dashboard",
      content:
        "Navigate sales, inventory, and customer data with an intuitive interface designed for speed and ease. Real-time updates keep your team in sync.",
    },
    {
      id: "transactions",
      title: "Fast Transactions",
      content:
        "Process payments in seconds with a streamlined checkout process. Supports multiple payment methods, including mobile and contactless options.",
    },
    {
      id: "analytics",
      title: "Powerful Analytics",
      content:
        "Gain actionable insights with vibrant dashboards. Track sales trends, inventory levels, and customer behavior to make data-driven decisions.",
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
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pricing plans with different durations converted to threeMonths, sixMonths, yearly structure
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Best for Small Shops",
      price: {
        threeMonths: 198, // Approx. 3 * 198 / 2 (50% discount assumption)
        sixMonths: 1099,
        yearly: 2199,
      },
      period: "",
      // description: "Perfect for single location businesses",
      features: [
        "Product Upload (400)",
        "Purchase Management",
        "Sales Management",
        "Stock & Sales Management",
        "User- 1",
        "Admin Panel",
        "Basic Reports",
        "Online Training x 2",
        "Customer Support",
      ],
      link: "/pricing/basic",
      cta: "Choose Basic",
      popular: false,
    },
    {
      name: "Standard Plan",
      subtitle: "For Growing Businesses",
      price: {
        threeMonths: 389, // Approx. 3 * 389 / 2 (50% discount assumption)
        sixMonths: 2299,
        yearly: 3999,
      },
      period: "",
      // description: "Most popular for expanding businesses",
      features: [
        "Product Upload (1000)",
        "Purchase Management",
        "Sales Management",
        "Expenses Management",
        "Quatation",
        "Product Variants",
        "Monthly Data Backup",
        "Stock & Sales Management",
        "User- 5",
        "Admin Panel",
        "Basic Reports",
        "Online Training x 5",
        "Customer Support",
        "Email & SMS Notification",
        "Priority Support",
      ],
      link: "/pricing/standard",
      cta: "Choose Standard",
      popular: true,
    },
    {
      name: "Premium Plan",
      subtitle: "Large-Scale Solution",
      price: {
        threeMonths: 899, // Approx. 3 * 899 / 2 (50% discount assumption)
        sixMonths: 5099,
        yearly: 10099,
      },
      period: "",
      // description: "For large scale operations",
      features: [
        "Product Upload (Unlimited)",
        "Purchase Management",
        "Sales Management",
        "Expenses Management",
        "Quatation",
        "Product Variants",
        "Daily Data Backup",
        "Stock & Sales Management",
        "User- 5",
        "Admin Panel",
        "All Reports",
        "Online Training (Unlimited) & Offline Training x 2",
        "Customer Support",
        "Email & SMS Notification",
        "Priority Support",
        "Activity Logs",
        "API Access & Integration",
        "Dedicated Support Team",
      ],
      link: "/pricing/premium",
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Best POS Software in Bangladesh | Fast & Easy Billing</title>
        <meta
          name="description"
          content="Barcode scanning, multi-branch, and more, optimize your retail business with the best POS software in Bangladesh."
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
                Best POS Software <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame POS Software is the perfect solution for retail and wholesale businesses in Bangladesh. It offers real-time sales tracking, inventory control, barcode scanning, and multi-branch management to simplify and speed up your entire sales process.
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
                src="/img/pos1.gif"
                alt="Inflame POS Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
              />
            </motion.div>
          </div>
        </section>

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
              <h2 className="h1">Key Features of Inflame POS Software</h2>
              <p className="text-content">
                Empower your store with tools crafted for speed, simplicity, and
                unforgettable customer experiences.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCashRegister />,
                  title: "Fast Billing & Sales Processing",
                  desc: "Quickly process sales, apply discounts, and accept multiple payment methods (cash, card, mobile wallet).",
                },
                {
                  icon: <FaChartLine />,
                  title: "Real-Time Inventory Tracking",
                  desc: "Keep your inventory updated with each sale, return, or stock adjustment.",
                },
                {
                  icon: <FaUsers />,
                  title: "Staff Management",
                  desc: "Schedule shifts and track performance with ease.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Payments",
                  desc: "Accept payments anywhere with secure mobile integration.",
                },
                {
                  icon: <FaGift />,
                  title: "Customer Management System",
                  desc: "Save customer data, track purchase history, and offer loyalty points or discounts.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Payments",
                  desc: "Safeguard every transaction with top-tier encryption.",
                },
                {
                  icon: <FaPlug />,
                  title: "Seamless Integrations",
                  desc: "Sync with e-commerce, accounting, and marketing tools.",
                },
                {
                  icon: <FaStar />,
                  title: "Customer Engagement",
                  desc: "Build lasting relationships with targeted promotions.",
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
              <h2 className="h1">Why Inflame POS Shines Bright</h2>
              <p className="text-content">
                Unlock the power to transform your store into a customer magnet
                and a sales powerhouse.
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
                  src="/img/pos1.gif"
                  alt="Inflame POS Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Speed Up Billing Process",
                    desc: "Quickly process sales with a streamlined checkout system.",
                  },
                  {
                    title: "Improve Customer Experience",
                    desc: "Create memorable experiences with personalized service and loyalty programs.",
                  },
                  {
                    title: "Track Sales & Inventory in Real-Time",
                    desc: "Stay updated with live sales and inventory data.",
                  },
                  {
                    title: "Manage Multiple Stores Easily",
                    desc: "Centralized dashboard for multi-branch management.",
                  },
                  {
                    title: "Get Smart Business Insights",
                    desc: "Leverage analytics to make data-driven decisions.",
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
              <h2>Experience Inflame POS in Action</h2>
              <p className="text-content">
                Explore the power of Inflame POS Software’s system through an interactive demo. See how our intuitive interface, fast transactions, and robust analytics can transform your retail operations.
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
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
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
                  <div className="demo-tabs">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
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
                      "Streamlined operations with a user-friendly interface",
                      "Real-time data to optimize business decisions",
                      "Seamless integration with existing tools",
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
              <h4>FAQs – Inflame POS Software</h4>
              {[
                {
                  question: "What is Inflame POS Software?",
                  answer: "It’s a powerful point-of-sale (POS) solution for managing billing, sales, inventory, and customer data in one easy system.",
                },
                {
                  question: "Who can use this POS software?",
                  answer: "Retail shops, restaurants, fashion stores, electronics stores, and multi-branch businesses.",
                },
                {
                  question: "Does it work offline?",
                  answer: "Yes! It works offline and syncs data automatically when you're back online.",
                },
                {
                  question: "Is it suitable for multiple branches?",
                  answer: "Yes, you can manage multiple stores or branches from one admin panel.",
                },
                {
                  question: "Can I track real-time inventory?",
                  answer: "Absolutely! Inventory updates live with every sale, return, or stock movement.",
                },
                {
                  question: "Is it user-friendly?",
                  answer: "Yes, our intuitive dashboard is easy to use for any cashier or store manager.",
                },
                {
                  question: "Can I integrate barcode scanners?",
                  answer: "Yes, Inflame POS fully supports barcode readers and printers.",
                },
                {
                  question: "Does it generate profit reports?",
                  answer: "Yes, detailed reports help track profits, returns, and sales growth.",
                },
                {
                  question: "Is it cloud-based?",
                  answer: "Yes, you can access the system from any device, anytime.",
                },
                {
                  question: "Does it support different payment methods?",
                  answer: "Yes, including cash, cards, mobile wallets, and digital payment gateways.",
                },
                {
                  question: "Can it manage customer data?",
                  answer: "Yes, it stores customer info, purchase history, and loyalty data.",
                },
                {
                  question: "Do you offer training and support?",
                  answer: "Of course! We offer full training, live support, and 24/7 assistance physically and virtually.",
                },
              ].map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <IoMdArrowDropdown
                      className={`faq-icon ${openFaqIndex === index ? "open" : ""}`}
                    />
                    {faq.question}
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
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
                </div>
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
              <h2>Voices from Retail Champions with Inflame POS</h2>
              <p>
                Hear from store owners thriving with Inflame POS Software’s vibrant solutions.
              </p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Lila Carter",
                  role: "Boutique Owner",
                  quote:
                    "Inflame POS turned our checkout process into a breeze. Customers love the speed and our sales are soaring!",
                },
                {
                  name: "Jamal Khan",
                  role: "Café Manager",
                  quote:
                    "The loyalty program in Inflame POS keeps our regulars coming back. It’s like the software knows our customers better than we do!",
                },
                {
                  name: "Sophie Nguyen",
                  role: "Retail Chain Director",
                  quote:
                    "Managing multiple stores is effortless now. Inflame POS’s insights help us stay ahead of the game.",
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
        <section className="pricing section-padding" id="pricing">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Choose Your Retail Plan</h2>
              <p>Flexible pricing to fuel your store’s success.</p>
            </motion.div>
            <div className="pricing-controls">
              <button
                className={`pricing-button ${selectedDuration === "threeMonths" ? "active" : ""}`}
                onClick={() => setSelectedDuration("threeMonths")}
              >
                Monthly
              </button>
              <button
                className={`pricing-button ${selectedDuration === "sixMonths" ? "active" : ""}`}
                onClick={() => setSelectedDuration("sixMonths")}
              >
                6 Months
              </button>
              <button
                className={`pricing-button ${selectedDuration === "yearly" ? "active" : ""}`}
                onClick={() => setSelectedDuration("yearly")}
              >
                Yearly
              </button>
            </div>
            <div className="pricing-grid">
              {plans.map((plan, index) => (
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
                  {plan.subtitle && <p className="subtitle">{plan.subtitle}</p>}
                  <div className="price">
                    {plan.price[selectedDuration]}{plan.period || ""}
                    {selectedDuration === "threeMonths" && "(Month )"}
                    {selectedDuration === "sixMonths" && " (Six month pack)"}
                    {selectedDuration === "yearly" && " (yearly pack)"}
                  </div>
                  {plan.description && <p className="description">{plan.description}</p>}
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
              <h2>Ready to Redefine Retail with Inflame POS?</h2>
              <p>
                Start your free trial and let Inflame POS Software bring joy to every transaction and spark to your business growth.
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
