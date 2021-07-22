import {signInAsync, AppleAuthenticationScope} from 'expo-apple-authentication';
import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {startAsync} from 'expo-auth-session';
import axios, {AxiosResponse} from 'axios';

interface UserData {
  photo?: string;
  email: string;
  name: string;
  id: string;
}

interface AuthContextData {
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  userLoading: boolean;
  user?: UserData;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const storageKey = '@gofinances:user';

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserData>({} as UserData);

  const signInWithGoogle = async () => {
    try {
      const redirectUri = process.env.GOOGLE_OAUTH2_REDIRECT_URI;
      const clientId = process.env.GOOGLE_OAUTH2_CLIENT_ID;
      const scope = encodeURI('profile email');
      const responseType = 'token';

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
      const {type, params} = (await startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success') {
        const response: AxiosResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`,
        );

        const data = {
          name: response.data.given_name,
          photo: response.data.picture,
          email: response.data.email,
          id: response.data.id,
        };

        await AsyncStorage.setItem(storageKey, JSON.stringify(data));

        setUser(data);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const signInWithApple = async () => {
    try {
      const response = await signInAsync({
        requestedScopes: [
          AppleAuthenticationScope.FULL_NAME,
          AppleAuthenticationScope.EMAIL,
        ],
      });

      if (response) {
        const data = {
          name: response.fullName?.givenName!,
          id: String(response.user),
          email: response.email!,
        };

        await AsyncStorage.setItem(storageKey, JSON.stringify(data));

        setUser(data);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const signOut = async () => {
    try {
      setUser({} as UserData);

      await AsyncStorage.getItem(storageKey);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const data = await AsyncStorage.getItem(storageKey);
      const parsedData = data ? JSON.parse(data) : {};

      setUser(parsedData);
      setUserLoading(false);
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{userLoading, user, signOut, signInWithGoogle, signInWithApple}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
