import './App.css';
import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
     <Header />
     <div className="app__page">
    <Sidebar />
   <RecommendedVideos />
    </div>
    </div>
  );
}

export default App;
