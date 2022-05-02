import React, { useState } from "react";
import Header from "../Header/header";
import '../Css/technician.css';






function Technician() {
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

       
    }
    const [adddata, setAdddata] = useState({
        name: '',
        location: '',
        phone_number: ''

    })
    const Delete = (ele) => {

        const { arr } = tabledata;
        arr.splice(ele, 1)
        console.log('deleted', ele)
        setTabledat({ ...tabledata, arr: arr })
    }



    const AddTechnician = () => {
        console.log("we are in adding Technician ");


    }

    const getInputValues = (e, AddTechnician) => {
        setAdddata({ ...adddata, [AddTechnician]: e.target.value })

    }

    // console.log("enterd data",adddata);
    const onlyNumbers = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();


        }
        return true;

    }
    const Edit = (data) => {
        setIsAdd(false)
        setAdddata(data)
        


    }



    return (
        <div className="main_div">
            <Header />
            <header className="head">
                <img className="logo_img" src="../Downloads/logo.png" alt=" No image found" />
                <ul className="list">
                    <li>Dashboard</li>
                    <li>Customer<legend></legend>
                    </li>
                    <li>Technician</li>
                    <img className="profile_img" src="../Downloads/profile.svg" alt="No image found" />
                </ul>

                <hr />
            </header>
            <p className="tech_component">TECHNICIAN</p>
            <div className="drawer_component">
                <div className="container mt-3">

                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"> </button> */}
                    <button className="add_btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                        type="button" name="tech_btn" onClick={AddTechnician}>
                        + ADD TECHNICIAN</button>


                </div>

                {/* <!-- The Modal --> */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                {
                                    isAdd ? <p className='title_name'>Add Customer</p> : <p className='title_name'>Edit Customer</p>

                                }
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <input type='text' name='name' placeholder="Enter Name" value={adddata.name} onChange={(e) => getInputValues(e, 'name')} />
                                        {
                                            (!adddata.name && tabledata.showError) ?
                                                <div className="error_mgs">Enter Name</div> : ''
                                        }
                                    </div>
                                    <div>
                                        <input type='text' name='location' placeholder="Enter Location" value={adddata.location} onChange={(e) => getInputValues(e, 'location')} />
                                        {
                                            (!adddata.location && tabledata.showError) ?
                                                <div className="error_mgs">Enter Location</div> : ''
                                        }
                                    </div>
                                    <div>
                                        <input type="text" name="number" placeholder="Enter Number" value={adddata.number} onChange={(e) => getInputValues(e, 'number')}
                                            onKeyPress={onlyNumbers} />
                                        {
                                            (!adddata.phone_number && tabledata.showError) ?
                                                <div className="error_mgs">Enter Phone Number</div> : ''
                                        }
                                        {/* <input type='text' name='phone_number' placeholder="Enter Phone Number" value={adddata.phone_number} onChange={(e) => onlyNumbers(e, 'phone_number')} /> */}
                                    </div>
                                    <button onClick={SubmitTechnician}  >submit</button>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pos_rel">
                    <input className="search_btn" type="text" name="search" placeholder="Enter Search" />

                    <div className="search_icon">
                        <img src="search_icon.svg" alt="No image found" />
                    </div>
                    <div className="assing_compo">
                        <div className="abc">

                            <label className="assign_status" htmlFor="assign">ASSIGNED STATUS</label>
                            <div className="assign_not">
                                <input type="checkbox" name="assigned" />
                                <label htmlFor="assigned">Assigned</label>
                            </div>
                            <div className="assign_not">
                                <input type="checkbox" name="assigned" />
                                <label htmlFor="assigned">Not Assigned</label>
                            </div>
                            <hr className="line_compo" />

                            <div className="abc">
                                <label className="assign_status" htmlFor="assign">RATING</label>

                                <div className="assign_not">
                                    <input type="checkbox" name="assigned" />
                                    <label htmlFor="assigned">Not Assigned</label>
                                </div>
                                <div className="assign_not">
                                    <input type="checkbox" name="assigned" />
                                    <label htmlFor="assigned">Not Assigned</label>
                                </div>
                                <div className="assign_not">
                                    <input type="checkbox" name="assigned" />
                                    <label htmlFor="assigned">Not Assigned</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="inner_div">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>PhoneNumber</th>
                                    <th>Action</th>

                                    {/* <th>Country</th> */}
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
                                                    {/* <button className="btn-primary" onClick={AddTechnician}>Edit</button> */}
                                                    <button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                        type="button" name="tech_btn" onClick={AddTechnician}>
                       Edit</button>
                                                    <button className="btn-danger" onClick={() => Delete(index)}>Delete</button>
                                                </td>

                                            </tr>


                                        );
                                    }
                                    )
                                }
                            </tbody>

                        </table>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default Technician;
