import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const loc = useLocation();
  console.log(loc);
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to='/login' state={{ from: loc }} />;
  return <div>{children}</div>;
};

export default PrivateRoute;
