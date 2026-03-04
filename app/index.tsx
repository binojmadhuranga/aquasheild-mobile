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
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      // Initialize auth first
      await initialize();
      
      // Check onboarding status
      const onboardingComplete = await storageService.getOnboardingStatus();
      setHasCompletedOnboarding(onboardingComplete);
      setIsCheckingOnboarding(false);
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isInitialized && !isCheckingOnboarding) {
      // First check: Has user completed onboarding?
      if (!hasCompletedOnboarding) {
        router.replace('/onboarding');
        return;
      }

      // Second check: Is user authenticated?
      if (user) {
        // User is authenticated, navigate to home
        router.replace('/(tabs)/home');
      } else {
        // User is not authenticated, navigate to login
        router.replace('/(auth)/login');
      }
    }
  }, [user, isInitialized, isCheckingOnboarding, hasCompletedOnboarding]);

  // Show loading while initializing
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
