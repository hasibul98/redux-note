import react from 'react';
import Counter from './redux/Component';
import CounterComponent from './redux/app2/CounterComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import UsersList from './redux/blogPost/UsersList';
import UserAddComponent from './redux/user-add-remove/UserAddComponent';
import TaskManager from './redux/task-managment/TaskManager';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (

    <BrowserRouter>
     <Nav>
      <Nav.Item>
        <Nav.Link href='/counter' >counter</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/countercomponent'> counter component</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/userlist'> user list</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/adduser'> add user</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href='/taskmanager'>task manager</Nav.Link>
      </Nav.Item>
      
      
    </Nav>
    
    {/* <Link to="/counter">counter</Link>
    <br />
    <Link to="/countercomponent">counter component</Link>
    <br />
    <br />
    <Link to="/userlist">user list</Link>
    <br />
    <br />
    <Link to="/adduser">add user</Link>
    <br />
    <br />
    <Link to="/taskmanager">task manager</Link> */}
    <Routes>
         <Route path='/counter' element={<Counter />} />
         <Route path='/countercomponent' element={<CounterComponent />} />
         <Route path='/userlist' element={<UsersList />} />
         <Route path='/adduser' element={<UserAddComponent />} />
         <Route path='/taskmanager' element={<TaskManager />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
