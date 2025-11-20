import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email == "admin@gmail.com" && password == "123") {
      alert("Login Success");
    } else {
      alert("Login Failed");
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
