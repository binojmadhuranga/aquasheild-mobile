import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../src/store/authStore';
import { storageService } from '../src/utils/storage';

export default function Index() {
  const user = useAuthStore((state: any) => state.user);
  const isInitialized = useAuthStore((state: any) => state.isInitialized);
  const initialize = useAuthStore((state: any) => state.initialize);
  const router = useRouter();
  const [isCheckingOnboarding, setIsCheckingOnboarding] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      // Initialize auth first
      await initialize();
      
      // Check onboarding status
      const hasCompletedOnboarding = await storageService.getOnboardingStatus();
      setIsCheckingOnboarding(false);
      
      // Route based on auth and onboarding status
      if (!hasCompletedOnboarding) {
        router.replace('/onboarding');
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isInitialized && !isCheckingOnboarding) {
      if (user) {
        // User is authenticated, navigate to home
        router.replace('/(tabs)/home');
      }
      // If not authenticated and onboarding is complete, 
      // user will be on login screen already from onboarding
    }
  }, [user, isInitialized, isCheckingOnboarding]);

  // Show loading while initializing
  if (!isInitialized || isCheckingOnboarding) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
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
});
