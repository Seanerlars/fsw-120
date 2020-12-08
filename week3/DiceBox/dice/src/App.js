import React from "react"
import './dice.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          num1: 1,

            num2: 2,

            num3: 3,

            num4: 4,

            num5: 5
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState(prevState => {
          return {
              num1: prevState.num1 + Math.floor(Math.random() * 6) + 1 ,
              num2: prevState.num2 + Math.floor(Math.random() * 3) + 1 ,
              num3: prevState.num3 + Math.floor(Math.random() * 2) + 1 ,
              num4: prevState.num4 + Math.floor(Math.random() * 1) + 1 ,
              num5: prevState.num5 + Math.floor(Math.random() * 1) + 1 }})};


    
    
    render() {
        return (
            <div>
                <h1>{this.state.num1}</h1>
                <h1>{this.state.num2}</h1>
                <h1>{this.state.num3}</h1>
                <h1>{this.state.num4}</h1>
                <h1>{this.state.num5}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleClick2}>Reset</button>
            </div>
        )
    }
}

export default App





