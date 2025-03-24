import react from 'react';
import './App.css';
import Counter from './redux/Component';
import CounterComponent from './redux/app2/CounterComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import UsersList from './redux/blogPost/UsersList';
import UserAddComponent from './redux/user-add-remove/UserAddComponent';

function App() {
  return (

    <BrowserRouter>
    <Link to="/counter">counter</Link>
    <br />
    <Link to="/countercomponent">counter component</Link>
    <br />
    <br />
    <Link to="/userlist">user list</Link>
    <br />
    <br />
    <Link to="/adduser">add user</Link>
    <Routes>
         <Route path='/counter' element={<Counter />} />
         <Route path='/countercomponent' element={<CounterComponent />} />
         <Route path='/userlist' element={<UsersList />} />
         <Route path='/adduser' element={<UserAddComponent />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
