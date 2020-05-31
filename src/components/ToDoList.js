import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ toDos }) => {
  const elements = toDos.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <li key={ id }>
        <ToDoListItem { ...itemProps }/>
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
