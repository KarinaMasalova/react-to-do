import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
  return (
    <ul>
      <li><ToDoListItem label="Drink Coffee"/></li>
      <li><ToDoListItem label="Build React App" important/></li>
    </ul>
  );
};

export default ToDoList;
