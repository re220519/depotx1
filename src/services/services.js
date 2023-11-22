import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import './style.css';
import serviceimg from "../../src/asset/serviceimg.png";


const Service = () => {
  const data1 = [
    'Warehouses of every type and size available',
    'Multiple locations and various grades',
    'Never a situation of non-availability',
    'Choose from many options',
    'Easy to choose',
  ];
  const data2 = [
    'A centralized dashboard to view your inventory',
    'Simple and uncomplicated process',
    'Work with a team of professionals',
    'No brokers or brokerage fee',
    'Pay for only what you use',
  ];

  return (
 <>
   <div className='service'>
      <div className='serviceheader'>
         <h1> Services We Offer</h1>
      </div>
       <div className='serviceitems'>
          <div className='serviceitems1'>
               <div className="item-list1">
                    {data1.map((item, index) => (
                      <div key={index} className="item">
                        <CaretRightOutlined 
                          className="custom-caret"
                           style={{
                            
                             color: index % 2 === 0 ? '#FF950B' : '#FFD000',
                           }}
                          
                        />
                        {item}
                      </div>
                    ))}
              </div>
                <div className="item-list2">
                    {data2.map((item, index) => (
                      <div key={index} className="item">
                        <CaretRightOutlined
                         className='custom-caret '
                          style={{
                           
                            color: index % 2 === 0 ? '#FF950B' : '#FFD000',
                          }}
                        />
                        {item}
                      </div>
                    ))}
                </div>
                </div>
               </div>
            
       <div className='serviceimg'>
            <img src={serviceimg} alt=""/>
       </div>
   </div>
 </>
  );
};
export default Service;
    
    