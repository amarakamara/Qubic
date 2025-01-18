import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchBlogPosts } from "../api/strapi";
import { blogPosts as dummyBlogPosts, images } from "../data";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const posts = await fetchBlogPosts();
        if (posts.length > 0) {
          setBlogPosts(posts);
        } else {
          setBlogPosts(dummyBlogPosts);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogPosts(dummyBlogPosts);
      } finally {
        setLoading(false);
      }
    };
    loadBlogPosts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <PageHeader
        title="OUR BLOG"
        subtext="Stay updated with the latest news, events, and stories from Seku I Sheriff School. Our blog showcases the achievements, activities, and announcements that make our school community thrive."
        bgImage={images.image4}
      />

      <div className="text-center px-6 lg:px-8 md:px-6 py-20">
        <motion.h1
          className="text-4xl font-bold mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Stories & Achievements
        </motion.h1>

        <motion.p
          className="text-lg mb-8 px-4 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dive into the heart of Seku I Sheriff School. Discover the stories of
          our students, the exciting events, and the impactful moments that
          shape our vibrant school life.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 py-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  | By {post.author}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogPage;
