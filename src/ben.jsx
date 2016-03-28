import React from 'react'
import MessagesArray from './messagesArray.jsx'
import AddForm from './addForm.jsx'
import Peter from './peter.jsx'

export default class Ben extends React.Component {
  constructor(props) { // list of objects
    super(props);
    this.state = {
      series: ["abc", "def", "ghi"],
      showAddForm: false
    };

  }

  renderButton() {
    let { showAddForm, series } = this.state;
    if (showAddForm) return null;
    let onClick = () => {
      this.setState({
        showAddForm: true
      })
    }
    return <button onClick={ onClick } >Add message</button>
  }

  renderForm() {
    let { showAddForm, series } = this.state;
    if (!showAddForm) return null;

    let addMessage = (message) => {
      let messages = [...series, message];
      this.setState({
        series: messages
      })
    }

    return <AddForm addMessage={ addMessage } />
  }


  render() {
    let { showAddForm, series } = this.state;

    return(
      <div>
        <Peter />
        <MessagesArray messages={series} />
        { this.renderForm() }
        { this.renderButton() }
      </div>
    )
  }
}



