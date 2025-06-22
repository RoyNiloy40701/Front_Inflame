import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaMouse, FaHeadphones, FaClock, FaLaptop, FaUsers, FaRocket, FaCogs, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CyberPulseDistributor() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("razer");

  const slides = [
    { src: "/img/mouse.jpeg", alt: "Razer Gaming Peripherals" },
    { src: "/img/watch.jpeg", alt: "Benio Wearables" },
    { src: "/img/razer.jpg", alt: "Razer Laptops" },
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
      id: "razer",
      title: "Razer Gaming",
      content: "Distribute Razer’s high-performance gaming mice, keyboards, headsets, and laptops for gamers.",
    },
    {
      id: "benio",
      title: "Benio Lifestyle",
      content: "Supply Benio’s smart watches, wireless earbuds, and audio accessories for modern lifestyles.",
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
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)",
      rotate: 2,
      transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <Head>
        <title>Razer & Benio Electronics</title>
        <meta
          name="description"
          content="CyberPulse Distributors brings you Razer’s gaming peripherals and Benio’s lifestyle electronics, including mice, keyboards, headsets, laptops, smart watches, and earbuds."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="cyberpulse-distributor">


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
                Power Up with <span>CyberPulse Distributors</span>
              </h1>
              <p className="text-content">
                Your premier distributor for Razer’s cutting-edge gaming peripherals and Benio’s stylish lifestyle electronics.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  {...glowEffect}
                >
                  Explore Products
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  {...glowEffect}
                >
                  View Catalog
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
                src="/img/razer.jpg"
                alt="Razer & Benio Products"
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
            Razer Gaming & Benio Lifestyle Electronics
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Request a Quote</span>
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
              <h2 className="h1">Our Product Categories</h2>
              <p className="text-content">
                Distribute Razer’s gaming gear and Benio’s lifestyle electronics to elevate your inventory.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaMouse />,
                  title: "Razer Gaming Mice",
                  desc: "Precision mice like the DeathAdder for competitive gaming.",
                },
                {
                  icon: <FaHeadphones />,
                  title: "Razer Headsets",
                  desc: "Immersive audio with Kraken and BlackShark series.",
                },
                {
                  icon: <FaLaptop />,
                  title: "Razer Laptops",
                  desc: "High-performance Blade laptops for gaming and work.",
                },
                {
                  icon: <FaClock />,
                  title: "Benio Smart Watches",
                  desc: "Stylish watches with fitness and smart features.",
                },
                {
                  icon: <FaHeadphones />,
                  title: "Benio Wireless Earbuds",
                  desc: "Premium audio with noise-cancellation technology.",
                },
                {
                  icon: <FaUsers />,
                  title: "Retail Partnerships",
                  desc: "Seamless supply for retailers and e-commerce.",
                },
                {
                  icon: <FaRocket />,
                  title: "Fast Logistics",
                  desc: "Swift delivery to keep your stock ready.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Authentic Products",
                  desc: "Guaranteed genuine Razer and Benio products.",
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
              <h2 className="h1">Why Choose CyberPulse</h2>
              <p className="text-content">
                Partner with us to distribute Razer and Benio’s premium electronics with unmatched reliability.
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
                  src="/img/razer.jpg"
                  alt="Razer & Benio Benefits"
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
                    title: "Premium Brands",
                    desc: "Access Razer and Benio’s top-tier products.",
                  },
                  {
                    title: "Reliable Supply",
                    desc: "Consistent stock for uninterrupted sales.",
                  },
                  {
                    title: "Competitive Margins",
                    desc: "Maximize profits with our pricing.",
                  },
                  {
                    title: "Global Reach",
                    desc: "Distribute to markets worldwide.",
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Authentic products with full warranties.",
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
              <h2>Explore Our Catalog</h2>
              <p className="text-content">
                Discover Razer’s gaming gear and Benio’s lifestyle electronics through our interactive showcase.
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
                      "High-performance gaming gear",
                      "Stylish lifestyle electronics",
                      "Authentic branded products",
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

              <Link href="/request-catalog" legacyBehavior>
                <motion.a
                  className="btn btn-primary demo-request-btn"
                  onClick={() => console.log("Request Catalog clicked")}
                  {...glowEffect}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  Request Full Catalog
                </motion.a>
              </Link>
            </motion.div>

            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <h5>Are all products authentic?</h5>
                <p>
                  Yes, we distribute only genuine Razer and Benio products with full warranties.
                </p>
              </div>
              <div className="faq-item">
                <h5>Do you support international distribution?</h5>
                <p>
                  Absolutely, we offer global logistics for seamless delivery.
                </p>
              </div>
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
              <h2>Voices from Our Partners</h2>
              <p>Hear from retailers thriving with Razer and Benio products.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Vikram Singh",
                  role: "Retail Manager, GameHaven",
                  quote: "Razer’s mice and keyboards are top sellers, thanks to CyberPulse’s reliable supply!",
                },
                {
                  name: "Anita Patel",
                  role: "E-commerce Owner",
                  quote: "Benio’s earbuds and watches fly off our shelves with CyberPulse’s fast delivery.",
                },
                {
                  name: "Ethan Wong",
                  role: "Distributor Partner",
                  quote: "CyberPulse ensures authentic products and great margins for our business.",
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
              <h2>Distribution Plans</h2>
              <p>Flexible plans to distribute Razer and Benio products.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Core",
                  price: "Contact Us",
                  features: [
                    "Up to 100 Units/Month",
                    "Razer Peripherals",
                    "Benio Earbuds",
                    "Standard Support",
                  ],
                  link: "/contact",
                  cta: "Get Quote",
                },
                {
                  name: "Elite",
                  price: "Contact Us",
                  features: [
                    "Up to 500 Units/Month",
                    "Full Razer & Benio Range",
                    "Priority Support",
                    "Bulk Discounts",
                    "Global Logistics",
                  ],
                  link: "/contact",
                  cta: "Get Quote",
                  popular: true,
                },
                {
                  name: "Ultimate",
                  price: "Custom",
                  features: [
                    "Unlimited Units",
                    "All Elite Features",
                    "Custom Logistics",
                    "Dedicated Manager",
                    "Marketing Support",
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
                >
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}</div>
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
                      {...glowEffect}
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
        <section className="cta section-padding">
          <div className="container">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Ready to Elevate Your Inventory?</h2>
              <p>
                Partner with CyberPulse Distributors to supply Razer and Benio’s premium electronics.
              </p>
              <motion.a
                href="/signup"
                className="btn cta-btn"
                {...glowEffect}
              >
                Become a Partner
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}