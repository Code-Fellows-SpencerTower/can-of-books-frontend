import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null
    }
  }

  loginHandler = (formObj) => {
    this.setState({
      user: formObj.user,
      email: formObj.email
    })
  }

  logoutHandler = () => {
    console.log('handle log out');
    this.setState({
      user: null,
      email: null
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks /> : <Login onLogin={this.loginHandler} />}
            </Route>
            <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Profile user={this.state.user} email={this.state.email} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
