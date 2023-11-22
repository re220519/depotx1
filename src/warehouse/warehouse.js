import React from "react";
import './stylew.css';
import logistics from '../asset/logistics.png';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';


function Warehouse(){
 return(
 <>
<div className="warehouse">
    <div className="warehouseheader">
         <h1 className="warehouseheader1">Type of Warehouse </h1>
    </div>
    <div className="logistics">
        <img src={logistics} alt=""/>  
    </div>
    <div className="itemlist">
        <div className="list1">
           <p>Warehouses come in various types to serve different purposes. Distribution warehouses are designed for efficiently storing and shipping products to customers. Cold storage warehouses maintain low temperatures for perishable goods. Manufacturing warehouses support production processes by storing raw materials and finished products. </p>
        </div>
         <div className="list2">
             <p>Bulk storage warehouses house large quantities of non-perishable items. E-commerce and fulfillment centers are optimized for processing online orders quickly. Each type of warehouse is tailored to specific needs within the supply chain, ensuring goods are stored and handled appropriately.</p>
         </div>
    </div>
    <div className="row">
        <div className="roww">
           <div className="row1">
                <div className="ro">
                <Button className="row1button" type="text">
      <span>General AC Warehouse</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Free Zone Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }} />
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Furniture Storage</span>
      
      <RightCircleOutlined  style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>3PL Logistics</span>
      <RightCircleOutlined  style={{ color: '#D3D3D3' }}/>
    </Button>
                </div> 
                <div>
                <Button className="row1button" type="text">
      <span>DG Storage</span>
      <RightCircleOutlined  style={{ color: '#D3D3D3' }}/>
    </Button>
    </div>
    </div>
<div className="row2">
                <div className="ro">
                <Button className="row1button" type="text">
      <span>General Warehouse</span>
      <RightCircleOutlined  style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Open Yard</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Rice & Maida Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Pet Prdv Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div> 
                <div>
                <Button className="row1button" type="text">
      <span>Dark Store</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>         
           </div>
           
           <div className="row3">
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Luxury Vehicle Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type="text">
      <span>Medical Equipment Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>
                <div className="ro">
                <Button className="row1button" type='text' >
      <span>Luxury Vehicle Storage</span>
      <RightCircleOutlined style={{ color: '#D3D3D3' }}/>
    </Button>
                </div>    
           </div>
           <div></div>
    </div>
    </div>
</div>

 </>
 );
}

export default Warehouse;