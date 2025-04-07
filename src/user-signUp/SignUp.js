import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function SignUp() {
  const [user, setUser] = useState({name: "", email: "", password: "" });
  const {name, email, password} = user;
  const handleChange = (e)=>{
      console.log(e.target.value);
      setUser({...user, [e.target.name]: e.target.value});
      
  }
  useEffect(()=>{
    console.log(user);
  },[user]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    // setUser({name: "", email: "", password: "" })
    
  }
//  method='POST'
  return (
    <Form method='get'  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" value={user.name} name='name' required placeholder="your full name" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={user.email} name='email' onChange={handleChange}  required placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={user.password} onChange={handleChange} type="password" required name='password'  placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        
      <button type="submit" name='submit'>Submit</button>
      </Form.Group>
      
    </Form>
  );
}

export default SignUp;