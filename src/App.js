import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Modal from './Modal/Modal';
import Loader from './Loader';
import AddTodo from './Todo/AddTodo';

function App() {
  const [toDos, setToDos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const loadingTodos = loading ? null : (<p>No todos</p>);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(toDos => {
        setTimeout(() => {
          setToDos(toDos);
          setLoading(false);
        }, 2000);
      })
  }, []);

  function toggleTodo (id) {
    setToDos(toDos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  function removeTodo (id) {
    setToDos(toDos.filter((todo) => todo.id !== id))
  }

  function addTodo (title) {
    setToDos(toDos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      }
    ]));
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
       <h1>My ToDo</h1>
       <Modal/>
        <AddTodo onCreate={addTodo}/>
       {loading && <Loader/>}
       {toDos.length ? (<TodoList toDos={toDos} onToggle={toggleTodo}/>) : loadingTodos}
     </div>
  </Context.Provider>
  )
}

export default App;
