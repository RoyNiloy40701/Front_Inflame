
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { FaTicketAlt, FaUsers, FaHeadset, FaClock, FaTag, FaComment, FaChartLine, FaExclamationTriangle, FaUserShield, FaCloud, FaPlug, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function InflameTicketing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("ticket");
  const [activeFaq, setActiveFaq] = useState(null);

  const slides = [
    { src: "/img/tick.gif", alt: "Inflame Ticketing System" },
  ];

  const faqs = [
    {
      question: "✅ What is Inflame Ticketing System Software?",
      answer: "It’s a centralized platform to manage support queries, assign tasks, track status, and improve issue resolution.",
    },
    {
      question: "✅ Who can use this software?",
      answer: "Ideal for IT companies, call centers, corporate support teams, agencies, and e-commerce businesses in Bangladesh.",
    },
    {
      question: "✅ Is it cloud-based?",
      answer: "Yes, fully cloud-based and accessible 24/7 from any device.",
    },
    {
      question: "✅ Can I assign tickets to specific agents?",
      answer: "Yes, you can manually or automatically assign tickets based on departments, workload, or skills.",
    },
    {
      question: "✅ Does it support multi-channel ticketing?",
      answer: "Yes! It handles email, web forms, chat, and phone ticket requests in one dashboard.",
    },
    {
      question: "✅ Can I track SLA and escalation?",
      answer: "Absolutely! Monitor response time, resolution deadlines, and auto-escalate when needed.",
    },
    {
      question: "✅ Is there a client support portal?",
      answer: "Yes, clients can raise and track tickets from their own dashboard.",
    },
    {
      question: "✅ Does it track team performance?",
      answer: "Yes, get full analytics on response time, agent productivity, and ticket volume.",
    },
    {
      question: "✅ Can I customize categories and tags?",
      answer: "Yes, organize tickets with customizable fields, tags, and categories.",
    },
    {
      question: "✅ Is there mobile access?",
      answer: "Yes, agents can view and manage tickets on the go via mobile or tablet.",
    },
    {
      question: "✅ Can I integrate it with my website or CRM?",
      answer: "Yes, it's built to integrate with existing CRM, ERP, or any third-party tools.",
    },
    {
      question: "✅ What kind of support do you offer?",
      answer: "We offer onboarding training, live support, and regular updates backed by a dedicated team.",
    },
  ];

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const tabs = [
    {
      id: "ticket",
      title: "Ticket Management",
      content: "Create, assign, and track tickets with real-time status updates.",
    },
    {
      id: "multichannel",
      title: "Multi-Channel Support",
      content: "Manage tickets from email, chat, website, or phone in one platform.",
    },
    {
      id: "analytics",
      title: "Performance Dashboard",
      content: "Analyze agent performance and ticket metrics with visual reports.",
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
        <title>Best Ticketing software in bangladesh</title>
        <meta
          name="description"
          content="Simplify ticket sales and customer service with the best ticketing software in Bangladesh, real-time updates and secure access"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="pos-software">
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h1">
                Best Ticketing System Software <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame Ticketing System Software offers a smart and organized solution to manage customer service, internal IT support, or issue tracking. Whether you're a small business or a large enterprise, it’s the best ticketing system software in Bangladesh for managing queries, assigning tasks, and tracking resolution, efficiently and professionally.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(244, 63, 94, 0.3)" }}
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
                src="/img/ticketing.png"
                alt="Inflame Ticketing Dashboard"
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
            Premier Ticketing Software Solutions in Bangladesh
          </span>
          <Link href="/contact" legacyBehavior>
            <span className="btn btn-secondary">Book for Demo</span>
          </Link>
        </div> */}

        <section className="features section-padding" id="features">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Key Features of Inflame Ticketing Software</h2>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaTicketAlt />,
                  title: "Ticket Management",
                  desc: "Create, assign, and prioritize tickets with real-time tracking and status updates.",
                },
                {
                  icon: <FaUsers />,
                  title: "Department & Agent Assignment",
                  desc: "Route tickets to relevant departments or agents automatically for faster resolution.",
                },
                {
                  icon: <FaHeadset />,
                  title: "Multi-Channel Support",
                  desc: "Receive and manage support tickets from email, chat, website, or phone—centralized in one platform.",
                },
                {
                  icon: <FaClock />,
                  title: "SLA (Service Level Agreement) Tracking",
                  desc: "Monitor ticket resolution timelines and ensure compliance with SLA policies.",
                },
                {
                  icon: <FaTag />,
                  title: "Custom Tags & Categories",
                  desc: "Organize tickets using custom tags and categories for easier tracking.",
                },
                {
                  icon: <FaComment />,
                  title: "Customer Communication Portal",
                  desc: "Let customers raise tickets, check status, and communicate directly from the support portal.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Performance Dashboard & Analytics",
                  desc: "Measure agent performance, resolution time, ticket volume, and more with visual reports.",
                },
                {
                  icon: <FaExclamationTriangle />,
                  title: "Priority & Escalation Rules",
                  desc: "Automatically escalate critical issues or overdue tickets based on priority.",
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
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                >
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            </div>
        </section>

        <section className="benefits section-padding" id="benefits">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Why You Need the Best Ticketing System Software?</h2>
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
                  src="/img/ticket.jpg"
                  alt="Ticketing Benefits"
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
                    title: "Centralized support management",
                    desc: "Streamline all support activities in one platform.",
                  },
                  {
                    title: "Faster response and resolution",
                    desc: "Quickly address customer queries to boost satisfaction.",
                  },
                  {
                    title: "Improved customer journey",
                    desc: "Enhance the support experience with seamless communication.",
                  },
                  {
                    title: "Organized task delegation",
                    desc: "Assign tasks efficiently to the right teams or agents.",
                  },
                  {
                    title: "Real-time performance tracking",
                    desc: "Monitor team performance with live analytics.",
                  },
                  {
                    title: "Better communication with clients",
                    desc: "Maintain clear and professional client interactions.",
                  },
                  {
                    title: "Flexible for all business types",
                    desc: "Adaptable to small businesses and large enterprises alike.",
                  },
                  {
                    title: "Reduces manual work and hassle",
                    desc: "Automate processes to save time and reduce errors.",
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

        <section className="demo-section section-padding" id="demo">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Why Choose Ticketing Software</h2>
              <p className="text-content">
                See Inflame’s ticketing software in action. Experience how ticket management, multi-channel support, and performance analytics enhance your customer service.
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
                      "Efficient ticket management with real-time updates",
                      "Unified support across email, chat, and web",
                      "Actionable insights with performance analytics",
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
              <h4>FAQs Inflame Ticketing System Software</h4>
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
                      <h5>{faq.question.replace("✅", "")}</h5>
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

        <section className="testimonials section-padding" id="testimonials">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Voices from Support Leaders</h2>
              <p>Hear from businesses thriving with Inflame’s ticketing solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Ayesha Khan",
                  role: "Support Manager",
                  quote: "Inflame’s multi-channel support streamlined our customer service process.",
                },
                {
                  name: "Rahim Hossain",
                  role: "IT Manager",
                  quote: "The performance dashboard helped us improve response times significantly.",
                },
                {
                  name: "Sofia Rahman",
                  role: "Customer Service Lead",
                  quote: "Ticket management and SLA tracking made our support team more efficient.",
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
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
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

        {/* <section className="pricing section-padding" id="pricing">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Choose Your Inflame Plan</h2>
              <p>Flexible pricing to suit your ticketing needs.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  features: ["Ticket Management", "Multi-Channel Support", "SLA Tracking", "Email Support"],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$99",
                  features: [
                    "All Starter Features",
                    "Department & Agent Assignment",
                    "Performance Dashboard",
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
                    "All Growth Features",
                    "Custom Tags & Categories",
                    "Customer Communication Portal",
                    "Priority & Escalation Rules",
                    "CRM Integration",
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
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 20px rgba(0,0,0,0.15)" }}
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

       
      </div>
    </>
  );
}
