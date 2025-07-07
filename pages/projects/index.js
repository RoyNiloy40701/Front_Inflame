import Head from "next/head";
import { useRouter } from "next/router";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();

  // Software services data
  const services = [
    {
      id: "/projects/accounting_software",
      title: "Accounting Software",
      description: "Precision-driven tools for seamless financial management.",
      image: "/img/acn.webp",
    },
    {
      id: "/projects/inventory_software",
      title: "Inventory Software",
      description: "Real-time stock tracking for ultimate control.",
      image: "/img/inventory.webp",
    },
    {
      id: "/projects/manufacturing_software",
      title: "Manufacturing Software",
      description: "Advanced solutions to optimize production workflows.",
      image: "/img/manufac.jpg",
    },
    {
      id: "/projects/hr&payroll",
      title: "HR & Payroll",
      description: "Streamlined workforce and payroll management.",
      image: "/img/hr.webp",
    },
    {
      id: "/projects/ticketing_system",
      title: "Ticketing System",
      description: "Efficient support with smart ticketing solutions.",
      image: "/img/ticketing.jpeg",
    },
    {
      id: "/projects/crm_software",
      title: "CRM Software",
      description: "Enhance customer relationships with intelligent CRM.",
      image: "/img/crm.avif",
    },
    {
      id: "/projects/pos_software",
      title: "POS Software",
      description: "Fast, reliable point-of-sale for modern retail.",
      image: "/img/pos.jpeg",
    },
  ];

  // Handle service click to navigate to its details page
  const handleServiceClick = (id) => {
    router.push(id);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <Head>
        <title>Our Software Solutions</title>
        <meta
          name="description"
          content="Discover our cutting-edge software solutions tailored to elevate your business. From Accounting to CRM, we empower success with innovation."
        />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/accounting_software" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/inventory_software" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/manufacturing_software" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/hr&payroll" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/ticketing_system" />
            <link rel="canonical" href="https://www.inflamesolutions.com/projects/crm_software" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="projectpage min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="projects relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="project_titles text-center"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Discover Our Software Solutions
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Empower your business with our innovative, tailored software for accounting, CRM, manufacturing, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Header Banner */}
        <motion.div
          className="headers bg-gradient-to-r from-blue-600 to-purple-600 py-4 flex justify-between items-center px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="banner-text text-lg font-semibold">
            Leading Software Development Company in Bangladesh
          </span>
          <Link href="/contact" legacyBehavior>
            <motion.a
              className="demo bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-blue-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.a>
          </Link>
        </motion.div>

        {/* Services Section */}
        <section className="services py-20 bg-gray-900">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="services_item group cursor-pointer bg-gray-800 p-6 rounded-2xl relative overflow-hidden"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="image-container mb-6 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="content relative z-10">
                    <h1 className="text-2xl font-bold mb-3 text-blue-300 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h1>
                    <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                    <motion.div
                      className="icon text-2xl text-blue-400"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GoArrowUpRight />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>


    </>
  );
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
