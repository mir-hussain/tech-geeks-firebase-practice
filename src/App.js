import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
