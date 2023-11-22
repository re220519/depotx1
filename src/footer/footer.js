import React from "react";
import './style.css';
import logos  from '../asset/logos.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button as AntButton } from 'antd'; 
import {MailOutlined} from '@ant-design/icons';
import { EnvironmentOutlined } from "@ant-design/icons";
function Footer(){
    return(
<>
 <div className="footer">
    <div className="footer1">
       <div  className="footer11">
        <div className="first">
           <div className="first1">
               <div className="logosocial">
                   <div className="logos1">
                      <img className="logos" src={ logos} alt=" "/>
                   </div>
                   <div className="social">
                       <FaInstagram size={15} style={{ margin: '0 0px', backgroundColor: 'white', borderRadius: '50%'}} /> 
                         <FaFacebook size={15}  style={{ margin: '0 10px', color: 'white', borderRadius: '50%' } } /> 
                       <FaTwitter size={15} style={{ margin: '0 10px' , backgroundColor: 'white', borderRadius: '50%' }} />
                        <FaLinkedin size={15} style={{ margin: '0 10px', color: 'white', borderRadius: '50%' }} />
                   </div>
                </div> 
              <div className="Emails">
                   <div  className="email">
                   <AntButton className="anttbutton1"> <MailOutlined className="mailicon"/>support@depotx.com</AntButton>
                     </div>
                    <div> 
                    <AntButton className="anttbutton1"> <MailOutlined className="mailicon" />sales@depotx.com</AntButton>
                        </div>
                   <div> 
                      <AntButton className="anttbutton1"> <EnvironmentOutlined  className="mailicon"/>  Calicut,Kerala,India  8560545</AntButton> 
                     </div>
             </div>
            </div> 
        </div>
        <div className="second">
            <div className="second1">
                 <div className="srvces"> services</div>
                 <div className="srvcsmenu">
                      <div className="ser">Pricing</div>
                      <div className="ser">Track Order</div>
                      <div className="ser">Platform</div>
                      <div className="ser">Produts</div>
                      <div className="ser">Resources</div>
                      <div className="ser">Partners</div>
                 </div>
            </div>
        </div>
        <div className="third">
            <div className="third1">
                <div className="features">Features</div>
                <div className="featuresmenu">
                    <div>Cash on Delivery</div>
                    <div>Serviceable Pin Codes </div>
                    <div>API Integration</div>
                    <div>Multiple Pickup Locations</div>
                    <div>Print Shipping Labels</div>
                    <div>Email & SMS Notifications</div>
                    <div>Amazon Self-Ship </div>
                    <div>All Features</div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className="footer2">
        <div > <hr className="hr"/></div>
    </div>
    <div className="footer3">
        <div className="copyright">Copyright © 2022 Cargoz FZE. All rights reserved.</div>
    </div>
 </div>
</>
    );
}

export default Footer;