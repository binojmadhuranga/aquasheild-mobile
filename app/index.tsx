import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // User is authenticated, stay on home or navigate to main app
        // For now, we'll just show a welcome message
      } else {
        // User is not authenticated, redirect to login
        router.replace('/(auth)/login');
      }
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 bg-[#0A0E27] items-center justify-center">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#0A0E27] items-center justify-center">
      <Text className="text-white text-2xl font-bold mb-4">
        Welcome to AquaShield Dry!
      </Text>
      {user && (
        <Text className="text-gray-400 text-lg">
          Hello, {user.name}!
        </Text>
      )}
    </View>
  );
}
