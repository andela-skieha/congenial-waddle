/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

import React, { Component } from 'react';
import update from 'react-addons-update';


import KanbanBoard from './KanbanBoard';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'njerry_werry',
};

class KanbanBoardContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cards: [],
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
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

  addTask(cardId, taskName) {
    const prevState = this.state;
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    const newTask = {
      id: Date.now(),
      name: taskName,
      done: false,
    };

    const nextState = update(
      this.state.cards, {
        [cardIndex]: {
          tasks: {
            $push: [newTask],
          },
        },
      });

    return fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server response wasn\'t OK');
      } else {
        return response.json();
      }
    })
    .then((responseData) => {
      newTask.id = responseData.id;
      return this.setState({ cards: nextState });
    })
    .catch((error) => {
      console.error(error);
      this.setState(prevState);
    });
  }

  deleteTask(cardId, taskId, taskIndex) {
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    const nextState = update(
      this.state.cards, {
        [cardIndex]: {
          tasks: { $splice: [[taskIndex, 1]] },
        },
      }
    );
    this.setState({ cards: nextState });

    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS,
    });
  }

  toggleTask(cardId, taskId, taskIndex) {
    const prevState = this.state;
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    let newDoneValue;
    const nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: {
              $apply: (done) => {
                newDoneValue = !done;
                return newDoneValue;
              },
            },
          },
        },
      },
    });
    this.setState({ cards: nextState });

    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({ done: newDoneValue }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server response wasn\'t OK');
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      return this.setState(prevState);
    });
  }

  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        toggleTask={this.toggleTask}
        deleteTask={this.deleteTask}
        addTask={this.addTask}
      />
    );
  }
}

module.exports = KanbanBoardContainer;
