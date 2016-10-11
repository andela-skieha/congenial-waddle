/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

const API_URL = 'http://localhost:3000';
const API_HEADERS = {
  'Content-Type': 'application/json',
};

class KanbanBoardContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    return fetch(`${API_URL}/cards`, { headers: API_HEADERS })
    .then((response) => {
      return response.text();
    })
    .then((responseData) => {
      return this.setState({
        cards: JSON.parse(responseData),
      });
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards} />
    );
  }
}

module.exports = KanbanBoardContainer;
