import { Form, Input, Button } from 'antd';
import './styles.css';

const MyForm = () => {
    
  const onFinish = (values) => {

    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    ><Form.Item>
        <div className='line'>
        <p className='headerquote headerpara'> Get Free Quote</p> 
       <p className='headerpara1'>Submit your requirements and leave</p>
        <p className='headerpara1'>everything else to us! </p> </div>
        </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        
      >
        </Form.Item>
        <div className="input-container">
        <Input />
</div>
      <Form.Item
        label="Phone "
        name="phoneNumber"
        
      >
        
      </Form.Item>
      <div className="input-container">  
      <Input />
      </div>
      <Form.Item
        label="Email"
        name="email"
       
      >
        
      </Form.Item>
      <div className="input-container">
      <Input />
      </div>
      <Form.Item label="Notes" name="notes">
        
      </Form.Item>
      <div className="input-container">
      <Input.TextArea />
      </div>
      <Form.Item></Form.Item>
      <div className="headerBox">
             <Button type="text" ghost>Get Quote</Button>
        </div>
    </Form>
    </>
  );
};

export default MyForm;
