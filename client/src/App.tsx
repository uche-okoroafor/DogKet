import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import TempDashboardMain from './pages/TempDashboardMain/TempDashboardMain';
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
                <Route exact path="/dashboard" component={TempDashboardMain} />
                <Route exact path="/profile" component={Profile} />

                {/* TODO : Refactoring all routes? */}
                <Route exact path="/profile/edit">
                  <Profile>
                    <EditProfile />
                  </Profile>
                </Route>

                <Route exact path="/profile/photo">
                  <Profile>
                    <ProfilePhoto />
                  </Profile>
                </Route>

                <Route exact path="/profile/payment">
                  <Profile>
                    <Payment />
                  </Profile>
                </Route>

                <Route exact path="/profile/security">
                  <Profile>
                    <Security />
                  </Profile>
                </Route>

                <Route exact path="/profile/settings">
                  <Profile>
                    <Settings />
                  </Profile>
                </Route>

                <Route exact path="/messages" component={ChatSideBanner} />
                <Route exact path="/my-sitters" component={MySitters} />
                <Route exact path="/my-jobs" component={MyJobs} />
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
