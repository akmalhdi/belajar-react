import axios from "axios";
import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    serError("");
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if(response.status == 200){
        localStorage.setItem('token', response.data.token);
        navigate('/user');
      }
      alert('Login Berhasil')
      
    } catch (error) {
      serError(error.response.data.message || 'Login Gagal');
      console.log(error.error);
      alert('Login Error');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card style={{ width: "30rem", height:'24rem', padding: "20px", backgroundColor:'' }}>
        <h3 className="text-center mb-5">Login Form</h3>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
              onChange={function (e) {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="input your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
