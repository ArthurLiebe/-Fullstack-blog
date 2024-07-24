import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PostDetailsPage() {
const [post, setPost] = useState(null);
const [isEditing, setIsEditing] = useState(false);
const [editedTitle, setEditedTitle] = useState("");
const [editedContent, setEditedContent] = useState("");
const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
    axios
    .get(`http://localhost:3000/posts/${id}`)
    .then((response) => {
        setPost(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
    })
    .catch((error) => console.error("Error fetching post:", error));
}, [id]);

const handleDelete = () => {
    axios
    .delete(`http://localhost:3000/posts/${id}`)
    .then(() => navigate("/"))
    .catch((error) => console.error("Error deleting post:", error));
};

const handleUpdate = () => {
    axios
    .put(`http://localhost:3000/posts/${id}`, {
        ...post,
        title: editedTitle,
        content: editedContent,
    })
    .then((response) => {
        setPost(response.data);
        setIsEditing(false);
    })
    .catch((error) => console.error("Error updating post:", error));
};

if (!post) return <div>Loading...</div>;

return (
    <div>
    {isEditing ? (
        <div>
        <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
        ></textarea>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
    ) : (
        <div>
        <h1>{post.title}</h1>
        <img
            src={post.cover}
            alt={post.title}
            style={{ maxWidth: "400px" }}
        />
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p>Date: {new Date(post.date).toLocaleDateString()}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
    )}
    </div> );
}

export default PostDetailsPage;
