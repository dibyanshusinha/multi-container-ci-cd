import { createContext } from 'react';
// import Loading from '../components/Loading';

// const { AuthContextProvider, AuthContext } = React.createContext(defaultValue);

const AuthContext = createContext(null);

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState();
//   const [authLoader, setauthLoader] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       await delay(3000);
//       console.log('From AuthContext');
//       setAuthUser({ email: 'abc', name: 'Dibs' });
//       setauthLoader(false);
//     }

//     fetchData();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {/* {console.log('Ran Auth context', authLoader, authUser)}
//       {authLoader ? <Loading /> : } */}
//       {children}
//     </AuthContext.Provider>
//   );
// };

export default AuthContext;
