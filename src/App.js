import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Information from './pages/Information';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/information" element={<Information />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
