import React, { useState } from 'react'
import { Table, Button, Input, Modal, Form } from 'antd'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import './Css/customer.css'
import Logo from './Images/exp_logo.png'
import Profile from './Images/profile.svg'
import Search from './Images/search_icon.svg'


const { Sider, Header, Content } = Layout;


function Customer() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [tabledata, setTabledat] = useState({
        arr: [
            {
                id: 1,
                name: 'lokesh',
                location: 'hyd',
                phone_number: '1236547890'

            },
            {
                id: 2,
                name: 'pavan',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 3,
                name: 'Lakshmi Reddy',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 4,
                name: 'Rajashaker',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 5,
                name: 'Rahul',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 6,
                name: 'Satish',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 7,
                name: 'vinay',
                location: 'hyd',
                phone_number: '1236547890'


            },
            {
                id: 8,
                name: 'lokesh',
                location: 'hyd',
                phone_number: '1236547890'

            },

        ],
        showError: false,

    })
    const [isAdd, setIsAdd] = useState(true)
    const [adddata, setAdddata] = useState({
        name: '',
        location: '',
        phone_number: ''

    })
    const Delete = (key, e) => {

        const { arr } = tabledata;
        arr.splice(key, 1)
        console.log('deleted')
        setTabledat({ ...tabledata, arr: arr })
    }
    const showModal = () => {
        setIsModalVisible(true);

    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const getInputValues = (e, AddTechnician) => {
        setAdddata({ ...adddata, [AddTechnician]: e.target.value })

    }
    const SubmitTechnician = (e) => {
        setIsAdd(true)
        e.preventDefault()
        const { arr } = tabledata;
        if (isAdd) {
            if (adddata) {

                arr.push(adddata)
                setTabledat({ ...tabledata, arr: arr })

                const obj = {
                    name: '',
                    location: '',
                    phone_number: ''
                }
                setAdddata(obj)

            }
        }
        else {
            let list = [];
            console.log("in edit")
            if (adddata.name && adddata.location && adddata.phone_number) {
                console.log('name', adddata)
                // for (let index of arr) {
                //     if (index.id == adddata.id) {
                //         list.push(adddata)
                //     } else {
                //         list.push(index)
                //     }
                // }
                const getIndex = arr.findIndex((each) => each.id === adddata.id);
                arr[getIndex] = adddata


            }
            setTabledat({ ...tabledata, arr: arr })

        }

        setIsModalVisible(false);
    }
    const Edit = (data) => {
        setIsAdd(false)
        setAdddata(data)
        setIsModalVisible(true);


    }
    console.log(tabledata.arr);

    return (


        <div className='main_clss'>
            <Layout className='main_clss'>
                <div className='sider_clss'>
                    <Sider className='sider_clss'  >
                        <img className='logo_img' src={Logo} alt='logo_img' />
                        <h1 className='customer_text'>CUSTOMERS</h1>
                        <Button type="primary" className='btn_addcustomer' onClick={showModal} >ADD CUSTOMERS</Button>

                        <div className='div_clss'>

                            <Input className='input_search' size="large" placeholder='Enter search' />
                            <img className='div_clss2' src={Search} alt='srearch_img' />
                        </div>
                        <div>
                            <p className='service_clss'>SERVICE STATUS</p>
                        </div>
                    </Sider>
                </div>
                <Layout >
                    <Header className='header_clss'>
                        <Row>
                            <Col span={5}></Col>
                            <Col span={3}><a className='nav_items' href='/dashboard'>Dashboard</a></Col>
                            <Col span={3}><a className='nav_items' href='/customer'>Customer</a></Col>
                            <Col span={3}><a className='nav_items' href='/technician'>Technician</a></Col>
                            <Col span={3}><img className='profile' src={Profile} alt='profile_img' /></Col>
                        </Row>
                    </Header>
                    <Layout className='div_2' ></Layout>
                    <Content className='div_table'>
                        {/* <Table dataSource={tabledata.arr} columns={columns} /> */}


                        <table >
                            <thead className='table_clss'>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>PhoneNumber</th>
                                    <th>Action</th>

                                    {/* <th>Country</th> */}
                                </tr>
                            </thead>
                            <tbody className='thead_clss'>

                                {
                                    (tabledata.arr.length > 0) &&
                                    tabledata.arr.map((data, index) => {
                                        return (

                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.location}</td>
                                                <td>{data.phone_number}</td>

                                                <td>
                                                    <Button type='primary' className="btn-primary" onClick={() => Edit(data)}>Edit</Button>
                                                    <Button type='primary' className="btn-danger btn_edit" onClick={() => Delete(index)}>Delete</Button>
                                                </td>

                                            </tr>


                                        );
                                    }
                                    )
                                }
                            </tbody>

                        </table>


                    </Content>

                </Layout>
            </Layout>


            {/* Model Layout */}
            <Modal title="" visible={isModalVisible} onOk={SubmitTechnician} onCancel={handleCancel} >
                {
                    isAdd ? <p className='title_name'>Add Customer</p> : <p className='title_name'>Edit Customer</p>

                }
                <Form>
                    <Input className='input_ele' type='text' autoComplete="off" name='location' placeholder="Enter Location" value={adddata.location} onChange={(e) => getInputValues(e, 'location')} />
                    <Input className='input_ele' type='text' autoComplete="off" name='name' placeholder="Enter Name" value={adddata.name} onChange={(e) => getInputValues(e, 'name')} />
                    <Input className='input_ele' type='text' autoComplete="off" name='phone_number' placeholder="Enter Phone Number" value={adddata.phone_number} onChange={(e) => getInputValues(e, 'phone_number')} />
                    {/* <Button className='input_ele'  type='submit' onClick={SubmitTechnician}>submit</Button> */}
                </Form>
            </Modal>
        </div>

    );
}
export default Customer;