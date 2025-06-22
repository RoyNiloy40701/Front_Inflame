const { Schema, models, model } = require("mongoose");

const BlogSchema = new Schema(
  {
    title: { type: String, default: "" },
    slug: { type: String, required: true },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
    blogcategory: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    status: { type: String, enum: ["draft", "publish"], default: "draft" },

  },
  {
    timestamps: true,
  }
);

export const Blog = models.Blog || model("Blog", BlogSchema, "blogs");