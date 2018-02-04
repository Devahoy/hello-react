import React from 'react'

import MyStatelessComponent from './MyStatelessComponent'

function Hello(props) {
  return <h1>Ahoy! {props.name}</h1>
}

class HelloApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Hello name="Chai" />
        <p>{this.props.message}</p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>Total click : {this.state.counter}</p>

        <MyStatelessComponent
          title="Stateless"
          message="Example of Stateless Component"
        />
      </React.Fragment>
    )
  }
}

export default HelloApp
