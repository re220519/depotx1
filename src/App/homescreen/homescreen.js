import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../header/components/navbar/navbar";
import Frame from "../../asset/frame.png";
import './style.css';
import MyForm from "../../header/form";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from "antd";

function HomeScreen(){
    const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    // Navigate to the form page
    navigate('/MyForm');
  };
 return(
    <>
   <div className="homescreen-box1">
    <div className="homescreen-box2">
         <Navbar />
         <div className="homescreen-box3">
         
           <img className="homescreenimg" src={ Frame } alt="" /> 
           
          
           <div className="content-overlay">
           {/* <h1 className="helo">Storage in  Dubai <br /> <span>Unlimited  storage  anywhere <br /> anytime at minimum cost.
</span></h1> */}

          </div>
          </div>
         </div>
         </div>
          
         
    
   </>
 );
}
export default HomeScreen;

