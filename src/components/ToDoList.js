import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ toDos }) => {
  const elements = toDos.map((item) => {
    return (
      <li>
        <ToDoListItem { ...item }/>
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default ToDoList;
