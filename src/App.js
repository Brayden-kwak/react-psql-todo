import { Fragment } from 'react';
import './App.css';

import InputToDo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
