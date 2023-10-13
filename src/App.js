import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path ="/" render={() => <h1>Home</h1>}></Route>
          <Route exact path = "/signin" render={()=> <h1>Sign in</h1>}></Route>
          <Route exact path = "/signup" render= {()=> <SignUpForm></SignUpForm>}></Route>
          <Route render = {() => <h1>The gods are wise, but have failed to find what you are looking for!!!</h1>}></Route>
        </Switch>
      </Container>
      
    </div>
  );
}

export default App;