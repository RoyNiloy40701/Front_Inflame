import Head from "next/head";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LiaBaseballBallSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdEditSquare } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";


import * as THREE from "three";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, EffectCreative, FreeMode, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FaPhoneVolume } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
import axios from "axios";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Web Development");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const heroCanvasRef = useRef(null);
  const servicesCanvasRef = useRef(null);
  const projectsCanvasRef = useRef(null);
  const exploreCanvasRef = useRef(null);

  const handlePageChange = (pageId) => setCurrentPage(pageId);

  useEffect(() => {
    if (swiperInstance && typeof swiperInstance.slideTo === "function") {
      const slideIndex =
        {
          "Web Development": 0,
          "SaaS Products": 1,
          "Software Development ": 2,
          "Digital Marketing(SEO)": 3,
          "AI Automation": 4,
        }[currentPage] || 0;
      swiperInstance.slideTo(slideIndex);
    }
  }, [currentPage, swiperInstance]);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (index) => setActiveIndex(index);
  const handleMouseOut = () => setActiveIndex(0);
  const pageSlides = {
    "Web Development": [
      { src: "/img/web.jpg", alt: "Home Page Slide 1" },
      ,
    ],
    "SaaS Products": [
      { src: "/img/saas.jpg", alt: "Service Page Slide 1" },
      ,
    ],
    "Software Development ": [
      { src: "/img/softwares.png", alt: "Blog Page Slide 1" },
      
    ],
    "Digital Marketing(SEO)": [
      { src: "/img/1690.jpg", alt: "Contact Page Slide 1" },

    ],
    "AI Automation": [
      { src: "/img/aiautomation.png", alt: "More Page Slide 1" },
      ,
    ],
  };

  const services = [
    {
      title: "Web Development",
      description:
        "As a leading website development company, we create custom and SEO-friendly websites that super fast drive results.Our expert team designs and develops responsive, user-centric sites tailored to your business needs. From e-commerce platforms to corporate sites, we ensure fast loading times and smooth navigation to enhance user experience and grow your online presence",
      imgSrc: "/img/application.png",
    },
    {
      title: "Software Development",
      description:
        "Transform your business with our custom software development services. We offer custom-made high-quality softwaresolutions, for enterprise applications. Our expert developers use the latest technologies to ensure secure, scalable, and eﬃcient software. Partner with Infiname Software company in Bangladesh to turn your vision into reality and drive growth      ",
      imgSrc: "/img/software.png",
    },
    {
      title: "SaaS Products",
      description:
        "SaaS solutions delivering flexible, cloud-based software that simplifies your operations, increases collaboration, and supports business growth anywhere, anytime.",
      imgSrc: "/img/saas.png",
    },
    {
      title: "Digital Marketing(SEO)",
      description:
        "Grow your online presence with our expert digital marketing service team. We offer custom-made strategies and plans,including SEO, Social Media Marketing, content marketing, and PPC campaigns, to drive traﬃc, increase engagement, and grow your brand. Connect us with our expert team to show our digital marketing services list",
      imgSrc: "/img/seo .png",
    },
    {
      title: "AI Automation",
      description:
        "AI automation solutions to optimize your business processes, grow efficiency, reduce costs, and drive smarter, data-driven decision-making.",
      imgSrc: "/img/artificial-intelligence.png",
    },
  ];

  const allProjects = [
    { name: "All Projects", category: "All", images: [] },
    {
      name: "Ticketing",
      category: "Ticketing",
      images: ["/img/ticket.jpg"],
      id: "/projects/ticketing_system",
    },
    {
      name: "CRM",
      category: "CRM",
      images: ["/img/crm.jpg"],
      id: "/projects/crm_software",
    },
    {
      name: "HR & Payroll Software",
      category: "HR & Payroll Software",
      images: ["/img/hrpayroll.jpg"],
      id: "/projects/hr&payroll",
    },
    {
      name: "Inventory System",
      category: "Inventory",
      images: ["/img/inventory.jpg"],
      id: "/projects/inventory_software",
    },
    {
      name: "Accounting Software",
      category: "Accounting",
      images: ["/img/accounting.jpg"],
      id: "/projects/accounting_software",
    },
    {
      name: "Manufacturing ERP",
      category: "Manufacturing",
      images: ["/img/manufacturing.jpg"],
      id: "/projects/manufacturing_software",
    },
    {
      name: "POS System",
      category: "POS",
      images: ["/img/pos.jpg"],
      id: "/projects/pos_software",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(
      category === "All"
        ? allProjects
        : allProjects.filter((project) => project.category === category)
    );
  };

  // Simple WebGL support check without extra imports
  const isWebGLSupported = () => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  };

  // General Three.js Initialization (for Hero, Projects, Explore)
  const initThreeJs = (canvas) => {
    if (!canvas) return;

    // Check WebGL support
    if (!isWebGLSupported()) {
      console.error("WebGL is not supported on this device/browser.");
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "red";
      errorMessage.innerText = "WebGL is not supported on this device.";
      canvas.parentElement.appendChild(errorMessage);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Dynamic camera position and particle spread
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 20 : 50;
    const spread = isMobile ? 40 : 100;

    const particles = new THREE.Group();
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff });

    const particleCount = isMobile ? 50 : 150;
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      particles.add(particle);
    }
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 20 : 50;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    canvas.style.display = "block";

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  };

  // Special Three.js Initialization for Services Section (Grid Effect)
  const initServicesThreeJs = (canvas) => {
    if (!canvas) return;

    // Check WebGL support
    if (!isWebGLSupported()) {
      console.error("WebGL is not supported on this device/browser.");
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "red";
      errorMessage.innerText = "WebGL is not supported on this device.";
      canvas.parentElement.appendChild(errorMessage);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Dynamic camera position and grid size
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 15 : 30;
    const gridSize = isMobile ? 6 : 10;

    const grid = new THREE.Group();
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
    });

    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let y = -gridSize; y <= gridSize; y += 2) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, y, 0);
        grid.add(cube);
      }
    }
    scene.add(grid);

    const animate = () => {
      requestAnimationFrame(animate);
      grid.children.forEach((cube, index) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.z = Math.sin(Date.now() * 0.001 + index) * 5;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 15 : 30;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    canvas.style.display = "block";

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  };

  useEffect(() => {
    const heroCleanup = initThreeJs(heroCanvasRef.current);
    const servicesCleanup = initServicesThreeJs(servicesCanvasRef.current);
    const projectsCleanup = initThreeJs(projectsCanvasRef.current);
    const exploreCleanup = initThreeJs(exploreCanvasRef.current);

    return () => {
      if (heroCleanup) heroCleanup();
      if (servicesCleanup) servicesCleanup();
      if (projectsCleanup) projectsCleanup();
      if (exploreCleanup) exploreCleanup();
    };
  }, []);

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [messageOk, setMessageOk] = useState("");

  async function createProduct(ev) {
    ev.preventDefault();
    setMessageOk("sending...");
    const data = {
      name,
      lname,
      email,
      company,
      phone,
      country,
      project,
      price,
      description,
    };
    try {
      await axios.post("/api/contacts", data);
      setMessageOk("message sent successfully");
      setName("");
      setLname("");
      setEmail("");
      setCompany("");
      setPhone("");
      setCountry("");
      setProject([]);
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        console.error("server error", error.response.data);
      } else if (error.request) {
        console.error("Network error", error.request);
      }
      setMessageOk("");
    }
  }

  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((p) => p !== projectName));
    } else {
      setProject([...project, projectName]);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Best software company in bangladesh</title>
        <meta name="description" content="Transform your business with the best software company in Bangladesh. We build powerful apps, websites, and enterprise software systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.inflamesolutions.com" />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/img/inflame logo 2.png"
        />
      </Head>
      <style jsx>{`
        .threejs-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.5;
          display: block;
        }
        section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        .service-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-right: 10px;
        }
        .left_s_box {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          section {
            min-height: 80vh;
          }
          .threejs-canvas {
            height: 80vh;
          }
          .service-img {
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          section {
            min-height: 60vh;
          }
          .threejs-canvas {
            height: 60vh;
          }
          .service-img {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <canvas ref={heroCanvasRef} className="threejs-canvas" />
        <div className="intro_text">
          <svg viewBox="0 0 1320 300"></svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <h1 className="hero_title">
                Business Software
                <br />
                <span className="typed-text">Solution</span>
              </h1>
              <span className="hero_sb_title">
                Your Trusted Software Development Company in Bangladesh Which is
                the Inflame Solutions, We specialize in delivering innovative,
                Flexible, and cost-effective software solutions customized to
                your business needs. From custom software development to
                ready-made solutions like ERP, CRM, HRM, POS and inventory
                systems, we empower businesses to grow with technology.
              </span>
            </div>
            <div className="right_banner_info">
              <div className="right_banner_cont">
                <div className="three_dot">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="right_main_banner_box">
                  <div className="left_banner_box">
                    <h1>Inflame Solutions Services</h1>
                    <ul>
                      {[
                        "Web Development",
                        "SaaS Products",
                        "Software Development ",
                        "Digital Marketing(SEO)",
                        "AI Automation",
                      ].map((page, index) => (
                        <li
                          key={page}
                          className={currentPage === page ? "active" : ""}
                          onClick={() => handlePageChange(page)}
                          role="button"
                          aria-label={`Navigate to ${page}`}
                        >
                          <div className="flex gap-05">
                            <div className="banner_box_svg">
                              {index === 0 && <IoHome />}
                              {index === 1 && <BsBoxSeamFill />}
                              {index === 2 && <MdEditSquare />}
                              {index === 3 && <MdEditSquare />}
                              {index === 4 && <TfiMoreAlt />}
                            </div>
                            {page}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="right_banner_box">
                    {currentPage && (
                      <Swiper
                        grabCursor={true}
                        effect="creative"
                        creativeEffect={{
                          prev: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [180, 0, 0],
                          },
                          next: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [-180, 0, 0],
                          },
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[EffectCreative, Pagination, Navigation]}
                        className="mySwiper4"
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                          320: { slidesPerView: 1, spaceBetween: 10 },
                          640: { slidesPerView: 1, spaceBetween: 15 },
                          884: { slidesPerView: 1, spaceBetween: 20 },
                        }}
                      >
                        {pageSlides[currentPage]?.map((slide, index) => (
                          <SwiperSlide key={index}>
                            <div className="right_banner_box_img">
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                loading="lazy"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_btn_box">
            <Link href="/contact" className="learn_more_button">
              Learn More
            </Link>
            <ul className="hero_social">
              <li>
                <a href="/" aria-label="Dribbble">
                  <LiaBaseballBallSolid />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/inflame-solutions-ltd/"><FaLinkedinIn /></a>
              </li>
              <li>
                <a href="https://github.com/inflamesolutionsltd"><FaGithub /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/16SZzypaKC/"><FaFacebookF /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="funfect_area flex flex-sb">
          <div className="funfect_item">
            <h3>50+</h3>
            <h4>
              Software &<br />
              Web Apps
            </h4>
          </div>
          <div className="funfect_item">
            <h3>100+</h3>
            <h4>
              Positive
              <br />
              Feedback
            </h4>
          </div>
          <div className="funfect_item">
            <h3>2500+</h3>
            <h4>Users</h4>
          </div>
          <div className="funfect_item">
            <h3>350+</h3>
            <h4>Contributors</h4>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <canvas ref={servicesCanvasRef} className="threejs-canvas" />
        <div className="container">
          <div className="services_titles">
            <h2>Our Services</h2>
            <p>
              We provide a diverse range of software solutions, including
              Manufacturing, Accounting, Inventory, Ticketing, Billing, CRM, and
              POS Software.
            </p>
          </div>
          <div className="services_menu">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`services_item ${activeIndex === index || (activeIndex === 0 && index === 0) ? "sactive" : ""
                  }`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <img
                    src={service.imgSrc}
                    alt={`${service.title} icon`}
                    className="service-img"
                  />
                  <div>
                    <span>0{index + 1}</span>
                    <h3>{service.title}</h3>
                  </div>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <canvas ref={projectsCanvasRef} className="threejs-canvas" />
        <div className="container">
          <div className="project_titles">
            <h2>Our Customized Software</h2>
          </div>
          <div className="project_buttons">
            {[
              "All",
              "Inventory",
              "Accounting",
              "Manufacturing",
              "CRM",
              "Ticketing",
              "POS",
              "HR & Payroll Software",
            ].map((cat) => (
              <button key={cat} onClick={() => handleCategoryChange(cat)}>
                {cat === "HR & Payroll Software" ? "HR & Payroll" : cat}
              </button>
            ))}
          </div>
          <div className="projects_cards">
            {filteredProjects.length > 0 ? (
              filteredProjects
                .filter((project) => project.category !== "All")
                .map((project) =>
                  project.images?.map((img, idx) => (
                    <Link
                      key={`${project.name}-${idx}`}
                      href={project.id || "/"}
                      className="procard"
                      aria-label={`View details for ${project.name}`}
                    >
                      <div className="proimgbox">
                        <img src={img} alt={`${project.name} ${idx + 1}`} />
                      </div>
                      <div className="procontentbox">
                        <h2>{project.name}</h2>
                        <GoArrowUpRight />
                      </div>
                    </Link>
                  ))
                )
            ) : (
              <p>No projects found in this category</p>
            )}
          </div>
        </div>
      </section>

  
 
      {/* Explore client */}
     <section className="explore_websites">
  <canvas ref={exploreCanvasRef} className="threejs-canvas" />
  <div className="container">
    <div className="explore_website_cont">
      <div className="explore_website_title">
        {/* <h3>See Our Valuable Clients</h3> */}
        <h2>Our Valuable Clients</h2>
      </div>
    </div>
  </div>
  {/* First Row: 8 Clients */}
  <div className="explore_website_cards">
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      freeMode={true}
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={4000}
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="explore_website_card">
            <img
              src={`/img/Asset ${index + 1}.jpg`}
              alt={`Client Website ${index + 1}`}
            />
            <div className="flex flex_sb"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  {/* Second Row: 7 Clients */}
  <div className="explore_website_cards">
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      speed={4000}
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <SwiperSlide key={index + 13}>
          <div className="explore_website_card">
            <img
              src={`/img/Asset ${index + 8}.jpg`}
              alt={`Client Website ${index + 8}`}
            />
            <div className="flex flex_sb"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* Contact Section */}
      <section className="explore_websites">
        <div className="contactpage">
          <h1 className="services_titles h2">Contact Us</h1>
          <div className="container">
            <div className="contactformp">
              <div className="leftcontp">
                <h2>Get in touch</h2>
                <h2>Let's talk about your Project</h2>
                <p>
                  Thinking about a new project, a problem to solve, or just want
                  to contact? Let's do it
                </p>
                <p>Use the form on this page or get in touch by other means.</p>
                <p>
                  We love questions and feedback - and we're always happy to
                  help
                </p>
                <div className="leftsociinfo">
                  <ul>
                    <li>
                      <FaPhoneVolume />{" "}
                      <span>
                        Phone: <a href="tel:+8801897715426">+8801897715426</a>
                      </span>
                    </li>
                    <li>
                      <MdAttachEmail />{" "}
                      <span>
                        Email:{" "}
                        <a href="mailto:inflamesolutionltd@gmail.com" target="_blank">
                          inflamesolutionltd@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <GrLinkedin />{" "}
                      <span>
                        Linkedin: <a href="https://bd.linkedin.com/company/inflame-solutions-ltd" target="_blank">Inflame Solution Ltd</a>
                      </span>
                    </li>
                    <li>
                      <IoLogoFacebook />{" "}
                      <span>
                        FaceBook: <a href="https://www.facebook.com/inflamesolutionltd" target="_blank">Inflame Solution Ltd</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightcontp">
                <form onSubmit={createProduct}>
                  <div className="rightconttitle">
                    <h2>Your Contact Information</h2>
                  </div>
                  <div className="rightcontinputs">
                    <input
                      type="text"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      placeholder="First name"
                      required
                    />
                    <input
                      type="text"
                      value={lname}
                      onChange={(ev) => setLname(ev.target.value)}
                      placeholder="Last Name"
                      required
                    />
                    <input
                      type="text"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      placeholder="Email Id"
                      required
                    />
                    <input
                      type="text"
                      value={company}
                      onChange={(ev) => setCompany(ev.target.value)}
                      placeholder="Company name"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(ev) => setPhone(ev.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                    <select
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      id="country"
                    >
                    
                      
                      <option value="Bangladesh">Bangladesh</option>
                      
                    </select>
                  </div>
                  <div className="rightconttitle">
                    <h2>What services do you need for your project?</h2>
                  </div>
                  <div className="rightcontcheckbox">
                    {[
                      "Website Developer",
                      "App Developer",
                      "Software Developer",
                      "Design System",
                      "E-commerce Site",
                      "Performance Evaluation",
                    ].map((projectOption) => (
                      <label
                        key={projectOption}
                        className="cyberpunk-checkbox-label"
                      >
                        <input
                          type="checkbox"
                          className="cyberpunk-checkbox"
                          value={projectOption}
                          checked={project.includes(projectOption)}
                          onChange={() => handleProjectChange(projectOption)}
                        />
                        {projectOption}
                      </label>
                    ))}
                  </div>
                  {/* <div className="rightconttitle">
                    <h2>
                      How much is the anticipated budget for your next project?
                    </h2>
                  </div>
                  <div className="rightcontredio">
                    {[
                      "Less than $400-$800",
                      "$800-$1000",
                      "$1000-$1200",
                      "$1200 or more",
                    ].map((priceRange) => (
                      <div key={priceRange} className="radio-button">
                        <input
                          type="radio"
                          id={priceRange}
                          name="example-radio"
                          value={priceRange}
                          checked={price === priceRange}
                          onChange={handlePriceChange}
                        />
                        <span className="radio"></span>
                        <label htmlFor={priceRange}>{priceRange}</label>
                      </div>
                    ))}
                  </div> */}
                  <div className="rightconttitle">
                    <h2>Tell me about your Project</h2>
                  </div>
                  <div className="rightcontpera">
                    <textarea
                      value={description}
                      onChange={(ev) => setDescription(ev.target.value)}
                      name="description"
                      rows={4}
                      placeholder="Project Description"
                    ></textarea>
                  </div>
                  <hr />
                  <div className="righhcontsbtn flex gap-3">
                    <button type="submit">Submit</button>
                    <p>{messageOk}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
