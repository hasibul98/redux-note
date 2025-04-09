import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function SignUp ()
{
  const [ user, setUser ] = useState( { name: "", email: "", password: "" } );
  // const { name, email, password } = user;
  const handleChange = ( e ) =>
  {

    setUser( { ...user, [ e.target.name ]: e.target.value } );

  };

  const navigate = useNavigate();

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    console.log( user );
    // setUser({name: "", email: "", password: "" })
    try
    {
      const res = await axios.post( "http://localhost:5000/signup", user );
      alert( res.data.message );
      navigate( "/login" );
    } catch ( err )
    {
      const errorMsg = err.response?.data?.error || "something went wrong";
      alert( "error:" + errorMsg );
    }

  };
  //  method='POST'
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3" controlId="formFullName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" value={ user.name } name='name' required placeholder="your full name" onChange={ handleChange } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmailAddress">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={ user.email } name='email' onChange={ handleChange } required placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>password:</Form.Label>
        <Form.Control value={ user.password } onChange={ handleChange } type="password" required name='password' placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSubmit">

        <Button variant="primary" type="submit">Submit</Button>
      </Form.Group>

    </Form>
  );
}

export default SignUp;