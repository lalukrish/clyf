import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
