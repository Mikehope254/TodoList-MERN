import React, {useState} from "react";
import Create from './Create'
import './App.css'


function Home(){
    const [todos, setTodos] = useState([])
    return(
        <div>
            <h2>ToDo List</h2>
            <Create/>
            {
                todos.length === 0 //empty array
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo=>(
                   <div>
                        {todo}
                    </div>
                ))
            }
        </div>
    )
}
export default Home;