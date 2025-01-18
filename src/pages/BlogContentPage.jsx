import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchBlogPost } from "../api/strapi";
import { blogPosts as dummyBlogPosts } from "../data";
import LoadingSpinner from "../components/LoadingSpinner";

function BlogContentPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        const fetchedPost = await fetchBlogPost(slug);
        if (fetchedPost) {
          setPost({
            title: fetchedPost.attributes.title,
            content: fetchedPost.attributes.content,
            author: fetchedPost.attributes.author,
            date: fetchedPost.attributes.publishedAt,
          });
        } else {
          const fallbackPost = dummyBlogPosts.find(
            (post) => post.slug === slug
          );
          setPost(fallbackPost || null);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        const fallbackPost = dummyBlogPosts.find((post) => post.slug === slug);
        setPost(fallbackPost || null);
      } finally {
        setLoading(false);
      }
    };
    loadBlogPost();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          Post Not Found
        </h1>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="px-6 lg:px-8 md:px-6 ">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header
            className="relative w-full h-50 my-10 text-white rounded"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="relative z-10 w-full h-full flex justify-center items-center"></div>
          </header>

          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Blog
          </Link>

          <motion.h1
            className="text-4xl font-bold mb-4 text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            | By {post.author}
          </motion.p>

          <motion.div
            className="prose lg:prose-xl pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.article>
      </div>

      <Footer />
    </>
  );
}

export default BlogContentPage;
