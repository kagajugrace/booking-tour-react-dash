import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Popover } from 'antd';
import AllAvailableTours from "../../assets/constants/tours.json";
import AllAvailableUsers from "../../assets/constants/users.json";
import {EyeOutlined, DeleteOutlined, EditOutlined, CheckSquareOutlined, CloseSquareOutlined} from "@ant-design/icons";

const users = [
  {
    title: 'Firstname',
    dataIndex: 'firstname',
    key: 'firstname',

  },
  {
    title: 'Lastname',
    dataIndex: 'lastname',
    key: 'lastname',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  {
    title: 'Phone',
    dataIndex: 'phone',
     key: 'phone',
  },
  {
   title:"Action",
      key:"action",
      render:(text, record) => (

        <Space size="middle">
        <Popover content="Accept">
          <a style={{color:"green"}}><CheckSquareOutlined /></a></Popover>
          <Popover content="Decline">
          <a style={{color:"red"}}>{<CloseSquareOutlined />}</a></Popover>
        </Space>
      )
  },

];

   const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',

  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },

  {
    title: 'Seats',
    dataIndex: 'seats',
    key: 'dueDate',
  },

  {
    title: 'Price (Rwf)',
    dataIndex: 'price',
     key: 'dueDate',
  },

{
   title:"Action",
      key:"action",
      render:(text, record) => (

        <Space size="middle">
          <a><EditOutlined/></a>
          <a>{<EyeOutlined/>}</a>
          <a style={{color:"red"}}>{<DeleteOutlined/>}</a>
        </Space>
      )
  },
];
const AllTour=()=>{
 
    return(
        // <h1> All Tour</h1>
        <>
        <Table columns={columns} dataSource={AllAvailableTours}></Table>
        <Table columns={users} dataSource={AllAvailableUsers}></Table>
        </>
    )
}
export default AllTour;