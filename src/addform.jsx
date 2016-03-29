import React from 'react'
import {addMessage} from './actions.js'

export default class AddForm extends React.Component {
  constructor(props) { // list of objects
    super(props);
    this.state = {
      text: ""
    };
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onTextSubmit(event) {
    event.preventDefault();
    addMessage(this.state.text);
    this.setState({
      text: ""
    })
  }

  render() {
    let { text } = this.state;
    return(
      <form onSubmit={ this.onTextSubmit.bind(this) } >
        Add a message, if you want to!<br />
        <input value={ text } onChange={ this.onTextChange.bind(this) } />
        <input type="submit" />
      </form>
    )
  }
}



