import React from 'react';
import classnames from 'classnames';


export default class Greeting extends React.Component {
  render() {
    var greetingClass = classnames({'greeting': true});
    return (
      <div className={greetingClass}>
      Hello {this.props.resp}! Customers: {this.props.customers}
      </div>
    );
  }
};
