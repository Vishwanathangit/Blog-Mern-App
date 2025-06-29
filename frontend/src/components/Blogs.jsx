import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import auth from "../config/firebase";
import Footer from "./common/Footer";
import { ThumbsUp } from "lucide-react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        if (user.uid === "zzbP63FZaLTtQIMBdhVfTeLgNcs1") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } else {
        setAdmin(false);
      }
    });

    fetchBlogs();
    return () => unsubscribe();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs. Please try again later.");
      if (error.code === "ECONNREFUSED" || error.message.includes("Network Error")) {
        setError("Unable to connect to server. Please check if the backend is running on http://localhost:5000");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
      if (response.status === 200) {
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog._id === blog_id ? { ...blog, likes: blog.likes + 1 } : blog
          )
        );
      }
    } catch (error) {
      console.error("Error liking the blog post:", error);
      setError("Failed to like the post. Please try again.");
    }
  };

  const handleNewBlogSubmit = async (event) => {
    event.preventDefault();
    if (!admin) {
      setError("You need to be an admin to create blogs.");
      return;
    }
    try {
      const today = new Date();
      const date = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const blogData = {
        newTitle,
        date,
        newContent,
        likes: 0,
      };
      const response = await axios.post("http://localhost:5000/api/blogs", blogData);
      setBlogs((prevBlogs) => [response.data, ...prevBlogs]);
      setNewTitle("");
      setNewContent("");
      setError("");
    } catch (error) {
      console.error("Error creating blog:", error);
      setError("Failed to create blog. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Latest <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blogs</span>
        </h2>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-lg text-center max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {admin && (
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Create New Blog</h3>
            <form onSubmit={handleNewBlogSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
                required
              />
              <textarea
                placeholder="Blog Content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
                rows="5"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Add Blog
              </button>
            </form>
          </div>
        )}

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.newTitle}</h3>
                <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.newContent}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(blog._id)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>{blog.likes} {blog.likes === 1 ? "Like" : "Likes"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            No blogs available at the moment.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;