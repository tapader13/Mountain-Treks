import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const setTitle = (path) => {
      if (path.startsWith('/adventure/')) {
        document.title = 'Adventure Details - Adventure App';
      } else {
        switch (true) {
          case path === '/':
            document.title = 'Home - Adventure App';
            break;
          case path === '/login':
            document.title = 'Login - Adventure App';
            break;
          case path === '/registration':
            document.title = 'Registration - Adventure App';
            break;
          case path === '/forgotpassword':
            document.title = 'Forgot Password - Adventure App';
            break;
          case path === '/myprofile':
            document.title = 'Profile - Adventure App';
            break;
          case path === '/updateprofile':
            document.title = 'Update Profile - Adventure App';
            break;
          default:
            document.title = 'Adventure App';
        }
      }
    };

    // console.log(location);
    setTitle(location.pathname);
  }, [location]);

  return null;
}
