import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    lname: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    price: "",
    description: "",
    project: [],
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (projectName) => {
    setForm((prev) => ({
      ...prev,
      project: prev.project.includes(projectName)
        ? prev.project.filter((p) => p !== projectName)
        : [...prev.project, projectName],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");
    try {
      await axios.post("/api/contacts", form);
      setMessage("Message sent successfully!");
      setForm({
        name: "",
        lname: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        price: "",
        description: "",
        project: [],
      });
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="First name" required />
      <input name="lname" value={form.lname} onChange={handleChange} placeholder="Last name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="country" value={form.country} onChange={handleChange} placeholder="Country" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      <div>
        {["Website Developer", "App Developer", "Software Developer", "Design System", "E-commerce Site", "Performance Evaluation"].map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              value={opt}
              checked={form.project.includes(opt)}
              onChange={() => handleProjectChange(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Project Description" />
      <button type="submit">Submit</button>
      <div>{message}</div>
    </form>
  );
}