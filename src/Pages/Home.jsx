import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

function Home() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("created_at");

  useEffect(() => {
    getPosts();
  }, [orderBy]);

  async function getPosts() {

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order(orderBy, { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setPosts(data);
    }

  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      <h1>HobbyHub</h1>

      <Link to="/create">
        <button>Create Post</button>
      </Link>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
      >
        <option value="created_at">Newest</option>
        <option value="upvotes">Most Upvoted</option>
      </select>

      <h2>Posts</h2>

      {filteredPosts.length === 0 ? (

        <p>No posts found.</p>

      ) : (

        filteredPosts.map((post) => (

          <div key={post.id}>

            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <p>Upvotes: {post.upvotes}</p>

            <p>{new Date(post.created_at).toLocaleString()}</p>

            <hr />

          </div>

        ))

      )}

    </div>

  );

}

export default Home;