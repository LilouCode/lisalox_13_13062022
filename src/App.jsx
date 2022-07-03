import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './_components/Header';
import Footer from './_components/Footer';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
