import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <h1> {this.state.count}</h1>
                <button onClick={()=>this.Increment()}><b> Increment</b></button>
            </div>
        )
    }
}

export default Counter
