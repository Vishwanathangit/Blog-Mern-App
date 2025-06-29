import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import auth from '../config/firebase'; // Missing import
import Footer from './common/Footer';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Check authentication state
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                if (user.uid === "zzbP63FZaLTtQIMBdhVfTeLgNcs1") {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            } else {
                setAdmin(false);
                // Optionally redirect to login if authentication is required
                // navigate('/login');
            }
        });

        // Fetch blogs
        fetchBlogs();

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await axios.get("http://localhost:5000/api/blogs");
            console.log('Fetched blogs:', response.data);
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError('Failed to fetch blogs. Please try again later.');
            
            // Check if it's a network error
            if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
                setError('Unable to connect to server. Please check if the backend is running on http://localhost:5000');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
            if (response.status === 200) {
                // Update the specific blog's likes count without refetching all blogs
                setBlogs(prevBlogs => 
                    prevBlogs.map(blog => 
                        blog._id === blog_id 
                            ? { ...blog, likes: blog.likes + 1 }
                            : blog
                    )
                );
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
            setError('Failed to like the post. Please try again.');
        }
    };

    const handleNewBlogSubmit = async (event) => {
        event.preventDefault();
        
        if (!admin) {
            setError('You need to be an admin to create blogs.');
            return;
        }

        try {
            const today = new Date();
            const date = today.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });

            const blogData = {
                newTitle,
                date,
                newContent,
                likes: 0
            };

            const response = await axios.post("http://localhost:5000/api/blogs", blogData);
            console.log('Blog created:', response.data);

            // Add the new blog to the existing blogs list
            setBlogs(prevBlogs => [response.data, ...prevBlogs]);
            
            // Clear form
            setNewTitle('');
            setNewContent('');
            setError('');
        } catch (error) {
            console.error('Error creating blog:', error);
            setError('Failed to create blog. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading blogs...</div>
            </div>
        );
    }

    return (
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">
                Latest <span className='text-orange-400'>Blogs</span> 📚
            </h2>

            {/* Error message */}
            {error && (
                <div className="text-center text-red-500 mb-4 p-4 bg-red-50 rounded mx-auto max-w-2xl">
                    {error}
                </div>
            )}

            {/* Blog creation form */}
            {admin ? (
                <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-2 border rounded focus:border-orange-500 focus:outline-none"
                            required
                        />
                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="p-2 border rounded focus:border-orange-500 focus:outline-none"
                            rows="4"
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
                        >
                            Add Blog
                        </button>
                    </form>
                </div>
            ) : (
                <div className="text-center text-gray-500 mb-8">
                    {admin === false && blogs.length === 0 
                        ? "No blogs available at the moment." 
                        : "You need to be an admin to create blogs."
                    }
                </div>
            )}

            {/* Blogs list */}
            {blogs.length > 0 ? (
                <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">
                                {blog.newTitle}
                            </h3>
                            <p className="blog-date text-gray-400 text-sm mb-4">
                                {blog.date}
                            </p>
                            <p className="blog-content text-gray-600 mb-4">
                                {blog.newContent}
                            </p>
                            <div className="flex items-center">
                                <span 
                                    className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200" 
                                    onClick={() => handleLike(blog._id)}
                                >
                                    👍 Like
                                </span>
                                <span className="ml-2 text-gray-600">
                                    {blog.likes} {blog.likes === 1 ? 'Like' : 'Likes'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && (
                    <div className="text-center text-gray-500 mt-8">
                        No blogs available at the moment.
                    </div>
                )
            )}

            <Footer/>
        </div>
    );
}

export default Blogs;