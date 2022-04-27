import React, { useState } from "react";
import Button from "../botton/button";
import '../Css/calculate.css'


function Calculator(props) {

    // const [num1, setNum1] = useState('')
    // const [num2, setNum2] = useState('')
    // const [ope, setOpe] = useState('')
    const [numobj, setNumobj] = useState({
        num1: '',
        num2: '',
        opt: '',
        output: ''

    })
    const Cal = (num) => {
        if (num == '+' || num == '-' || num == '*' || num == '/') {
            setNumobj({
                ...numobj,
                opt: num,
                output: num,
            });
            return;
        }
        if(numobj.num1&&numobj.opt){
            setNumobj({
                ...numobj,
                num2:numobj.num2+num,
                output:numobj.num2+num
            });
            return;
        }
        setNumobj({...numobj,
        num1:numobj.num1+num,
        output:numobj.num1+num,
        })
    }






    // const Calw = (num) => {

    //     console.log(num)
    //     if (num == '+' || num == '-' || num == '*' || num == '/') {
    //         setOpe(num);
    //         console.log('ope:', num);
    //         return;
    //     }
    //     if (num1 && ope) {
    //         setOutput(num)
    //         setNum2(Number(num))
    //         return;
    //     }
    //     setOutput(num)
    //     setNum1(Number(num))
    // }


    const Calculate = () => {
      let val=0
        switch (numobj.opt) {
            case '+':
               val=Number(numobj.num1) +Number(numobj.num2) 
                break;
            case '-':
                val=Number(numobj.num1) -Number(numobj.num2) 
                break;
            case '*':
                val=Number(numobj.num1) *Number(numobj.num2) 
                break;
            case '/':
                val=Number(numobj.num1) /Number(numobj.num2) 
                break;
        }
        setNumobj({...numobj,output:val})
    }
   const Clear=()=>{
       setNumobj({
           ...numobj,output:'',num1:'',num2:'',opt:''
       })
   }
  
    return (
        <div >
            <div className="flex-container">
            <input className="input_clss" type='text' value={numobj.output} />
            </div>
            <button  className="btn_clss" onClick={Clear}>Clear</button>
            <div className="flex-container">
                <Button num='1' getMethod={Cal} />
                <Button num='2' getMethod={Cal} />
                <Button num='3' getMethod={Cal} />
            </div>
            <div className="flex-container">

                <Button num='4' getMethod={Cal} />
                <Button num='5' getMethod={Cal} />
                <Button num='6' getMethod={Cal} />
            </div>
            <div className="flex-container">

                <Button num='7' getMethod={Cal} />
                <Button num='8' getMethod={Cal} />
                <Button num='9' getMethod={Cal} />
            </div>
            <div className="flex-container">

                <Button num='0' getMethod={Cal} />
                <Button num='+' getMethod={Cal} />
                <Button num='-' getMethod={Cal} />
            </div>
            <div className="flex-container">

                <Button num='/' getMethod={Cal} />
                <Button num='*' getMethod={Cal} />
                <button className="cal_clss" onClick={Calculate}>=</button>
            </div>

        </div>


    );
}
export default Calculator;