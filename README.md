# React + Vite
Fullstack blog,,
Database:
Set up a PostgreSQL database, remember you can do it locally or in Neon
Create a posts table with at least the following fields, feel free to add more if needed
id: Primary key, auto-incrementing integer.
author:
title: Text field for the post title, can’t be NULL.
content: Text field for the post content, can’t be NULL.
cover: Text field for the image cover, can’t be NULL.
date : Date field, defaults to the creation time.
Frontend
Create a new React application using Vite
Use React Router for navigation between pages.
Your application should have the following pages:
Homepage: Displays a list of available posts.
Create Post Page: Contains a form to create a new post.
Post Details Page: Displays a single post’s information by ID with buttons to delete or update the post.
Make sure to handle form input and validation appropriately.
Backend
Set up a Node.js server using the built-in http module.
Use the pg package to connect to your PostgreSQL database.
Create the following endpoints for the posts resource:
GET /posts: Retrieve all posts.
GET /posts/:id: Retrieve a single post by ID.
POST /posts: Create a new post.
PUT /posts/:id: Update an existing post by ID.
DELETE /posts/:id: Delete a post by ID.
Features:
Homepage:

Display a list of all blog posts.
Each post should show a title, image and a snippet of the content.
Each post should be clickable and lead to the Post Details Page.
Create Post Page:

A form with fields for the title and content of the post.
A submit button to create a new post.
Validate the form to ensure both fields are filled in before submission.
Post Details Page:

Display the full title and content of the post.
Include buttons to Delete and Update the post.
The Delete button should remove the post from the database.
The Update button should lead to a form to update the post’s title and content.
Backend API:
GET /posts
Description: Retrieve all posts.
Response: A JSON array of all posts.
GET /posts/postId
Description: Retrieve a single post by ID.
Response: A JSON object of the post.
POST /posts
Description: Create a new post.
Request Body: JSON object with post fields.
Response: The newly created post as a JSON object.
PUT /posts/postId
Description: Update an existing post by ID.
Request Body: JSON object with post fields.
Response: The updated post as a JSON object.
DELETE /posts/postId
Description: Delete a post by ID.
Response: A success message or the deleted post as a JSON object.