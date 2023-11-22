import React from "react";
import './style.css';
import jafza from '../../asset/jafza.png';
import invstmntpark from '../../asset/invstmntpark.png';
import intrntcty from '../../asset/intrntcty.png';
import { Image } from 'antd';
import { Button } from 'antd';
import AlQusais from '../../asset/AlQusais.png';
import Alquoz from '../../asset/Alquoz.png';
import AlQusaisDubai from '../../asset/AlQusaisDubai.png';
import { ArrowDownOutlined } from '@ant-design/icons';

function Client( ) {
   
  return(
<>
 <div className="client">
       <div className="clientHeader">
           <h1 className="clientheader1"> Client Organizations
           </h1>
       </div>
       <div className="img1">
        <div className="img2">
         <div className="tex">   
           <Image  className="custom-image"
     src={invstmntpark}  preview={false} /> 
    <div className="te"> Dubai Investments Park</div>
    </div>
    <div className="tex">   
           <Image  className="custom-image"
     src={intrntcty}  preview={false} style={{ padding: '0px 20px' }}/> 
    <div className="te"> Dubai Internet City</div>
    </div>
    <div className="tex">   
           <Image  className="custom-image"
     src={jafza}  preview={false} style={{ padding: '0px 20px' }}/> 
    <div className="te"> Jafza Dubai</div>
    </div>
           </div>
           <div className="img3">
           <div className="tex">   
           <Image className="custom-image"
     src={AlQusais}  preview={false} /> 
    <div className="te"> Al Qusais Dubai</div>
    </div>
    <div className="tex">   
           <Image className="custom-image"
    src={Alquoz}  preview={false} /> 
    <div className="te"> Al Quoz Dubai</div>
    </div>
    <div className="tex">   
           <Image className="custom-image"
     src={AlQusaisDubai}  preview={false} /> 
    <div className="te"> Al Qusais Dubai</div>
           </div>
       </div>
       <div>
      
      
</div>

</div>
<div className="view">
<Button className="viewmore"> View more <br /><ArrowDownOutlined /> </Button>
</div>
   </div>

</>
 );
}
export default Client;