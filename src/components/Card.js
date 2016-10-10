/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import marked from 'marked';

import CheckList from './CheckList';
import CardDetails from './CardDetails';

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
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }
    return (
      <CardDetails
        showDetails={this.state.showDetails}
        handleDetailsToggle={this.handleDetailsToggle}
        cardDetails={cardDetails}
        title={this.props.title}
      />
    );
  }
}

Card.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  tasks: React.PropTypes.instanceOf(Array),
  id: React.PropTypes.number,
};

module.exports = Card;
