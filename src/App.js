import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Home from './pages/homePage/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Signup /> */}
     {/* <Home /> */}
     <Dashboard/>
    </div>
  );
}
export default App;
