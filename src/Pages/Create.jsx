import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";


function Create(){

  const navigate = useNavigate();

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [image_url,setImageUrl] = useState("");


  async function createPost(e){

    e.preventDefault();


    const {error} = await supabase
      .from("posts")
      .insert([
        {
          title,
          content,
          image_url,
          upvotes: 0
        }
      ]);


    if(error){
      console.log(error);
    }
    else{
      navigate("/");
    }

  }



  return(

    <div>

      <h1>Create Post</h1>


      <form onSubmit={createPost}>

        <input
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <br/>


        <textarea
          placeholder="Content"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />


        <br/>


        <input
          placeholder="Image URL"
          value={image_url}
          onChange={(e)=>setImageUrl(e.target.value)}
        />


        <br/>


        <button>
          Create Post
        </button>


      </form>


    </div>

  );

}


export default Create;