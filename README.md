# HobbyHub

## Overview

HobbyHub is a React web application that allows users to create, view, edit, delete, and interact with posts based on their interests. Users can create posts, view a feed of posts, upvote posts, and participate in discussions through comments.

The application uses Supabase as the backend database and React Router for navigation between pages.

## Features

- [x] Create new posts
- [x] View posts feed
- [x] View individual post pages
- [x] Edit existing posts
- [x] Delete posts
- [x] Upvote posts
- [x] Add comments to posts
- [x] Display post creation time
- [x] React Router navigation
- [x] Supabase database integration

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
