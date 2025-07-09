import Head from "next/head";
import { useState } from "react";
import { FaFacebook, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
import axios from "axios";
import { IoLogoFacebook } from "react-icons/io5";

export default function Contact() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState("");
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
      setProject("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        // console.log("hey error");
        console.error("🔥 Server error:", error);
        console.error(error.stack);
        console.error('Server error', error.response?.data || error.message);
        console.error("server error", error.response.data);
      } else if ((error, request)) {
        console.error("Network error", error.request);
      } else {
      }
      setMessageOk("");
    }
  }
  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((project) => project !== projectName));
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
        <title>Contact us</title>
      </Head>
      <div className="contactpage">
        <div className="container">
          <div className="contactformp">
            <div className="leftcontp" >
              <h2>Get in touch</h2>
              <h2>Let's talk about your Project</h2>
              <p>
                Thinking about a new project,a problem to solve ,or just want to
                contact? Let's do it
              </p>
              <p>Use the form on this page or get in touch by other means.</p>
              <p>
                We love questions and feedback- and we'ar always happy to help{" "}
              </p>
              <div className="leftsociinfo">
                <ul>
                  <li>
                    <FaPhoneVolume />{" "}
                    <span>
                      Phone: <a href="Tel:+8801880464045">+8801897715426</a>
                    </span>
                  </li>
                  <li>
                    <MdAttachEmail />{" "}
                    <span>
                      Email: <a href="mailto:test@gamil.com">inflamesolutionltd@gmail.comm</a>
                    </span>
                  </li>
                  <li>
                    <GrLinkedin />{" "}
                    <span>
                      Linkedin: <a href="">inflame solutions</a>
                    </span>
                  </li>
                  {/* <li>
                    <FaTwitter />{" "}
                    <span>
                      Twitter: <a href="">@test</a>
                    </span>
                  </li> */}
                  <li>
                    <IoLogoFacebook />{" "}
                    <span>
                      FaceBook: <a href="https://www.facebook.com/inflamesolutionsltd/" target="_blank">Inflame Solution Ltd</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightcontp">
              <form onSubmit={createProduct}>
                <div className="rightconttitle">
                  <h2>Your Contact Information </h2>
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
                    type=""
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
                  <h2>What services do you need for your project ?</h2>
                </div>
                <div className="rightcontcheckbox">
                  {[
                    "Website Developer",
                    "App Developer",
                    "Software Developer",
                    "desing system",
                    "E-commerce Site",
                    "Perfomance Evaluation ",
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
                    How Much is the anticipated budget for your next project{" "}
                  </h2>
                </div>
                <div className="rightcontredio">
                  {[
                    "Less then $400-$800",
                    "$800-$1000",
                    "$1000-$1200",
                    "$1200 more",
                  ].map((priceRange) => (
                    <div key={priceRange} className="radio-button">
                      <input
                        type="redio"
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
                  <h2>Tell me about your Project </h2>
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
                  <button type="submit">submit</button>
                  <p>{messageOk}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
