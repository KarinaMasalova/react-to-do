import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

const App = () => {
  const toDoData = [
    { label: 'Drink Coffee', important: false, id: 1 },    
    { label: 'Make awesome app', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <ToDoList toDos={ toDoData }/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
