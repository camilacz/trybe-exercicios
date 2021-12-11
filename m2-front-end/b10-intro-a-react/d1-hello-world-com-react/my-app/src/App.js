import React from 'react';
import './App.css';

// EXERCÍCIO 2 - Crie uma lista de tarefas simples

// Insira a função Task
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// Crie uma array de compromissos
const tasks = ['Acordar', 'Dançar a Macarena', 'Escovar os dentes', 'Plantar bananeira'];

class App extends React.Component {
  render() {
    return (
      // Chame a Task() dentro do componente App
      <ul>
        {tasks.map(task => Task(task))}
      </ul>
    )
  };
}

export default App;
