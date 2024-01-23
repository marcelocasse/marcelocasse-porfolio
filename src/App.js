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


function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12 font-Nunito gap-4">  
        <header className="col-start-2 col-span-10 py-4 sticky top-0 z-10">
          <Nav></Nav>
        </header>
        
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


      {/* <div className="container grid grid-cols-12">
        <header className="col-start-2 col-span-10 py-4 sticky top-0 z-10">
          <nav className=" border-2 border-white rounded-full backdrop-filter backdrop-blur-sm bg-opacity-30">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <span className="text-2xl text-gray-900 font-semibold">Logo</span>
                <div className="flex space-x-4 text-gray-900">
                  <a href="#">Dashboard</a>
                  <a href="#">About</a>
                  <a href="#">Projects</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div> */}

    </BrowserRouter>

  );
}

export default App;
