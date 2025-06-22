
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaBriefcase, FaUsers, FaRocket, FaBuilding } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Careers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("culture");

  const slides = [
    { src: "/img/img2.gif", alt: "Team Collaboration" },
    { src: "/img/careers_slide2.jpg", alt: "Innovative Workspace" },
    { src: "/img/careers_slide3.jpg", alt: "Career Growth" },
  ];

  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      description: "Build responsive and interactive web interfaces using React and Next.js.",
      icon: <FaBriefcase />,
    },
    {
      id: "2",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Design intuitive user experiences for web and mobile applications.",
      icon: <FaBriefcase />,
    },
    {
      id: "3",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      description: "Manage cloud infrastructure and CI/CD pipelines for scalable applications.",
      icon: <FaBriefcase />,
    },
    {
      id: "4",
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-Time",
      description: "Develop robust server-side logic and APIs using Node.js and Express.",
      icon: <FaBriefcase />,
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
      id: "culture",
      title: "Our Culture",
      content: "Join a collaborative environment where creativity and innovation thrive.",
    },
    {
      id: "growth",
      title: "Career Growth",
      content: "Access mentorship and opportunities to advance your skills and career.",
    },
    {
      id: "benefits",
      title: "Benefits",
      content: "Enjoy competitive salaries, health benefits, and flexible work options.",
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

  return (
    <>
      <Head>
        <title>Careers - Inflame Solutions</title>
        <meta
          name="description"
          content="Join Inflame Solutions' innovative team and build the future with cutting-edge web solutions. Explore open positions and apply today."
        />
        <meta
          name="keywords"
          content="careers, jobs, web development, Inflame Solutions, employment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="careers">
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
                Join Our <span>Innovative Team</span>
              </h1>
              <p className="p">
                Build the future of web solutions at Inflame Solutions. Explore exciting career opportunities today.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#jobs"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Positions
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
                  Explore Culture
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
                src="/img/careers_hero.svg"
                alt="Careers Illustration"
                width={800}
                height={400}
                style={{ objectFit: "contain" }}
                className="hero-img"
              />
            </motion.div>
          </div>
        </section>
        <div className="headers">
          <span className="banner-text">
            Leading Web Development Careers in Bangladesh
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Apply Now</span>
          </Link>
        </div>

        {/* Open Positions Section */}
        <section className="features section-padding" id="features">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Open Positions</h2>
              <p className="p">
                Discover your next career move with our exciting job opportunities.
              </p>
            </motion.div>
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "1",
                  icon: <FaBriefcase />,
                  title: "Frontend Developer",
                  desc: "Build responsive and interactive web interfaces using React and Next.js.",
                  department: "Engineering",
                  location: "Dhaka, Bangladesh",
                  type: "Full-Time",
                },
                {
                  id: "2",
                  icon: <FaBriefcase />,
                  title: "UI/UX Designer",
                  desc: "Design intuitive user experiences for web and mobile applications.",
                  department: "Design",
                  location: "Remote",
                  type: "Contract",
                },
                {
                  id: "3",
                  icon: <FaBriefcase />,
                  title: "DevOps Engineer",
                  desc: "Manage cloud infrastructure and CI/CD pipelines for scalable applications.",
                  department: "Engineering",
                  location: "Dhaka, Bangladesh",
                  type: "Full-Time",
                },
                {
                  id: "4",
                  icon: <FaBriefcase />,
                  title: "Backend Developer",
                  desc: "Develop robust server-side logic and APIs using Node.js and Express.",
                  department: "Engineering",
                  location: "Remote",
                  type: "Full-Time",
                },
              ].map((job, index) => (
                <motion.div
                  key={job.id}
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
                  <div className="icon-wrapper text-blue-600 dark:text-blue-400 text-4xl mb-4">{job.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{job.desc}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{job.department} | {job.location} | {job.type}</p>
                  <Link href={`//${job.id}`}>
                    <motion.a
                      className="btn btn-primary inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply
                    </motion.a>
                  </Link>
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
              <h2 className="h1">Why Join Inflame Solutions?</h2>
              <p className="p">
                We offer a workplace that fosters growth, collaboration, and innovation for your career.
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
                  src="/img/img1.gif"
                  alt="Career Benefits"
                  width={600}
                  height={400}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Grow Your Career",
                    desc: "Access mentorship and training to advance your skills.",
                  },
                  {
                    title: "Collaborative Culture",
                    desc: "Work with a supportive team that values your ideas.",
                  },
                  {
                    title: "Flexible Work",
                    desc: "Enjoy remote and hybrid work options for balance.",
                  },
                  {
                    title: "Competitive Benefits",
                    desc: "Receive health insurance, paid leave, and more.",
                  },
                  {
                    title: "Innovative Projects",
                    desc: "Work on cutting-edge web solutions that make an impact.",
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
              <h2 className="h1">Experience Our Workplace</h2>
              <p className="p">
                Discover how our collaborative culture and growth opportunities can shape your career.
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
                      "Inclusive and innovative team culture",
                      "Mentorship programs for career advancement",
                      "Competitive benefits and flexible schedules",
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

              {/* Floating Apply Button */}
              <Link href="/contact">
                <motion.a
                  className="btn btn-primary demo-request-btn mt-8 inline-block"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Apply Today
                </motion.a>
              </Link>
            </motion.div>

            {/* FAQ Snippet */}
            <motion.div
              className="demo-faq mt-12"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Frequently Asked Questions</h4>
              <div className="space-y-6">
                <div className="faq-item">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white">What is the hiring process like?</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our process includes application review, interviews, and technical assessments, typically completed within 2-4 weeks.
                  </p>
                </div>
                <div className="faq-item">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Do you offer remote work?</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, we offer remote and hybrid work options for many roles, depending on the position.
                  </p>
                </div>
              </div>
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
              <h2 className="h1">What Our Team Says</h2>
              <p className="p">Hear from our employees about their experience at Inflame Solutions.</p>
            </motion.div>
            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ayesha Khan",
                  role: "Frontend Developer",
                  quote: "Inflame Solutions has been an incredible place to grow my skills and work on exciting projects!",
                },
                {
                  name: "Rahim Uddin",
                  role: "UI/UX Designer",
                  quote: "The collaborative culture here inspires creativity and innovation every day.",
                },
                {
                  name: "Fatima Begum",
                  role: "DevOps Engineer",
                  quote: "The mentorship and support I’ve received have accelerated my career growth.",
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
                  <FaUsers className="star-icon text-blue-600 dark:text-blue-400 text-3xl mb-4" />
                  <p className="quote text-gray-600 dark:text-gray-300 italic">“{testimonial.quote}”</p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">{testimonial.name}</h4>
                  <p className="role text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*Career Paths Section */}
        <section className="pricing section-padding bg-gray-100 dark:bg-gray-800" id="career-paths">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Choose Your Career Path</h2>
              <p className="p">Explore roles that match your skills and ambitions.</p>
            </motion.div>
            <div className="pricing-grid ">
              {[
                {
                  name: "Junior",
                  experience: "0-2 Years",
                  features: [
                    "Mentorship Program",
                    "Training Sessions",
                    "Team Projects",
                    "Flexible Hours",
                  ],
                  link: "/contact",
                  cta: "Apply Now",
                },
                {
                  name: "Mid-Level",
                  experience: "2-5 Years",
                  features: [
                    "Lead Projects",
                    "Advanced Training",
                    "Team Collaboration",
                    "Competitive Benefits",
                  ],
                  link: "/contact",
                  cta: "Apply Now",
                  popular: true,
                },
                {
                  name: "Senior",
                  experience: "5+ Years",
                  features: [
                    "Strategic Leadership",
                    "Custom Projects",
                    "Mentor Juniors",
                    "Premium Benefits",
                  ],
                  link: "/contact",
                  cta: "Apply Now",
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
                  <div className="experience text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {plan.experience}
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400"> Experience</span>
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
        </section>

        {/* CTA Section */}
        <section className="cta section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Ready to Join Our Team?</h2>
              <p className="p">
                Take the next step in your career with Inflame Solutions. Apply today!
              </p>
              <motion.a
                href="#jobs"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(147, 197, 253, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Jobs
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>


    </>
  );
}
