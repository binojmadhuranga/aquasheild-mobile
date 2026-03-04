import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../src/context/AuthContext';

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
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to AquaShield Dry!
      </Text>
      {user && (
        <Text style={styles.userText}>
          Hello, {user.name}!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E27',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userText: {
    color: '#9CA3AF',
    fontSize: 18,
  },
});
