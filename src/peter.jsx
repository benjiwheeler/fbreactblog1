import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      text: "my name is peter!"
    }
  },

  render() {
    let { text } = this.state;
    return (
      <div>{ text }</div>
    )
  }

})
