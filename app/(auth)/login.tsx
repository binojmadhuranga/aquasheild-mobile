import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../src/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login({ email, password });
      router.replace('/');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-[#0A0E27]"
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 pt-16">
          {/* Header */}
          <View className="items-center mb-4">
            <Text className="text-white text-lg">Drying...</Text>
          </View>

          {/* Title Section */}
          <View className="mb-10">
            <Text className="text-white text-3xl font-bold text-center mb-2">
              Hello Again
            </Text>
            <Text className="text-gray-400 text-sm text-center">
              Access your AquaShield Dry account.
            </Text>
          </View>

          {/* Form Section */}
          <View className="mb-6">
            {/* Username Field */}
            <View className="mb-4">
              <Text className="text-white text-sm mb-2">UserName</Text>
              <TextInput
                className="bg-[#1A1F3A] text-white px-4 py-4 rounded-xl"
                placeholder="dinalkavidu5@gmail.com"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Field */}
            <View className="mb-6">
              <Text className="text-white text-sm mb-2">Password</Text>
              <View className="flex-row items-center bg-[#1A1F3A] rounded-xl px-4">
                <TextInput
                  className="flex-1 text-white py-4"
                  placeholder="••••••••"
                  placeholderTextColor="#6B7280"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#6B7280"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Register Link */}
          <View className="flex-row justify-center mb-8">
            <Text className="text-gray-400 text-sm">
              You have not already account?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
              <Text className="text-cyan-400 text-sm font-semibold">Register</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-white rounded-full py-4 items-center mb-8"
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#0A0E27" />
            ) : (
              <Text className="text-[#0A0E27] text-lg font-bold">Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
