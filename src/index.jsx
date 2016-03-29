import React from 'react';

export default React.createClass({
  contextTypes: { // if you want to use this.context, you must define contextTypes
    router: React.PropTypes.object
  },
  onClickHandler: function(event) {
    this.context.router.push("/ben");
  },
  render() {
    return (
      <div onClick={ this.onClickHandler }>
        This is the index component
      </div>
    )
  }

})
