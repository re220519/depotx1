import React ,{ useState  }from "react";
import './style.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip} from 'antd';
import logo from "../../../asset/logo.png";
import {  Drawer } from 'antd';
import {AiOutlineMenu } from "react-icons/ai";
function Navbar() {
    const [open, setOpen] = useState(false); 
  return( 
 <>   
 <div className="header">
    <div className="headerBox1">
        <img className="logo" src={ logo} alt=" "/>
    </div>
    <div className="headerBox2">
        <div className="Nav">
            <div>Home</div>
            <div>Services</div>
            <div>Tracking</div>
            <div>Products</div>
            <div>Contact</div>
            <div>Partner/Vendor</div>
            <div onClick={()=>setOpen(true) }>Login </div>
            
        </div>
        <div className="headerBox3">
             <Tooltip title="search">
               <Button shape="circle"   icon={<SearchOutlined />} />
            </Tooltip>
        </div>
        <div className="headerBox4">
             <Button type="text" ghost disabled>Get Quote</Button>
        </div>
       
    </div>
    <div className="simenu" onClick={()=>setOpen(true) }> <AiOutlineMenu /></div>        
 </div>
 <Drawer className="drawer"  placement="right" onClose={()=>setOpen(false)} open={open} >
 <p>Home</p>
 <p>Services</p>
 <p>Tracking</p>
 <p>Products</p>
 <p>Contacts </p>
 <p >Partner/Vendor</p>
 <p>Login</p>
</Drawer>
</>
  );
}

export default Navbar;