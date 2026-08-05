# HobbyHub

## Overview

HobbyHub is a React web application where users can create and interact with posts based on their hobbies and interests.

Users can create posts, view a community feed, search and sort posts, open individual post pages, upvote posts, leave comments, edit posts, and delete posts.

The application uses React for the frontend, Supabase as the backend database, and React Router for navigation between pages.


## Features

- [x] Create new posts
- [x] Add post title, content, and image URL
- [x] View posts feed
- [x] Search posts by title
- [x] Sort posts by newest
- [x] Sort posts by most upvoted
- [x] View individual post pages
- [x] Edit existing posts
- [x] Delete posts
- [x] Upvote posts
- [x] Add comments to posts
- [x] Display post creation time
- [x] React Router navigation
- [x] Supabase database integration
- [x] Implement CRUD operations

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- React Router
- Supabase

## Database

Supabase stores all application data.

### Posts table includes:

- id
- title
- content
- image_url
- upvotes
- created_at

### Comments table includes:

- id
- post_id
- text
- created_at

## Running Locally

Clone the repository:

```bash
git clone https://github.com/ohene-gif/hobbyhub.git
