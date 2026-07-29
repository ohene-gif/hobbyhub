import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Post from "./Pages/Post";
import Edit from "./Pages/Edit";


function App(){

  return(
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/create" element={<Create />} />

      <Route path="/post/:id" element={<Post />} />

      <Route path="/edit/:id" element={<Edit />} />

    </Routes>
  );

}

export default App;