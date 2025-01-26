import React, { useState } from 'react'
import axios from 'axios'

function Create(){
    const [tast, setTask] = useState([])

    const handleAdd = ()=> {
        if (!task){ //prevents empty tasks from being added
            alert("Please Enter a Task")
            return;
        }
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
            location.reload()
        })
            
        .catch(err => console.log(err))

    }
    return(
        <div>
            <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)}/>
            <button type="button"onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create