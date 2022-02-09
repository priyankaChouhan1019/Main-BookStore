import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Home from './pages/homePage/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Books from './component/books/Books';
import HowerBook from './component/hoverBook/HowerBook';
import WishList from './component/wishList/WishList';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

        <Switch>
        
        <Route path='/' component={Home} exact/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/wishList' component={WishList}/>
        </Switch>
    </BrowserRouter>
   
  );
}
export default App;
