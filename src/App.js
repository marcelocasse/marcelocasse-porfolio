import Home from "./pages/Home";
import Nav from "./pages/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,Navigate
} from "react-router-dom";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import NotPage from "./pages/NotPage";


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
            <Route path="*" element={<NotPage></NotPage>}></Route>
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
