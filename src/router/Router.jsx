import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../shared/styles/GlobalStyle";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Community from "../pages/community/Community";

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </BrowserRouter>
  );
}
