import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// IMPORTANT: Configure your backend URL based on where you're running
// 1. For Android Emulator: use 'http://10.0.2.2:5000/api'
// 2. For iOS Simulator: use 'http://localhost:5000/api'
// 3. For Physical Device: use your computer's local IP (e.g., 'http://192.168.1.100:5000/api')
//    To find your IP: Run 'ipconfig' (Windows) or 'ifconfig' (Mac/Linux) in terminal

// Change this to your computer's local IP address when testing on a physical device
const getBaseURL = () => {
  // IMPORTANT: If you're testing on a physical device, uncomment and update this line:
  return 'http://172.20.10.5:5000/api';  // Your computer's IP address
  
  // For emulators/simulators only:
  // if (Platform.OS === 'android') {
  //   // Android emulator uses 10.0.2.2 to access host machine's localhost
  //   return 'http://10.0.2.2:5000/api';
  // } else {
  //   // iOS simulator can use localhost
  //   return 'http://localhost:5000/api';
  // }
};

const BASE_URL = getBaseURL();
console.log('🌐 API Base URL:', BASE_URL);
console.log('📱 Platform:', Platform.OS);

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  async (config) => {
    console.log('📤 API Request:', config.method?.toUpperCase(), config.url);
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('❌ API Error:', error.response.status, error.response.data);
      
      // Handle 401 Unauthorized - token expired or invalid
      if (error.response.status === 401) {
        // Clear stored auth data
        AsyncStorage.multiRemove(['token', 'user']);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('❌ Network Error - Cannot reach server:', error.message);
      console.error('🔍 Debugging Info:');
      console.error('   - Base URL:', BASE_URL);
      console.error('   - Platform:', Platform.OS);
      console.error('   - Is your backend running on http://localhost:5000?');
      console.error('   - Are you using Android Emulator? (URL should be http://10.0.2.2:5000/api)');
      console.error('   - Are you using a Physical Device? (Update URL to your computer\'s IP)');
    } else {
      // Something else happened
      console.error('❌ Error:', error.message);
    } 
    return Promise.reject(error);
  }
);

export default api;
