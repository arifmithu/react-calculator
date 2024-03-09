import logo from "./logo.svg";
import "./App.css";
import Calculator from "./component/Calculator";
import Nav from "./component/Nav";

function App() {
  return (
    <div className=" text-center">
      <Nav />
      <Calculator />
    </div>
  );
}

export default App;
