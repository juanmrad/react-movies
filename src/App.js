import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MovieList from './MovieList'
import Header from './Header';

function App() {
  const [movies, setMovies] = useState(false)

  function handleChange(newValue) {
    setMovies(newValue);
  }

  return (
    <Container>
      <Header onChange={handleChange} />
      <MovieList movies={movies} />
    </Container>
  );
}

export default App;



var todo = { todoText: " Hi", todoTime: 50, isComplete: false };
todo2 = markTodoComspleted2(todo);
todo3 = markTodoCompleted(todo);


var todoList = {
  owner: "Juan",
  listDate: "10-01-2020",
  todos: [{ 
    todoText: " Hi", 
    todoTime: 50, 
    isComplete: false, 
    todoCompleteTime: null
  }]
};

var newTodo = {
  todoText: " Hi", 
  todoTime: 50, 
  isComplete: false, 
  todoCompleteTime: null
}

var newTodoList = addTodoItem(todoList, newTodo);

function addTodoItem(todoList, newTodo) {
  return {
    ...todoList,
    todos: [
      ...todoList.todos,
      {
        ...newTodo
      }
    ]
  }
}


function updateTodoListOwner(todoList){
  return {
    ...todoList,
    todos: {
      ...todoList.todos,
    },
    owner: "Juan Mrad"
  }
}







function markTodoCompleted(todo) {
  return {
    ...todo,
    // todoText: todo.todoText,
    // todoTime: todo.todoTime,
    todoCompleteTime: "10-08-2020",
    isCompleted: true
  }
 }

 function markTodoCompleted2(todo) {
  todo.isCompleted = true;
  return todo;
 }