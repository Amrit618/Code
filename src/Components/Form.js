import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
             
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    
    }
    
    render() {
        return (
            <div>
                <form>
                    <label> Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </form>
            </div>
        )
    }
}

export default Form
