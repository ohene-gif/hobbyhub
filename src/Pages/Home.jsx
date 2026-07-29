import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";


function Home(){

  const [posts,setPosts] = useState([]);


  useEffect(()=>{
    getPosts();
  },[]);



  async function getPosts(){

    const {data,error} = await supabase
      .from("posts")
      .select("*")
      .order("created_at",{ascending:false});


    if(error){
      console.log(error);
    }
    else{
      setPosts(data);
    }

  }



  return(

    <div>

      <h1>HobbyHub</h1>


      <Link to="/create">
        <button>
          Create Post
        </button>
      </Link>


      <h2>Posts</h2>


      {
        posts.length === 0 ? (

          <p>No posts yet</p>

        ) : (

          posts.map((post)=>(

            <div key={post.id}>

              <Link to={`/post/${post.id}`}>

                <h3>{post.title}</h3>

              </Link>


              <p>
                Upvotes: {post.upvotes}
              </p>


              <p>
                {post.created_at}
              </p>


            </div>

          ))

        )
      }


    </div>

  );

}


export default Home;