import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../src/store/authStore';

export default function Index() {
  const user = useAuthStore((state: any) => state.user);
  const isInitialized = useAuthStore((state: any) => state.isInitialized);
  const initialize = useAuthStore((state: any) => state.initialize);
  const router = useRouter();

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      if (!user) {
        router.replace('/(auth)/login');
      }
    }
  }, [user, isInitialized]);

  if (!isInitialized) {
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
