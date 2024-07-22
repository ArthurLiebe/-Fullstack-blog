import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    axios
    .get("http://localhost:3000/posts")
    .then((response) => setPosts(response.data))
    .catch((error) => console.error("Error fetching posts:", error));
}, []);

return (
    <div>
    <h1>Blog Posts</h1>
    {posts.map((post) => (
        <div key={post.id}>
        <h2>{post.title}</h2>
        <img
            src={post.cover}
            alt={post.title}
            style={{ maxWidth: "200px" }}
        />
        <p>{post.content.substring(0, 100)}...</p>
        <Link to={`/post/${post.id}`}>Read more</Link>
        </div>
    ))}
    </div>
);
}

export default HomePage;
