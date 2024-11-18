import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import AdventureDetails from './components/AdventureDetails';
import PrivateRoute from './private/PrivateRoute';
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
