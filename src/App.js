import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Home from './pages/homePage/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Books from './component/books/Books';
import HowerBook from './component/hoverBook/HowerBook';
function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Signup /> */}
     {/* <Home /> */}
     {/* <Books/> */}
     <Dashboard/>
     {/* <HowerBook/> */}
    </div>
  );
}
export default App;
