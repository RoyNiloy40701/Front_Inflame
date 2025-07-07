
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock, IoMdArrowDropdown } from "react-icons/io";
import { FaLeaf, FaGlobe, FaSeedling, FaUsers, FaRocket, FaCogs, FaStar, FaRecycle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SEOServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("keyword");
  const [activeFaq, setActiveFaq] = useState(null); // State for FAQ dropdown

  const slides = [
    { src: "/img/seo1.gif", alt: "RankBoost Keyword Tools" },
    // { src: "/img/seo-links.jpg", alt: "Link Building Dashboard" },
    // { src: "/img/seo-analytics.gif", alt: "SEO Analytics Interface" },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer SEO, Google Ads, Facebook/Instagram Ads, Social Media Management, YouTube Marketing, Content Writing, Email Marketing, and more.",
    },
    {
      question: "Is it suitable for small businesses?",
      answer: "Yes, we have flexible plans tailored to startups and growing companies.",
    },
    {
      question: "How soon can I see results?",
      answer: "SEO usually takes 3–6 months; paid ads generate leads within days.",
    },
    {
      question: "Do you manage ad campaigns fully?",
      answer: "Yes, we create, manage, optimize, and scale ad campaigns across all platforms.",
    },
    {
      question: "Do you offer custom strategies?",
      answer: "Absolutely! Every client gets a personalized marketing plan based on goals and industry.",
    },
    {
      question: "Is reporting included?",
      answer: "Yes, we provide weekly/monthly reports and insights via live dashboards.",
    },
    {
      question: "Do you offer e-commerce marketing?",
      answer: "Yes! We specialize in growing online stores via ads, SEO, and CRO.",
    },
    {
      question: "Is content creation included?",
      answer: "Yes, we write ad copy, social content, blogs, emails, and much more.",
    },
    {
      question: "How can I get started?",
      answer: "Contact us today for a free consultation and strategy session!",
    },
    {
      question: "Do you provide training or support?",
      answer: "Yes! We offer onboarding, live support, and strategy updates as your business grows.",
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
      id: "keyword",
      title: "Keyword Optimization",
      content: "Target high-value keywords to boost your search rankings.",
    },
    {
      id: "link",
      title: "Link Building",
      content: "Build authoritative backlinks to enhance your domain authority.",
    },
    {
      id: "technical",
      title: "Technical SEO",
      content: "Optimize your site’s performance and crawlability.",
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
      boxShadow: "0 0 20px rgba(46, 125, 50, 0.5), 0 0 40px rgba(46, 125, 50, 0.3)",
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
        <title>Best digital marketing agency in Bangladesh</title>
        <meta
          name="description"
          desc="Rank higher and convert better with the best digital marketing agency in Bangladesh, specializing in SEO, ads, and Social media marketing."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Lora:wght@400;500&display=swap"
          rel="stylesheet"
          crossOrigin="stylesheet"
        />
      </Head>

      <div className="office">
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
                Best Digital Marketing Agency <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame Digital Marketing is one of the top-rated digital marketing agencies in Bangladesh, offering complete solutions to boost your
                business online. From SEO to paid ads, social media to content creation, we build expertise-driven strategies that deliver real results.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  {...glowEffect}
                >
                  Discover SEO Services
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
              <img
                src="/img/1690.jpg"
                alt="RankBoost SEO Services"
                width={1200}
                height={650}
                style={{ objectFit: "cover" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        {/* <div className="headers">
          <span className="banner-text">
            Best SEO Solutions for Sustainable Growth
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
              <h2 className="h1">Digital Marketing Services.</h2>
              <p className="text-content">
                Equip your website with powerful SEO tools to drive traffic and visibility.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaGlobe />,
                  title: "Search Engine Optimization (SEO)",
                  desc: "Rank your website on Google’s first page with proven, white-hat SEO strategies.",
                },
                {
                  icon: <FaUsers />,
                  title: "Facebook & Instagram",
                  desc: "Drive traffic and sales with targeted Facebook and Instagram ads that convert.",
                },
                {
                  icon: <FaRocket />,
                  title: "Google Ads",
                  desc: "Instant visibility on Google search and display networks with expert PPC campaigns.",
                },
                {
                  icon: <FaStar />,
                  title: "YouTube Marketing",
                  desc: "Engage and convert your audience through optimized YouTube video ads and SEO.",
                },
                {
                  icon: <FaSeedling />,
                  title: "Social Media Marketing & Management",
                  desc: "Build your brand presence on Facebook, Instagram, LinkedIn, and more.",
                },
                {
                  icon: <FaCogs />,
                  title: "Email Marketing & Automation",
                  desc: "Boost retention and sales with segmented, automated email campaigns.",
                },
                {
                  icon: <FaRecycle />,
                  title: "E-commerce Marketing",
                  desc: "Scale your online store with product ads, retargeting, and conversion optimization.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Conversion Rate Optimization (CRO)",
                  desc: "Increase leads and sales by improving every step of your customer journey.",
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
              <h2 className="h1">Why Choose Inflame Digital Marketing Services?</h2>
              <p className="text-content">
                Drive sustainable traffic and rankings with our expert SEO solutions.
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
                <img
                  src="/img/1690.jpg"
                  alt="RankBoost SEO Benefits"
                  width={1000}
                  height={550}
                  style={{ objectFit: "cover" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: " Proven Results with 100+ Clients",
                    desc: "Achieve top search positions with optimized strategies.",
                  },
                  {
                    title: "ROI-Focused Campaigns",
                    desc: "Increase organic visitors to your website.",
                  },
                  {
                    title: "Certified Digital Marketing Experts",
                    desc: "Build trust with quality backlinks and content.",
                  },
                  {
                    title: "Transparent Reporting & Live Dashboards",
                    desc: "Monitor SEO performance with detailed analytics.",
                  },
                  {
                    title: "Custom Strategies for Every Business",
                    desc: "Use white-hat techniques for long-term success.",
                  },
                  {
                    title: "24/7 Client Support",
                    desc: "Use white-hat techniques for long-term success.",
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
              <h2>Benefits of Working with the Best Digital Marketing Agency in Bangladesh</h2>
              <p className="text-content">
                Explore our SEO tools for keyword optimization, link building, and technical SEO through an immersive demo.
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
                      <img
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
                      " Higher Lead Conversion Rates",
                      " Professional Brand Image",
                      "Real-Time Reporting & Insights",
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

              <Link href="/request-demo">
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

            {/* Updated FAQ Section with Dropdown Icon */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>FAQs – Inflame Digital Marketing Agency</h4>
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
              <p>Hear from businesses thriving with RankBoost’s SEO services.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Laura Smith",
                  role: "E-commerce Owner",
                  quote: "RankBoost’s keyword tools tripled our organic traffic in six months!",
                },
                {
                  name: "James Lee",
                  role: "Marketing Director",
                  quote: "Their link-building strategies boosted our domain authority significantly.",
                },
                {
                  name: "Sofia Patel",
                  role: "Blogger",
                  quote: "Technical SEO from RankBoost made my site faster and more visible.",
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
              <h2>Ready to Rank Higher?</h2>
              <p>
                Start your free SEO audit and see how RankBoost can elevate your search visibility.
              </p>
              <motion.a
                href="/contact"
                className="btn cta-btn"
                {...glowEffect}
              >
                Get Free Audit
              </motion.a>
            </motion.div>
          </div>
        </section> */}
      </div>

      {/* CSS for FAQ Dropdown */}
     
    </>
  );
}
