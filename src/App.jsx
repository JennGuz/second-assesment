import { useState, useEffect } from "react";
import "./App.css";
`
The intended goal to this component is to complete the available todos inside the component.

The final component must:
- Let the user save todos
- Let the user delete todos
- Let the user mark todos as completed
- Update the localStorage with the current todos to keep them safe and persist between page reloads

`
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];


function App() {
  // Estado para manejar las tareas
  const [todos, setTodos] = useState(savedTodos);
  const [text, setText] = useState('')
  // TODO: Crear estado para manejar el texto de la nueva tarea

  // useEffect para cargar las tareas desde Local Storage al montar el componente
  // useEffect(() => {
  //   // Obtener las tareas guardadas en Local Storage
  //   const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   // TODO: Actualizar el estado con las tareas guardadas
  //   console.log(savedTodos);
  //   setTodos(savedTodos);
  // }, []);

  // useEffect para guardar las tareas en Local Storage cada vez que cambian
  useEffect(() => {
    // Guardar las tareas en Local Storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // TODO: Agrega la dependencia correcta para actualizar en localStorage cada vez que cambien las todos
  }, [todos]);

  // Función para agregar una nueva tarea
  const addTodo = () => {
    // TODO: NO SE DEBE AGREGAR LA TAREA SI EL TEXTO ESTá VACíO. 

    // Agregar la nueva tarea al estado
    setTodos([
      ...todos,
      { text: text, completed: false },
    ]);
    
    // TODO: Limpiar el campo de texto de la nueva tarea
  };
  const handleText = (event) => {
    setText(event.target.value);
  }

  // Función para marcar/desmarcar una tarea como completada
  const toggleTodo = (index) => {

    // Actualizar el estado de la tarea correspondiente
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );

    // Actualizar el estado con las tareas actualizadas
    setTodos(updatedTodos);
  };

  // Función para eliminar una tarea
  const deleteTodo = (index) => {
    // TODO: Filtrar la tarea a eliminar del estado
    const updatedTodos = todos.filter((todo, i) => {
      return i !== index
    });
    // Actualizar el estado con las tareas restantes
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        {/* Campo de texto para agregar una nueva tarea */}
        <input
          type="text"
          value={text}
          onChange={handleText}
          //TODO: Esta es una entrada controlada, actualice algo así onChange={}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          // TODO: Algo debe arreglarse aquí, vea cómo la consola lo agrega.
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
