import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';

// import '../../Components/Css/Css.css'




const TableComponent = (props) => {





    const adduser = () => {
        console.log("adduser");
        const stateuse = {
            id: '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            errors: {
                id: '',
                fname: '',
                lname: '',
                email: '',
                phone: '',

            },
        }
        window.location.href = '/users/adduser'
    }


    // console.log(props.data);
    return (
        <div>

            <Button onClick={adduser} >ADD USER</Button>

            <Table striped bordered hover size="sm">

                <thead className="thead-light">
                    <tr>

                        <th scope="col">Profile</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Action</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        (props.data.length > 0) &&
                        props.data.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td><img className="profile_img" src={each.image} /></td>

                                    <td>{each.fname}</td>
                                    <td>{each.lname}</td>
                                    <td>{each.email}</td>
                                    <td>{each.phone}</td>
                                    <td>{each.Gender}</td>
                                    <td>{each.DOB}</td>
                                    <td> <button className=" btn btn-primary"
                                        type="button" name="edit_btn" onClick={()=>props.edit(each)} >
                                        Edit</button>
                                        <button className=" btn btn-danger"
                                            type="button" name="edit_btn" onClick={()=>props.del(each)} >
                                            Delete</button>
                                    </td>

                                </tr>
                            );
                        })
                    }

                    {/* {
                            (props.data.length > 0) &&
                            props.data.length.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.location}</td>
                                        <td>{data.phone_number}</td>
                                        <td>
                                            <Button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                                                type="button" name="tech_btn" >
                                                Edit</Button>
                                            <Button className="btn-danger del_btn" >Delete</Button>
                                        </td>
                                    </tr>
                                );
                            }
                            )
                        } */}


                </tbody>
            </Table>

            {/* <Button type="primary">ADD USER</Button> */}
            {/* <div className="table_div table">
                <Table  striped bordered hover size="sm">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">{props.}</th>
                            <th scope="col">Location</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {
                            (tabledata.arr.length > 0) &&
                            tabledata.arr.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.location}</td>
                                        <td>{data.phone_number}</td>
                                        <td>
                                            <Button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                                                type="button" name="tech_btn" >
                                                Edit</Button>
                                            <Button className="btn-danger del_btn" >Delete</Button>
                                        </td>
                                    </tr>
                                );
                            }
                            )
                        }
                    </tbody>
                </Table>
            </div> */}

        </div>
    );
}
export default TableComponent;