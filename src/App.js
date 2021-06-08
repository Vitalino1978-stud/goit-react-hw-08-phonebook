import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./pages/Homepage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Download...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />

            <PrivateRoute
              path="/contacts"
              component={ContactsPage}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
