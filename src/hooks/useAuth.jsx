import { useContext } from 'react';
import { userContext } from '../provider/UserProvider';

const useAuth = () => {
  return useContext(userContext);
};

export default useAuth;
