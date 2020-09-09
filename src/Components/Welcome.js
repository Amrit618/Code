import React, { Component } from 'react'

export class Welcome extends Component {
    render(props) {
        return (
            <div>
              <h1>Hello {this.props.name} is a {this.props.heroName}</h1>
            </div>
        )
    }
}

export default Welcome
