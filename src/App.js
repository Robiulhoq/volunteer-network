import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ragister from './Components/Ragister/Ragister';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminPanal from './Components/AdminPanal/AdminPanal';
import RagisterEvent from './Components/RagisterEvent/RagisterEvent';

export const UserContext = createContext();

function App() {
  const [loging, setLoging] = useState({
    name:'',
    email: '',
    error: ''
})
  return (
    <div>
      <UserContext.Provider value={[loging, setLoging]}>
      
      <Router>
         <Switch>
           <Route exact path="/">
           <Header></Header>
           </Route>
           <Route path="/admin">
              <AdminPanal></AdminPanal>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/ragisterEvent">
              <RagisterEvent></RagisterEvent>
            </Route>
            <PrivateRoute path="/ragister/:eventId">
              <Ragister></Ragister>
            </PrivateRoute>
         </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
