import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import axios from "axios";
import { SlCalender } from "react-icons/sl";
import { CiRead } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsCopy } from "react-icons/bs";
import Link from "next/link";

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [blogData, setBlogData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        setError(null);
        axios.get(`/api/blogs/${slug}`)
            .then(response => {
                setBlogData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to fetch blog data. Please try again later');
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div className="flex flex-center wh_100">Loading...</div>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Head>
                <title>{blogData.title || slug}</title>
            </Head>
            <div>
                <div className="blogslugpage">
                    <div className="container">
                        <div className="blogslugpagecont">
                            <div className="leftsitedetails">
                                <div className="leftbloginfoimg">
                                    <img src={blogData.images?.[0] || "/img/1.jpg"} alt="" />
                                </div>
                                <div className="slugbloginfopub">
                                    <div className="flex gap-2">
                                        <div className="adminslug">
                                            <img src="/img/1.jpg" alt="" />
                                            <span>By Inflame Solutions Ltd</span>
                                        </div>
                                        <div className="adminslug">
                                            <SlCalender />
                                            <span>{blogData.createdAt ? new Date(blogData.createdAt).toLocaleDateString() : "Pending"}</span>
                                        </div>
                                        <div className="adminslug">
                                            <CiRead />
                                            <span>Comments (pending)</span>
                                        </div>
                                    </div>
                                </div>
                                {/* You can render more blog details here */}
                                <h1>{blogData.title}</h1>
                                <div>{blogData.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;