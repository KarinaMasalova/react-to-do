import React from 'react';
import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({ toDos, onDeleted }) => {
  const elements = toDos.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <li key={ id } className="list-group-item">
        <ToDoListItem { ...itemProps }
        onDeleted={() => onDeleted(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default ToDoList;
