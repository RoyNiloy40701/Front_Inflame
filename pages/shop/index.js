import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

export default function About() {
  const [currentSlide] = useState(0);

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

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Explore Inflame Solutions' mission, vision, values, and the visionary team driving cutting-edge IT innovation."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="pos-software">
        {/* Hero Section 1 */}
        <section className="hero section-padding">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h3">
                Inflame Solutions is the <span>best IT company in Bangladesh</span>
              </h1>
              <p className="text-content">
                Our aim for quality and innovation drives us to provide unique services
                in digital marketing, graphic design, UX/UI, web design & development,
                and software development. With a team of highly skilled professionals,
                we deliver exceptional solutions that meet the supreme requirements of
                all types of clients.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="/contact"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/services"
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(244, 63, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
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
                src="/img/about-hero1.png"
                alt="Inflame Solutions Hero"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>

        {/* Hero Section 2 */}
        <section className="hero section-padding">
          <div className="container">
            <motion.div
              className="hero-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">
                Get IT Solutions from the best IT company <br />
                <span>at Inflame Solutions Ltd.</span>
              </h2>
              <p className="text-content">
                At Inflame, we believe in the power of technology to transform
                businesses. Our digital marketing strategies increase online visibility
                and drive organic traffic. Our UX/UI designs create engaging user
                experiences, ensuring your brand stands out. Our web development team
                specializes in responsive, SEO-friendly websites optimized for search
                engine rankings, making us the best IT company in Bangladesh. We also
                provide custom software development tailored to your business needs. We
                focus on building long-term client relationships by offering reliable
                and effective IT solutions. Trust Inflame to take your business to the
                next level with our comprehensive services. Contact us to learn more
                and elevate your business.
              </p>
            </motion.div>
            <motion.div
              className="hero-image"
              variants={slideRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/img/about-hero2.png"
                alt="Inflame IT Solutions"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="features section-padding" id="values">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Our Core Drivers</h2>
              <p className="text-content">
                The principles fueling our journey to redefine technology.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  title: "Mission",
                  description: "Empowering businesses with innovative IT solutions for global impact.",
                  icon: <FaBullseye size={40} />,
                },
                {
                  title: "Vision",
                  description: "Leading the charge in IT innovation through collaboration and technology.",
                  icon: <FaEye size={40} />,
                },
                {
                  title: "Values",
                  description: "Integrity, creativity, and teamwork power our success.",
                  icon: <FaHeart size={40} />,
                },
              ].map((value, index) => (
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
                  <div className="icon-wrapper">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p className="text-content">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="testimonials section-padding" id="team">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Our Visionaries</h2>
              <p className="text-content">
                Meet the brilliant minds pushing the boundaries of tech.
              </p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Joseph Zheng",
                  role: "Managing Director",
                  image: "/img/boss1.jpeg",
                  quote: "Joseph Zheng leads our mission with 15+ years of IT expertise.",
                },
                {
                  name: "Noor Ahmed",
                  role: "Director",
                  image: "/img/boss2.jpeg",
                  quote: "Noor Ahmed drives our tech forward with visionary innovation.",
                },
                {
                  name: "Sumaiya Islam",
                  role: "Business Development Manager",
                  image: "/img/su.jpeg",
                  quote: "Sumaiya Islam crafts robust, scalable solutions with precision.",
                },
                {
                  name: "Arif Mohammad Saleh",
                  role: "Corporate Manager",
                  image: "/img/mg2.jpeg",
                  quote: "Arif Mohammad Saleh infuses creativity into every project’s design.",
                },
              ].map((employee, index) => (
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
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    width={180}
                    height={180}
                    className="team-image"
                    onError={() => console.error(`Failed to load image: ${employee.image}`)}
                  />
                  <p className="text-content">“{employee.quote}”</p>
                  <h4>{employee.name}</h4>
                  <p className="text-content">{employee.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}