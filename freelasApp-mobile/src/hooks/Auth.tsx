import React, {
  useContext,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import apiClient from '../services/apiClient';

interface UserProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
interface ResponseProps {
  user: Omit<UserProps, 'password'>;
  token: string;
}

interface UserCredetial {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: Omit<UserProps, 'password'>;
  token: string;
  isLoaded: boolean;
  signin(credentials: UserCredetial): Promise<void>;
  signup(): Promise<void>;
  createAccount(userData: UserProps): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Omit<UserProps, 'password'>>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [token, setToken] = useState<string>('');

  const signin = useCallback(async (credentials: UserCredetial) => {
    const { data } = await apiClient.post<ResponseProps>('login', credentials);

    setToken(data.token);
    setUser(data.user);

    await AsyncStorage.multiSet([
      ['@token', data.token],
      ['@user', JSON.stringify(data.user)],
    ]);
  }, []);

  const signup = useCallback(async () => {
    setToken('');
    setUser(null);
    await AsyncStorage.removeItem('@token');
    await AsyncStorage.removeItem('@user');
  }, []);

  const createAccount = useCallback(async (userData: UserProps) => {
    const { data } = await apiClient.post<ResponseProps>('users', userData);
    setToken(data.token);
    setUser(data.user);

    await AsyncStorage.multiSet([
      ['@token', data.token],
      ['@user', JSON.stringify(data.user)],
    ]);
  }, []);

  useEffect(() => {
    async function storage() {
      const [tokenStorage, userStorage] = await AsyncStorage.multiGet([
        '@token',
        '@user',
      ]);

      if (userStorage[1] && tokenStorage[1]) {
        setToken(tokenStorage[1]);
        setUser(JSON.parse(userStorage[1]));
      }
      setIsLoaded(false);
    }

    storage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, isLoaded, signin, signup, createAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext<AuthContextProps>(AuthContext);

  return context;
}
export { AuthProvider, useAuth };
