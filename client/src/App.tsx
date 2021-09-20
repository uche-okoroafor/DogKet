import { MuiThemeProvider, Typography } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ChatSideBanner from './components/ChatSideBanner/ChatSideBanner';
import MySitters from './pages/MySitters/MySitters';
import MyJobs from './pages/MyJobs/MyJobs';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile/EditProfile';
import ProfilePhoto from './pages/Profile/ProfilePhoto/ProfilePhoto';
import Payment from './pages/Profile/Payment/Payment';
import Security from './pages/Profile/Security/Security';
import Settings from './pages/Profile/Settings/Settings';
import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />

                <Route exact path="/dashboard">
                  <Dashboard>
                    <Typography component="h5" variant="h5" align="center">
                      Temporary Dashboard Main Content
                    </Typography>
                  </Dashboard>
                </Route>

                <Route exact path="/profile">
                  <Dashboard>
                    <Profile />
                  </Dashboard>
                </Route>

                {/* TODO : Refactoring all routes? */}
                <Route exact path="/profile/edit">
                  <Dashboard>
                    <Profile>
                      <EditProfile />
                    </Profile>
                  </Dashboard>
                </Route>

                <Route exact path="/profile/photo">
                  <Dashboard>
                    <Profile>
                      <ProfilePhoto />
                    </Profile>
                  </Dashboard>
                </Route>

                <Route exact path="/profile/payment">
                  <Dashboard>
                    <Profile>
                      <Payment />
                    </Profile>
                  </Dashboard>
                </Route>

                <Route exact path="/profile/security">
                  <Dashboard>
                    <Profile>
                      <Security />
                    </Profile>
                  </Dashboard>
                </Route>

                <Route exact path="/profile/settings">
                  <Dashboard>
                    <Profile>
                      <Settings />
                    </Profile>
                  </Dashboard>
                </Route>

                <Route exact path="/messages">
                  <Dashboard>
                    <ChatSideBanner />
                  </Dashboard>
                </Route>

                <Route exact path="/my-sitters">
                  <Dashboard>
                    <MySitters />
                  </Dashboard>
                </Route>

                <Route exact path="/my-jobs">
                  <Dashboard>
                    <MyJobs />
                  </Dashboard>
                </Route>

                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
