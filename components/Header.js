import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ services: false, projects: false });

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleMobileOpen = () => {
    setMobile(!mobile);
  };

  const handleMobileClose = () => {
    setMobile(false);
    setDropdownOpen({ services: false, projects: false });
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className="sticky">
      <nav className="container flex flex-sb">
        <div className="logo flex gap-2">
          <Link href="/">
            <img src="/img/inflame logo 1.png" alt="Inflame Solution Logo" />
          </Link>
        </div>
        <div className="navlist flex gap-2">
          <ul className="flex gap-2">
            <li>
              <Link href="/" className={activeLink === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                href="/services"
                className={activeLink === "/services" ? "active" : ""}
              >
                Services <FiChevronDown />
              </Link>
              <div className="dropdown-content">
                <Link href="/web_development">Web Design & Development</Link>
                <Link href="/software_development">Software Development</Link>
                <Link href="/saas-product">SaaS Product</Link>
                <Link href="/digital-marketing">Digital Marketing(SEO)</Link>
                <Link href="/ai-automation">AI Automation</Link>
                <Link href="/products">Products</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link
                href="/projects"
                className={activeLink === "/projects" ? "active" : ""}
              >
                Our Software <FiChevronDown />
              </Link>
              <div className="dropdown-content">
                <Link href="/projects/accounting_software">Accounting Software</Link>
                <Link href="/projects/inventory_software">Inventory Software</Link>
                <Link href="/projects/manufacturing_software">Manufacturing Software</Link>
                <Link href="/projects/hr&payroll">HR & Payroll</Link>
                <Link href="/projects/ticketing_system">Ticketing System</Link>
                <Link href="/projects/crm_software">CRM Software</Link>
                <Link href="/projects/pos_software">POS Software</Link>
              </div>
            </li>

            <li>
              <Link href="/about-us" className={activeLink === "/about-us" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={activeLink === "/blogs" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={activeLink === "/gallery" ? "active" : ""}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className={activeLink === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="darkmodetoggle" onClick={toggleDarkMode}>
            {darkMode ? <IoMoonSharp /> : <LuSun />}
          </div>
          <button>
            <Link href="/contact">Contact Us</Link>
          </button>
          <div className="mobiletagglesvg" onClick={handleMobileOpen}>
            <HiMiniBars3BottomRight />
          </div>
        </div>
        <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
          <span onDoubleClick={handleMobileClose} className={mobile ? "active" : ""}></span>
          <div className="mobilelogo">
            <img src="/img/logo.jpg" alt="Inflame Solution Logo" />
            <h2>Inflame Solution Ltd</h2>
          </div>
          <ul className="flex gap-1 flex-col flex-left mt-3" onClick={handleMobileClose}>
            <li>
              <Link href="/" className={activeLink === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className={`dropdown ${dropdownOpen.services ? "active" : ""}`}>
              <div onClick={() => toggleDropdown("services")} className="flex align-center gap-1">
                <Link href="/services" className={activeLink === "/services" ? "active" : ""}>
                  Services
                </Link>
                <FiChevronDown />
              </div>
              <div className="dropdown-content">
                <Link href="/web_development">Web Design & Development</Link>
                <Link href="/software_development">Software Development</Link>
                <Link href="/saas-product">saas-product</Link>
                <Link href="/digital-marketing">Digital Marketing</Link>
                <Link href="/ai-automation">AI Automation</Link>
                <Link href="/products">Products</Link>
              </div>
            </li>
            <li className={`dropdown ${dropdownOpen.projects ? "active" : ""}`}>
              <div onClick={() => toggleDropdown("projects")} className="flex align-center gap-1">
                <Link href="/projects" className={activeLink === "/projects" ? "active" : ""}>
                  Our Software
                </Link>
                <FiChevronDown />
              </div>
              <div className="dropdown-content">
                <Link href="/projects/accounting_software">Accounting Software</Link>
                <Link href="/projects/inventory_software">Inventory Software</Link>
                <Link href="/projects/manufacturing_software">Manufacturing Software</Link>
                <Link href="/projects/hr_payroll">HR & Payroll</Link>
                <Link href="/projects/ticketing_system">Ticketing System</Link>
                <Link href="/projects/crm_software">CRM Software</Link>
                <Link href="/projects/pos_software">POS Software</Link>
              </div>
            </li>
            <li>
              <Link href="/gallery" className={activeLink === "/gallery" ? "active" : ""}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={activeLink === "/about-us" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={activeLink === "/blogs" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={activeLink === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
