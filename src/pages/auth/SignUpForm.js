import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {

  const [signUpData, setSignUpData] = useState(
    {
      username: "",
      password1: "",
      password2: "",
    }
  );

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    })
  };

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData)
      //where to next
      history.push('/signin')
    } catch (err) {
      setErrors(
        err.response?.data
      )
    }
  }

  const {username, password1, password2} = signUpData;

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          {/* add your form here */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="username" value={username} onChange={handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              
            </Form.Group>
            {errors.username?.map((message, idx) => <Alert>{message}</Alert>)}

            <Form.Group controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password1" value={password1} onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password2" value={password2} onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className= {`${btnStyles.Wide} ${btnStyles.Bright} ${btnStyles.Button}`} >
              Sign up
            </Button>
          </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;