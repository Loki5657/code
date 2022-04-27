import React, { useState } from "react";
import '../Css/todo.css'
import Header from '../Header/header'



function Todo() {
    const [tododata, setTododata] = useState({
        add: '',
        list: [], 
    })
    const addInputValue = (e, TodoValue) => {
        setTododata({ ...tododata, [TodoValue]: e.target.value })
        // console.log(tododata.add)
    }
    const Add = (e) => {
        const { list, add } = tododata;
        if (tododata.add) {
            list.push(add)
            console.log(list)
            setTododata({ ...tododata, add: '', list: list })
        }
    }
    const Clear = () => {
        setTododata({ ...tododata, list: [] })
        // console.log(tododata.list)

    }
    const Delete = (data) => {
        const { list } = tododata;

        list.splice(data, 1)
        console.log(data)
        setTododata({ ...tododata, list: list, })

    }

    return (
        <div>
              <Header />
            {/* <div className="text_to">To Do List</div> */}
            <form>
        
                <input className="input_compo form-control " type="text" name="add" placeholder="" value={tododata.add} onChange={(e) => addInputValue(e, 'add')} />
            </form>
            <div>
                <button className="add btn-primary"  onClick={Add}>Add To List</button>
                <button className=" btn-danger" onClick={Clear}>Clear List</button>
                {
                    (tododata.list.length > 0) &&
                    tododata.list.map((toDo, index) => {
                        return (
                            
                            <div className="div_compo" key={index}>
                                <span className="text_comp" >{toDo}</span>
                                <button className="btn_del btn-danger" onClick={() => Delete(index)}>Delete</button>
                            </div>
                           
                        )
                    })
                }


            </div>
        </div>


    );
}
export default Todo;