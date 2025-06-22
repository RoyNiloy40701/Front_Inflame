import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

export default function BlogDetail() {
  const { slug } = useRouter().query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    axios.get(`/api/blogs/${slug}`)
      .then(res => { setBlog(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{color:"#fff",textAlign:"center"}}>Loading...</div>;
  if (!blog) return <div style={{color:"#fff",textAlign:"center"}}>Blog not found.</div>;

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="blog-detail-container">
        <h1>{blog.title}</h1>
        {blog.images && blog.images[0] && (
          <img src={blog.images[0]} alt={blog.title} className="blog-detail-img" />
        )}
        <div className="blog-description">{blog.description}</div>
      </div>
      <style jsx>{`
        .blog-detail-container {
          margin: 40px auto;
          max-width: 700px;
          background: #22153c;
          padding: 32px;
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 8px 32px #0004;
        }
        .blog-detail-img {
          width: 100%;
          max-width: 600px;
          display: block;
          margin: 28px auto 24px auto;
          border-radius: 12px;
        }
        .blog-description {
          font-size: 1.13rem;
          line-height: 1.7;
        }
      `}</style>
    </>
  );
}