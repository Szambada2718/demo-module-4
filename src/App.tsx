import "./App.css";
import Login from "./Login";
import GreetingRevou from "./GreetingRevou";


function App() {
  const name ="revou berlin";
  return (
    // wajib dibungkus 1 element
    <div className="App">
        <GreetingRevou name={name} />
        <div className="container">
        <h1 className="title">Hello, React!{name}</h1>
        <button className="button">Click Me</button>
      </div>
      <Login />

    </div>
  );
}

export default App;
