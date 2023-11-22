import React ,{useState ,  useEffect} from "react";
 import Frame from "../../asset/frame.png";
 import Navbar from "../../header/components/navbar/navbar";
 import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
 import './style.css';
 import { Button  ,Modal} from "antd";
 import MyForm1 from "../../header/components/form1/form1.js";
 import MyForm from '../../header/form';
 
 function HomeScreen(){
   const [isModalOpen, setIsModalOpen] = useState(false);
 
   const showModal = () => {
     setIsModalOpen(true);
   };
   const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
 
   return(
     <>
     <div className="homescreen">
       <div className="homescreenbox">
         <div className="imagecontainer">
              <img className="imgg" src={ Frame } alt=" " />
              <div className="text-overlay">
                  <div className="socialmd">
                     <FaInstagram size={15} style={{ margin: '0 1px' }} /> <br />
                     <FaFacebook size={15}  style={{ margin: '0 1px' } } /> <br />
                     <FaTwitter size={15} style={{ margin: '0 1px' }} /><br />
                     <FaLinkedin size={15} style={{ margin: '0 1px' }} /><br />
                   </div>
               </div>
               <div className="header-overlay">
                   <Navbar /> 
               </div>
           </div>
           <div className="homescreenbox1">
             <div className="homescreenbox2">
                      <div className="leftcontent">
                      <div className="homeScreen-Txt1">Storage in Dubai</div>
                <div  className="homeScreen-Txt2">Unlimited storage anywhere</div>
                <div  className="homeScreen-Txt3">anytime at minimum cost.</div>
                <div className="homeScreen-Txt4">
                  <Button onClick={showModal} ghost  >Get Quote</Button>
                  <Modal title=" " open={ isModalOpen } onOk={handleOk} onCancel={handleCancel}footer={null} >
                    <MyForm1 />
                  </Modal>
                </div>
                      </div>
 
                    <div className="rightform">  <MyForm /> </div>   
             </div>
           </div>
       </div>
 
     </div>
     </>
   );
 }
 export default HomeScreen;