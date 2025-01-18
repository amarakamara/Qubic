import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts, images } from "../../data.js";

export default function BlogSnippetSection() {
  return (
    <div>
      <section className="bg-blue-600 py-20">
        <div className="px-6 lg:px-8 md:px-6">
          <h2 className="text-3xl md:text-4xl text-white text-center font-bold mb-10">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl text-blue-600 font-bold mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
