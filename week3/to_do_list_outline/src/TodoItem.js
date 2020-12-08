import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem



// To give an alert when box is checked use this code 

// import React from "react"

// function TodoItem(props) {
//     return (
//         <div className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.item.completed} 
//                 onChange={() => console.log("Changed!")}
//             />
//             <p>{props.item.text}</p>
//         </div>
//     )
// }

// export default TodoItem