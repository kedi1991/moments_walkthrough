import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { useState } from 'react';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar></NavBar>
          <Container className={styles.Main}>
            <Switch>
              <Route exact path ="/" render={() => <h1>Home</h1>}></Route>
              <Route exact path = "/signin" render={()=> <SignInForm></SignInForm>}></Route>
              <Route exact path = "/signup" render= {()=> <SignUpForm></SignUpForm>}></Route>
              <Route render = {() => <h1>The gods are wise, but have failed to find what you are looking for!!!</h1>}></Route>
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;