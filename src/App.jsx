import React from 'react'
import Navbar from "./components/Navbar";

import Products from "./components/Products";
import About from "./components/About";

import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Banner from './components/Banner';
import WhyChoose from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="font-sans max-w-7xl mx-auto">
      <Navbar />
      <Banner></Banner>
      <WhyChoose></WhyChoose>
      
      <Products />
        <About />
     
    
     <Reviews/>
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
}
