import React from 'react'
import ReactDOM from 'react-dom'


var OutsideWrapper = React.createClass({
  getDefaultProps: function() {
    return {
      eventTypes: [
        'click'
      ]
    }
  },

  handleEvent: function(e) {
    var nodeElement = ReactDOM.findDOMNode(this)
    if ((!nodeElement || !nodeElement.contains(e.target)) &&
      typeof this.props.eventHandler === 'function' &&
      this.props.eventTypes[e.type] !== -1
    )
      this.props.eventHandler(e)
  },

  componentDidMount: function() {
    this.props.eventTypes.forEach(function(eventType) {
      document.addEventListener(eventType, this.handleEvent)
    }.bind(this))
  },

  componentWillUnmount: function() {
    this.props.eventTypes.forEach(function(eventType) {
      document.removeEventListener(eventType, this.handleEvent)
    }.bind(this))
  },

  render: function() {
    return <div className={this.props.className}>{this.props.children}</div>
  }
})

OutsideWrapper.PropTypes = {
  children: React.PropTypes.element.isRequired,
  eventHandler: React.PropTypes.func.isRequired,
  eventTypes: React.PropTypes.array
}

export default OutsideWrapper
