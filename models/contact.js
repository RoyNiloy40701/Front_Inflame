import { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    lname: String,
    email: { type: String, required: true },
    company: String,
    phone: { type: String, required: true },
    country: String,
    price: String,
    project: [String],
    description: String,
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model("Contact", ContactSchema, "contacts");
export default Contact;
