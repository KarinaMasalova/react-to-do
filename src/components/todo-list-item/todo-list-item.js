import React, { Component } from 'react';
import './todo-list-item.css';

export default class ToDoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };  
  
    return (
      <span>
        <span className="todo-list-item-label" style={ style }>
          { label }
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}
