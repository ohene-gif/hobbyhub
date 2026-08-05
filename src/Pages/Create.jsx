import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImageUrl] = useState("");

  async function createPost(e) {

    e.preventDefault();

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: title,
          content: content,
          image_url: image_url,
          upvotes: 0
        }
      ])
      .select();

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Post created successfully!");
    navigate("/");

  }

  return (

    <div>

      <h1>Create Post</h1>

      <form onSubmit={createPost}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <br />

        <button type="submit">
          Create Post
        </button>

      </form>

    </div>

  );

}

export default Create;