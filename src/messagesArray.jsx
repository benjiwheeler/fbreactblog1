import React from 'react'

export default class MessagesArray extends React.Component {

  render() {
    let {messages} = this.props;
    return(
      <div>
        {messages.map((message, index) =>
          <div key={ index } >{ message }</div>
        )}
      </div>
    )
  }
}



