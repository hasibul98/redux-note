import react from 'react';
import Counter from './redux/Component';
import CounterComponent from './redux/app2/CounterComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import UsersList from './redux/blogPost/UsersList';
import UserAddComponent from './redux/user-add-remove/UserAddComponent';
import TaskManager from './redux/task-managment/TaskManager';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NewsAggregator from './redux/news-agregator/NewsAggregator';
import SignUp from './user-signUp/SignUp';
import ColorGenerator from './redux/colorGenerator/ColorGenerator';

function App ()
{
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
          <Nav.Link href='/taskmanager'>task manager</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/newsagregator'>news agregator</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/sign-up'>signup</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/colorgenerator'>color generator</Nav.Link>
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
        <Route path='/counter' element={ <Counter /> } />
        <Route path='/countercomponent' element={ <CounterComponent /> } />
        <Route path='/userlist' element={ <UsersList /> } />
        <Route path='/adduser' element={ <UserAddComponent /> } />
        <Route path='/taskmanager' element={ <TaskManager /> } />
        <Route path='/newsagregator' element={ <NewsAggregator /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/colorgenerator' element={ <ColorGenerator /> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
