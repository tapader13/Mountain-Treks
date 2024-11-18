import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Registration from './components/Registration';
import AdventureDetails from './components/AdventureDetails';
import PrivateRoute from './private/PrivateRoute';
import Error from './components/Error';
import ForgetPass from './components/ForgetPass';
import Home from './components/Home';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <Home />,
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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/forgotpassword',
        element: <ForgetPass />,
      },
      {
        path: '/myprofile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/updateprofile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
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
