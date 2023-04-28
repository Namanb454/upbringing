import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/blogs" element = {<Blogs/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
