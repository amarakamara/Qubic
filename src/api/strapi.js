import axios from "axios";

const strapiUrl = "http://localhost:1337";

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${strapiUrl}/api/blog-posts`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
};

export const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `${strapiUrl}/api/blog-posts?filters[slug][$eq]=${slug}`
    );
    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};
