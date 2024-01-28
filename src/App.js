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
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12 font-Nunito gap-4">  
        <header className="col-start-2 col-span-10 py-4 sticky top-0 z-10">
          <Nav></Nav>
        </header>
        <ScrollToTop></ScrollToTop>
        <main className="col-start-2 col-span-10">
          
          <Routes>
            <Route path="" element={[<Home></Home>,<Projects></Projects>,<Skills></Skills>,<About></About>]}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </main>

        <footer className="col-start-2 col-span-10">
          <Footer></Footer>
        </footer>
      </div>

    </BrowserRouter>

  );
}

export default App;
