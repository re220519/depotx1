import React from "react";
import './style.css';
import { Button as AntButton } from 'antd'; 

 function Button( ){
   return(
  <>
    <div className="antbuton">
        <div className="ant">
    <AntButton className="antbutton">Get Quote</AntButton> </div>
    </div>
  </>
   ) ;
}
export default Button;