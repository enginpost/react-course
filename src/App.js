import ModalAction from "./components/ModalAction";
import Todo from "./components/Todo"

function App() {
  return(
  <div>
    <h1>My Todos</h1>
    <Todo title="My first todo" />
    <Todo title="My second todo" />
    <Todo title="My third todo" />
    <ModalAction title="Some Todo" />
  </div>
  );
}

export default App;
