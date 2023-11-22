import React from "react";
import HomeScreen from './homescreen/homescreen';
import Service from "../services/services";
import Warehouse from "../warehouse/warehouse";
import Client from './client/client';
import Button from "../button/button";
import Footer from "../footer/footer";
const Home = () => {
   return(
    <>
    <HomeScreen />
     <Service />
     <Warehouse />
<Client />
   <Button />
   <Footer />
        </>
   
   ) ;
};
export default Home;