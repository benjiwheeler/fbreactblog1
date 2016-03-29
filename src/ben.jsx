import React from 'react'
import MessagesArray from './messagesArray.jsx'
import AddForm from './addForm.jsx'
import Peter from './peter.jsx'
import Store from './store.js'
import {provideInitialState, setShowAddForm, requestToServer} from './actions.js'

export default class Ben extends React.Component {
  // Component provides setState function, which will eventually render; may wait until
  // setState is called multiple times. Happens at end of a "workflow", a queue of js
  // changes.
  // Component also provides component will mount and component will unmount functions.

  constructor(props) { // list of objects
    super(props);
    this.state = Store.getData(["series", "showAddForm"]);
    // this.state = {
    //   series: ["abc", "def", "ghi"],
    //   showAddForm: false
    // };
  }

  componentWillMount() { // called by React.Component
    Store.attachListener(this, ["series", "showAddForm"]);
    provideInitialState();
    requestToServer();
  }

  componentWillUnmount() {
    Store.removeListener(this);
  }

  renderButton() {
    let { showAddForm, series } = this.state;
    if (showAddForm) return null;
    let onClick = () => setShowAddForm(true);
    return <button onClick={ onClick } >Add message</button>
  }

  renderForm() {
    let { showAddForm, series } = this.state;
    if (!showAddForm) return null;

    return <AddForm />
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



