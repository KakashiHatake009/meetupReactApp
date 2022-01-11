import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/newmeetup" element={<NewMeetupPage />} />
        <Route path="/fav" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
