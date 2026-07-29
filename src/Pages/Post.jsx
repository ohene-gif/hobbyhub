import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";


function Post(){

  const {id}=useParams();
  const navigate=useNavigate();

  const [post,setPost]=useState(null);

  const [comment,setComment]=useState("");
  const [comments,setComments]=useState([]);


  useEffect(()=>{
    getPost();
    getComments();
  },[]);



  async function getPost(){

    const {data,error}=await supabase
      .from("posts")
      .select("*")
      .eq("id",id)
      .single();


    if(error){
      console.log(error);
    }
    else{
      setPost(data);
    }

  }



  async function upvote(){

    await supabase
      .from("posts")
      .update({
        upvotes: post.upvotes + 1
      })
      .eq("id",id);


    getPost();

  }



  async function deletePost(){

    await supabase
      .from("posts")
      .delete()
      .eq("id",id);


    navigate("/");

  }



  async function getComments(){

    const {data,error}=await supabase
      .from("comments")
      .select("*")
      .eq("post_id",id)
      .order("created_at",{ascending:false});


    if(!error){
      setComments(data);
    }

  }



  async function addComment(e){

    e.preventDefault();


    await supabase
      .from("comments")
      .insert([
        {
          post_id:id,
          text:comment
        }
      ]);


    setComment("");

    getComments();

  }



  if(!post){
    return <h2>Loading...</h2>
  }



  return(

    <div>


      <h1>{post.title}</h1>


      <p>{post.content}</p>


      {
        post.image_url &&
        <img src={post.image_url} width="300"/>
      }


      <h3>
        Upvotes: {post.upvotes}
      </h3>


      <button onClick={upvote}>
        👍 Upvote
      </button>


      <button onClick={deletePost}>
        Delete
      </button>


      <Link to={`/edit/${id}`}>
        <button>
          Edit
        </button>
      </Link>



      <hr/>


      <h2>Comments</h2>


      <form onSubmit={addComment}>

        <input
          placeholder="Write a comment"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />


        <button>
          Add Comment
        </button>


      </form>



      {
        comments.map((c)=>(

          <p key={c.id}>
            {c.text}
          </p>

        ))
      }



      <br/>

      <Link to="/">
        Back Home
      </Link>


    </div>

  );

}


export default Post;