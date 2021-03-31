import { createContext } from 'react';

export const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  name: null,
  email:null,
  image:'',
  login: () => {},
  signup: () => {},
  logout: () => {}
});