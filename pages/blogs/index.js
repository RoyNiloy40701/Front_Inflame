import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "@/components/Spinner"; // Added Spinner import
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import Head from "next/head";
import { useState } from "react";
import useFetchData from "@/hooks/useFetchData"; // Adjust the path as necessary
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function Blogs() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(7);
  const [searchQuery, setSearchQuery] = useState("");

  const { allData, loading, error } = useFetchData("/api/blogs");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredBlogs =
    searchQuery.trim() === ""
      ? allData || []
      : (allData || []).filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexOfLastBlog = currentPage * perPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / perPage);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`/api/blogs?id=${id}`);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const handleEdit = (id) => {
    router.push(`/blogs/edit/${id}`);
  };

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="blogpage">
        <div className="tophero">
          <div className="container">
            <div className="toptitle">
              <div className="toptitlecont flex">
                <h1>
                  Welcome to <span>Inflame Solutions Blogs!</span>
                </h1>
                <p>We provide you with all our service blogs</p>
                <div className="subemail">
                  <form className="flex">
                    <input
                      placeholder="Search Blogs here..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button>Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="featured">
              <div className="container">
                <div className="border">
                  <div className="featuredposts">
                    <div className="fetitle flex">
                      <h3>Featured Posts:</h3>
                    </div>
                    <div className="feposts flex">
                      <Swiper
                        slidesPerView={"auto"}
                        freeMode={true}
                        spaceBetween={30}
                        className="mySwiper"
                        modules={[FreeMode]}
                      >
                        {loading ? (
                          <Spinner />
                        ) : error ? (
                          <div>Error: {error}</div>
                        ) : allData.length === 0 ? (
                          <div>No featured blogs available</div>
                        ) : (
                          allData.slice(0, 6).map((blog) => (
                            <SwiperSlide key={blog._id}>
                              <div className="fpost">
                                <Link href={`/blogs/${blog.slug}`}>
                                  <img
                                    src={blog.images && blog.images[0] ? blog.images[0] : "/default-image.jpg"}
                                    alt={blog.title || "Blog Image"}
                                  />
                                </Link>
                              </div>
                            </SwiperSlide>
                          ))
                        )}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}