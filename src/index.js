import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';

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
      <ToDoList toDos={ toDoData }/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
