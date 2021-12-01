import React,{useState} from 'react';

import {Form, Input, DatePicker, InputNumber,Select, Space, Button} from "antd";
const { Option } = Select;
 const Newtourview=()=>{

    const onFinish=(values)=>{
        console.log(values);

    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 80,
            }}
          >
            <Option value="+250">+250</Option>
            <Option value="+256">+256</Option>
          </Select>
        </Form.Item>
      );
     return(
        
         <Form onFinish={onFinish}>
             <Form.Item name="title" label="Title" placeholde="title" rules={[{required:true}]}>
                 <Input/>

             </Form.Item>
             <Form.Item name="description" label="Description" rules={[{required:false}]}>
                 {/* <textarea/> */}
                 <Input.TextArea/>

             </Form.Item>
             <Space size={50}>
             <Form.Item name="dateScheduled" label="Date Scheduled" rules={[{required:true}]}>
                 <DatePicker/>

             </Form.Item>
             <Form.Item name="dueDate" label="Due Date" rules={[{required:true}]}>
                 <DatePicker/>

             </Form.Item>
             </Space>
             <br/>
             <Space size={50}>
             <Form.Item name="seats" label="Seats" rules={[{required:true}]}>
                 <InputNumber/>

             </Form.Item>
             <Form.Item name="available" label="Available" rules={[{required:true}]}>
                 <InputNumber/>

             </Form.Item>
             </Space>
             <Form.Item name="phone" label="Phone"  rules={[{required:true, message: 'Please input your phone number!'}]}>
                 <Input addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}/>

             </Form.Item>
             <Form.Item name="price" label="Price($)" rules={[{required:true}]}>
                 <InputNumber/>

             </Form.Item>
             <Form.Item name="tripDescription" label="About Tour" rules={[{required:true}]}>
                
                 <Input.TextArea/>

             </Form.Item>

             <Button htmlType="submit" type="primary"> Register Tour</Button>




         </Form>
        
     )

 }
 export default Newtourview;