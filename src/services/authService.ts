import api from './axiosConfig';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
}

export const authService = {
  // Register a new user
  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/register', data);
      return response.data;
    } catch (error: any) {
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error
        const message = error.response.data?.message || 'Registration failed';
        throw new Error(message);
      } else if (error.request) {
        // No response from server
        throw new Error('Cannot connect to server. Please check if the backend is running.');
      } else {
        // Other errors
        throw new Error(error.message || 'Registration failed');
      }
    }
  },

  // Login user
  login: async (data: LoginData): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/login', data);
      return response.data;
    } catch (error: any) {
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error
        const message = error.response.data?.message || 'Login failed';
        throw new Error(message);
      } else if (error.request) {
        // No response from server
        throw new Error('Cannot connect to server. Please check if the backend is running.');
      } else {
        // Other errors
        throw new Error(error.message || 'Login failed');
      }
    }
  },
};
