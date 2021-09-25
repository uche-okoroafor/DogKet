import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

interface IProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const ProtectedRoute: React.FC<IProps> = props => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to='/login' />
  );
};
export default ProtectedRoute;