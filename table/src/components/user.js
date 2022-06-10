import React, { useState } from "react";




import TableComponent from "../components/table";



const Usersdata=()=>{
      const [tabledata, setTabledat] = useState({
        arr: [
        {
            id: 1,
            fname: 'Yeshvanth',
            lname: 'Prathiapti',
            email: 'yeshwanth.prathpati@codexbox.com',  
            phone: '8008100333',
            Gender: 'male',
            DOB: ("23/02/1995"),
            image:''
        },
        {
            id: 2,
            fname: 'Lokesh',
            lname: 'Thadikamalla',
            email: 'lokes.thadikamalla@codexbox.com',
            phone: '9618004758',
            Gender: 'male',
            DOB: ("03/ 08/1999"),
            image: "",
        },
        {
            id: 3,
            fname: 'Kiranmai',
            lname: 'Ubbani.Ruben',
            email: 'kiranmai.ubbani@codexbox.com',
            phone: '9885565700',
            Gender: 'female',
            DOB: ("15/04/1997"),
            image: "",
 
        },
        {
            id: 4,
            fname: 'mounika',
            lname: 'Puttaparthi',
            email: 'mounika.puttaparthi@codexbox.com',
            phone: '9573104064',
            Gender: 'female',
            DOB: ("11/09/1995"),
            image: "",
        },
        {
            id: 5,
            fname: 'pavanreddy',
            lname: 'Ireddy',
            email: 'pavan.ireddy@codexbox.com',
            phone: '7893882164',
            Gender: 'male',
            DOB: ("11/09/1995"),
            image: "",
        },
        {
            id: 6,
            fname: 'Lakshmireddy',
            lname: 'Keesari',
            email: 'lakshmireddy.keesari@codexbox.com',
            phone: '9703123245',
            Gender: 'male',
            DOB: ("02/08/1996"),
            image: "",
        },
        {
            id: 7,
            fname: 'Divya',
            lname: 'Muthyala',
            email: 'Divya.Muthyala@codexbox.com',
            phone: '8019915527',
            Gender: 'Female',
            DOB: ("20/05/1995"),
            image: "",
 
        },
        {
            id: 8,
            fname: 'Ruthvika',
            lname: 'kudumula',
            email: 'Ruthvika.kudumula@codexbox.com',
            phone: '8309964287',
            Gender: 'Female',
            DOB: Date("07/04/1998"),
            image: "",
        },
        {
            id: 9,
            fname: 'Sangeetha',
            lname: 'Shringare',
            email: 'sangeetha.shringare@codexbox.com',
            phone: '9511226260',
            Gender: 'Female',
            DOB: Date("15/08/1995"),
            image: "",
 
        },
        {
            id: 10,
            fname: 'Hareesha',
            lname: 'Anchula',
            email: 'hareesharao2662@gmail.com',
            phone: '7731017512',
            Gender: 'female',
            DOB: Date("22/08/1996"),
            image: "",
        },
        {
            id: 11,
            fname: 'Rajasekhar',
            lname: 'Tadepoyina',
            email: 'rajasekhar.tadepoyina@codexbox.com',
            phone: '9618888132',
            Gender: 'male',
            DOB: Date("30/08/1997"),
            image: "",
        },
        {
            id: 12,
            fname: 'vinay kumar',
            lname: 'vuppula',
            email: 'vinaykumar.vuppula@codexbox.com',
            phone: '9121695791',
            Gender: 'male',
            DOB: Date("03/12/1997"),
            image: "",
        },
        {
            id: 13,
            fname: 'Dharanesh',
            lname: 'Midatala',
            email: 'dharanesh.midatala@codexbox.com',
            phone: '9182174034',
            Gender: 'male',
            DOB: Date("31/01/1998"),
            image: "",
        },
        {
            id: 14,
            fname: 'Rahul',
            lname: 'Vangala',
            email: 'rahul.vangala@codexbox.com',
            phone: '9550524020',
            Gender: 'male',
            DOB: Date("22/06/1995"),
            image: "",
        },
        {
            id: 15,
            fname: 'Saicharan',
            lname: 'Chintala',
            email: 'saicharan.chintala@codexbox.com',
            phone: '9666443645',
            Gender: 'Male',
            DOB: Date("26/12/1995"),
            image: "",
        },
        {
            id: 16,
            fname: 'Kalyani',
            lname: 'Polasi',
            email: 'kalyani.polasi@codexbox.com',
            phone: '9182293015',
            Gender: 'Female',
            DOB: Date("13/05/2000"),
            image: "",
        },
        {
            id: 17,
            fname: 'Vijetha',
            lname: 'Ragi',
            email: 'Vijetha.Ragi@codexbox.com',
            phone: '8501065037',
            Gender: 'female',
            DOB: Date("27/12/1999"),
            image: "",
        },
        {
            id: 18,
            fname: 'Indraja',
            lname: 'Mendu',
            email: 'indraja.Mendu@codexbox.com',
            phone: '8096306202',
            Gender: 'Female',
            DOB: Date("01/05/1996"),
            image: "",
        },
        {
            id: 19,
            fname: 'Shankar',
            lname: 'Boddu',
            email: 'shankar.boddu@codexbox.com',
            phone: '8328304976',
            Gender: 'Male',
            DOB: Date("02/07/1997"),
            image: "",
        },
        {
            id: 20,
            fname: 'Padmaja',
            lname: 'Gajam',
            email: 'padmaja.gajam@codexbox.com',
            phone: '7207524414',
            Gender: 'female',
            DOB: Date(" 08/05/1998"),
            image: "",
 
        },
        {
            id: 21,
            fname: "venkateswarlu",
            lname: "kethi",
            email: "venkateshwarlu.kethi@codexbox.com",
            phone: 9182713577,
            gender: "M",
            DOB: Date("02/07/1998"),
            image: "",
        },
        {
            id: 22,
            fname: 'sathish',
            lname: 'dontheboina',
            email: 'sathish.dontheboina@codexbox.com',
            phone: '7093763322',
            Gender: 'male',
            DOB: Date("09/08/1998"),
            image: "",
        }],

        showError: false,

    })
    const deletefun = (each) => {
        
        console.log(each)

        const list=tabledata.arr.filter((person)=>person.id !==each.id)
        setTabledat({...tabledata,arr:list})
        
    }
    const editfun = (each) => {
        console.log("edit",each);

    }

  
    return(
        <div>
           
        <TableComponent data={tabledata.arr} del={deletefun} edit={editfun} />
        </div>
    );
}
export default Usersdata;