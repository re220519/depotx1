import React ,{ useState, useEffect  }from "react";
import './style.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip} from 'antd';
import logo from "../../../asset/logo.png";
import {  Drawer } from 'antd';
import { SlMenu } from "react-icons/sl";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

     
  return( 
 <>  
  <div className={`header ${scrolled ? 'scrolled' : ''}`}>  
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
            <div>Login </div>
            
        </div>
        <div className="headerBox3">
             <Tooltip title="search">
               <Button shape="circle"   icon={<SearchOutlined />} />
            </Tooltip>
        </div>
        <div className="headerBox4">
             <Button type="text" ghost disabled>Get Quote</Button>
        </div>
        <div className="simenu" onClick={()=>setOpen(true) }> <SlMenu /></div>       
    </div>
         
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
</div>
</>
  );
}

export default Navbar;