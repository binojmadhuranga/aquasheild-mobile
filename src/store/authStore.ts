import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService, LoginData, RegisterData, AuthResponse } from '../services/authService';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isInitialized: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set: any, get: any) => ({
  user: null,
  token: null,
  isLoading: false,
  isInitialized: false,

  initialize: async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      
      if (storedToken && storedUser) {
        set({ 
          token: storedToken, 
          user: JSON.parse(storedUser),
          isInitialized: true 
        });
      } else {
        set({ isInitialized: true });
      }
    } catch (error) {
      console.error('Failed to load auth data:', error);
      set({ isInitialized: true });
    }
  },

  login: async (data: LoginData) => {
    set({ isLoading: true });
    try {
      const response: AuthResponse = await authService.login(data);
      
      if (response.token && response.user) {
        await AsyncStorage.setItem('token', response.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.user));
        set({ 
          token: response.token, 
          user: response.user,
          isLoading: false 
        });
      }
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (data: RegisterData) => {
    set({ isLoading: true });
    try {
      const response: AuthResponse = await authService.register(data);
      
      if (response.token && response.user) {
        await AsyncStorage.setItem('token', response.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.user));
        set({ 
          token: response.token, 
          user: response.user,
          isLoading: false 
        });
      }
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      set({ token: null, user: null });
    } catch (error) {
      console.error('Failed to logout:', error);
      throw error;
    }
  },
}));
