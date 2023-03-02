import logo from "./img/logo.svg";
import "./style/App.scss";
import ListTodo from "./view/TodoApp/ListTodo.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
