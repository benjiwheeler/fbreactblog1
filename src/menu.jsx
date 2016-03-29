import React from 'react';
import { Link, IndexLink } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/ben" >Go to Ben</Link>
        <IndexLink to="/" >Go to index</IndexLink>
        { this.props.children }
      </div>
    )
  }

})
