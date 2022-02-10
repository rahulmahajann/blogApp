import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Home from "./components/HomePage/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDescription from "./components/Posts/PostDescription";
import CreatePost from "./components/Posts/CreatePost";
import UpdatePost from "./components/Posts/UpdatePost";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/Signup";
import ResetPassword from "./components/LoginPage/ResetPassword";
import ChangePassword from "./components/LoginPage/ChangePassword";

function App() {

  
  const [tokenHai, setTokenHai] = useState();
  
  useEffect(() => {
    setTokenHai(localStorage.getItem("token"));
  }, [localStorage.getItem("token")])
  
  
  const style = {
    marginTop: tokenHai ? 64 : 0
  }

  return (
    <div>
      <BrowserRouter>
            <Box style={style}>
                <Routes>
                  <Route path="/login" element = {<Login />} />
                  <Route path='/' exact element={<Home />} />
                  <Route path='/detail/:id' element={<PostDescription />} />
                  <Route path='/createblog' element={<CreatePost />} />
                  <Route path='/updateblog/:id' element={<UpdatePost />} />
                  <Route path='/signUp' element={<SignUp />} />
                  <Route path='/resetpassword' element={<ResetPassword />} />
                  <Route path='/changePassword' element={<ChangePassword />} />
                </Routes>
            </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
