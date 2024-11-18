import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const setTitle = (path) => {
      switch (path) {
        case '/':
          document.title = 'Home - Adventure App';
          break;
        case '/login':
          document.title = 'Login - Adventure App';
          break;
        case '/adventure/:id':
          document.title = 'Adventure Details - Adventure App';
          break;
        case '/myprofile':
          document.title = 'Profile - Adventure App';
          break;
        case '/registration':
          document.title = 'Registration - Adventure App';
          break;
        default:
          document.title = 'Adventure App';
      }
    };

    setTitle(location.pathname);
  }, [location]);

  return null;
}
