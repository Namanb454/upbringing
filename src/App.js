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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/blogs" element = {<Blogs/>}/>
          <Route exact path = "/signup" element = {<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
