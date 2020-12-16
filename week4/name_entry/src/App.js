import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })

        document.getElementById("add").onclick  = function() {

            var node = document.createElement("Li");
            var text = document.getElementById("user_input").value; 
            var textnode=document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("list_item").appendChild(node);
        }
    }



    render() {
        return (
            <form>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="name" onChange={this.handleChange}></input>
                <h1>{this.state.firstName}</h1>
                <input type="button" id="add" value="Add new"></input>
                <ol id="list_item"></ol>

                
                
            </form>
        )
    }
}

export default App