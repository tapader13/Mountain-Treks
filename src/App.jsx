import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import AdventureDetails from './components/AdventureDetails';
import PrivateRoute from './private/PrivateRoute';
import Error from './components/Error';
import ProfilePage from './pages/ProfilePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/adventure/:id',
    element: (
      <PrivateRoute>
        {' '}
        <AdventureDetails />{' '}
      </PrivateRoute>
    ),
  },

  {
    path: '/myprofile',
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Error />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
