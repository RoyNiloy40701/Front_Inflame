
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaBullhorn, FaChartLine, FaAd, FaUsers, FaRocket, FaCogs, FaStar, FaDollarSign } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AIAutomation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("workflow");
  const [activeFaq, setActiveFaq] = useState(null); // State for FAQ dropdown

  const slides = [
    { src: "/img/aiautomation.gif", alt: "AutoMind Workflow Automation" },
    { src: "/img/ai-analytics.jpg", alt: "Predictive Analytics Dashboard" },
    { src: "/img/ai-chatbot.gif", alt: "Intelligent Chatbot Interface" },
  ];

  const faqs = [
    {
      question: "What is AI automation?",
      answer: "AI automation uses artificial intelligence tools to handle repetitive business tasks with minimal human input.",
    },
    {
      question: "Is it suitable for small businesses?",
      answer: "Yes! Our flexible AI tools are perfect for startups, SMEs, and growing enterprises.",
    },
    {
      question: "What can be automated?",
      answer: "Processes like customer support, lead capture, data entry, sales follow-up, and reporting.",
    },
    {
      question: "Is the system customizable?",
      answer: "Absolutely. We build custom automation workflows based on your specific needs.",
    },
    {
      question: "Do you integrate with CRMs or ERPs?",
      answer: "Yes, we offer full integration with tools like HubSpot, Zoho, Salesforce, and more.",
    },
    {
      question: "How secure is your AI system?",
      answer: "We use secure, cloud-based infrastructure with strict data privacy and backup.",
    },
    {
      question: "Will I get support and training?",
      answer: "Yes. We provide setup, staff training, documentation, and 24/7 customer support.",
    },
    {
      question: "Is it cost-effective?",
      answer: "Very! We offer competitive packages with high ROI for every type of business.",
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
      id: "workflow",
      title: "Workflow Automation",
      content: "Streamline operations with AI-driven process automation.",
    },
    {
      id: "analytics",
      title: "Predictive Analytics",
      content: "Make data-driven decisions with AI-powered insights.",
    },
    {
      id: "chatbot",
      title: "Intelligent Chatbots",
      content: "Enhance customer support with AI-driven chat solutions.",
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
      boxShadow: "0 0 20px rgba(2, 136, 209, 0.5), 0 0 40px rgba(2, 136, 209, 0.3)",
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
        <title> AI Automation Solutions</title>
        <meta
          name="description"
          content="Transform your business with AutoMind’s AI automation services, including workflow automation, predictive analytics, and intelligent chatbots."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="paid-marketing">
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
                Best AI Automation Agency <span>in Bangladesh</span>
              </h1>
              <p className="text-content">
                Inflame AI Automation is a leading AI automation agency in Bangladesh, offering intelligent automation solutions to simplify
                operations, reduce manual workload, and increase business efficiency with modern technology tailored for Bangladeshi businesses.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  {...glowEffect}
                >
                  Explore AI Tools
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
                src="/img/aiautomation1.png"
                alt="AutoMind AI Platform"
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
            Intelligent AI Automation Solutions
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
              <h2 className="h1">Key Features of Inflame AI Automation Services</h2>
              <p className="text-content">
                Empower your business with cutting-edge AI automation tools for efficiency and growth.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCogs />,
                  title: "Business Process Automation",
                  desc: "Automate repetitive workflows like data entry, approvals, invoicing, and document processing.",
                },
                {
                  icon: <FaAd />,
                  title: "AI Chatbot Integration",
                  desc: "Deploy smart chatbots on websites, Messenger, WhatsApp, and other platforms to handle customer queries 24/7.",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Marketing Automation",
                  desc: "Automate lead generation, email campaigns, customer segmentation, and social media scheduling.",
                },
                {
                  icon: <FaRocket />,
                  title: "Sales Funnel Automation",
                  desc: "Optimize your customer journey using AI workflows from lead capture to conversion.",
                },
                {
                  icon: <FaUsers />,
                  title: "CRM & ERP Integration",
                  desc: "Connect AI tools with your existing systems for real-time task automation and lead nurturing.",
                },
                {
                  icon: <FaChartLine />,
                  title: "AI-Based Analytics & Reporting",
                  desc: "Generate real-time performance reports and predictive insights for smarter decision-making.",
                },
                {
                  icon: <FaStar />,
                  title: "Voice AI & IVR Systems",
                  desc: "Automated customer service via AI-driven voice assistants and IVR phone systems.",
                },
                {
                  icon: <FaDollarSign />,
                  title: "E-commerce AI Solutions",
                  desc: "Automate product recommendations, order management, customer service, and review collection.",
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
              <h2 className="h1">Why Choose Inflame as Your AI Automation Partner?</h2>
              <p className="text-content">
                Boost efficiency, scale operations, and drive innovation with our AI automation platform.
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
                  src="/img/aiautomation1.png"
                  alt="AutoMind AI Benefits"
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
                    title: " Localized AI Solutions for Bangladeshi Businesses",
                    desc: "Automate tasks to save time and resources.",
                  },
                  {
                    title: "Scalable, Cost-Effective Automations",
                    desc: "Grow seamlessly with AI-driven solutions.",
                  },
                  {
                    title: "Seamless Integration with Your Current Systems",
                    desc: "Leverage predictive analytics for insights.",
                  },
                  {
                    title: " Experienced Developers & AI Specialists",
                    desc: "Deliver 24/7 customer service with chatbots.",
                  },
                  {
                    title: "24/7 Customer Support & Training",
                    desc: "Protect data with advanced AI safeguards.",
                  },
                  {
                    title: "Secure, Cloud-Based Systems",
                    desc: "Protect data with advanced AI safeguards.",
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
              <h2>Who Can Benefit From Inflame AI Automation?</h2>
              <p className="text-content">
                Discover our AI automation tools for workflows, analytics, and chatbots through an immersive demo.
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
                      "Ecommerce Businesses",
                      "Marketing Agencies",
                      "Manufacturing & Logistics Companies",
                      "Healthcare & Diagnostics",
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

            {/* Updated FAQ Section with Dropdown */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>FAQs Inflame AI Automation Services</h4>
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
              <h2>Voices from Our Clients</h2>
              <p>Hear from businesses thriving with AutoMind’s AI automation solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Emily Carter",
                  role: "Operations Manager",
                  quote: "AutoMind’s workflow automation saved us countless hours!",
                },
                {
                  name: "Rahul Sharma",
                  role: "Data Analyst",
                  quote: "Their predictive analytics transformed our decision-making process.",
                },
                {
                  name: "Lisa Nguyen",
                  role: "Customer Support Lead",
                  quote: "The AI chatbots improved our response time and customer satisfaction.",
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
              <h2>Ready to Automate Your Business?</h2>
              <p>
                Start your free trial and experience AutoMind’s AI automation solutions today.
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
