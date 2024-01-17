import Home from "./components/Home";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      
      <header className="container m-auto"><Nav></Nav></header>
      
      <main>
        <Home></Home>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
