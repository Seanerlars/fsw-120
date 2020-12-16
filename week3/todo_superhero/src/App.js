import React from "react"
import SuperItem from "./superItem"
import superHeroData from "./superHeroData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hero: superHeroData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedSupers = prevState.hero.map(hero => {
                if (hero.id === id) {
                    return {
                        ...hero,
                        completed: !hero.completed
                    }
                }
                return hero
            })
            return {
                hero: updatedSupers
            }
        })
    }
    
    render() {
        const superItem = this.state.super.map(item => <SuperItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="super-list">
                {superItem}
            </div>
        )    
    }
}

export default App