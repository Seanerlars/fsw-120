import React from "react"

function places(props) {
    return (
        <div className="places1">
            <p></p> 
            <p></p>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>,

        <div className="places2">
            <p></p> 
            <p></p>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>,

        <div className="places3">
            <p></p> 
            <p></p>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>,


            <div className="places4">
        <p></p> 
<       p></p>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
        </div>

        
    )
}

export default places