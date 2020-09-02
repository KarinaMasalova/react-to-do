import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm  from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    toDoData: [
      this.createToDoItem('Drink Coffee'), 
      this.createToDoItem('Make awesome app'), 
      this.createToDoItem('Have a lunch'),
    ],
  };

  createToDoItem(label) { 
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };

  deleteItem = (id) => {
    this.setState(( { toDoData} ) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx + 1);

      const newArray = [...before, ...after];

      return {
        toDoData: newArray,
      }
    }); 
  };

  addItem = (text) => {
    const newItem =  this.createToDoItem(text);
    this.setState(( { toDoData } ) => {
      const newArr = [
        ...toDoData,
        newItem
      ];
      return {
        toDoData: newArr,
      }
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, 
                      [propName]: !oldItem[propName] };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(( {toDoData} ) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(( {toDoData} ) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'important')
      };
    });
  };

  render() {
    const { toDoData } = this.state;
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;
    return (
      <div className='todo-app'>
        <AppHeader toDo={ toDoCount } done={ doneCount }/>
        <div className='top-panel d-flex'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <ToDoList 
          toDos={ toDoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <ItemAddForm onItemAdded={ this.addItem }/>
      </div>
    );
  }
};
