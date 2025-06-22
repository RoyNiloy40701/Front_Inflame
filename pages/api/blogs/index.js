import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === 'GET') {
    // Fetch all blogs
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json({ blogs });
  }

  if (req.method === 'POST') {
    // Create new blog
    const { title, slug, images, description, blogcategory, tags, status } = req.body;
    if (!slug) return res.status(400).json({ error: 'Slug is required' });

    const newBlog = await Blog.create({
      title, slug, images, description, blogcategory, tags, status,
    });
    return res.status(201).json(newBlog);
  }

  res.status(405).json({ error: 'Method not allowed' });
}