import React from "react"

function places(props) {
    return (
        <div className="places1">
            <p>{props.place.name}</p> 
            <p>{props.place.price}</p>
            <p>{props.place.time}</p>
            
        </div>

      

        
    )
}

export default places