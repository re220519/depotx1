import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import './stylesf.css';

const MyForm1 = ({ isVisible, onClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    // Handle form submission logic here
  };

  return (
    <div className='fr1'>
      <Form  className="fr" form={form} onFinish={onFinish}>
        
        <Form.Item className='custom-label1'>
        <div className='line'>
        <p className='headerpara'> Get Free Quote</p> 
       <p className='headerpara1'>Submit your requirements and leave</p>
       <p>  </p>
        <p className='headerpara1'>everything else to us! </p> </div>
        </Form.Item>
      
        <Form.Item
          label="Name"
          name="name"
          className="custom-label"
        >
           
           
           
</Form.Item>
<Input className="custom-input" />
        <Form.Item
          label="Email"
          name="email"
          className="custom-label"
        >
         
        </Form.Item>
        <Input className="custom-input" />
        <Form.Item
          label="Mobile Number"
          name="phoneNumber"
          className="custom-label"
        >
          
        </Form.Item>
        <Input className="custom-input" />
        <Form.Item
          label="Note"
          name="note"
          className="custom-label"
        >
          
        </Form.Item>
        <Input.TextArea className="custom-inputl" style={{ height:'30px'}}  />
        <Form.Item className="custom-submit">
          <Button type="text1"  ghost disabled >Get Quote
             </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyForm1;
