/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */

import React, { Component, PropTypes } from 'react';
import marked from 'marked';

import CheckList from './CheckList';
import CardDetails from './CardDetails';

const titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(`${propName} in ${componentName} is longer than 80 characters.`);
    }
  }
};

class Card extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showDetails: false };
    this.handleDetailsToggle = this.handleDetailsToggle.bind(this);
  }

  handleDetailsToggle() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span dangerouslySetInnerHTML={{ __html: marked(this.props.description) }} />
          <CheckList
            cardId={this.props.id}
            tasks={this.props.tasks}
            toggleTask={this.props.toggleTask}
            deleteTask={this.props.deleteTask}
            addTask={this.props.addTask}
          />
        </div>
      );
    }

    return (
      <CardDetails
        showDetails={this.state.showDetails}
        handleDetailsToggle={this.handleDetailsToggle}
        cardDetails={cardDetails}
        title={this.props.title}
        color={this.props.color}
      />
    );
  }
}

Card.propTypes = {
  title: titlePropType,
  description: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  color: PropTypes.string,
  toggleTask: PropTypes.func,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

module.exports = Card;
