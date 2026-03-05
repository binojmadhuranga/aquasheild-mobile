import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { storageService } from '../../src/utils/storage';

const { width, height } = Dimensions.get('window');

interface OnboardingPage {
  id: string;
  title: string;
  description: string;
  image: any;
}

const onboardingData: OnboardingPage[] = [
  {
    id: '1',
    title: 'Welcome to AquaShield Dry',
    description: 'Smart drying made simple and efficient',
    image: require('../../assets/onboard.png'),
  },
  {
    id: '2',
    title: 'Smart Air Drying',
    description: 'Monitor airflow, temperature, and drying status in real time',
    image: require('../../assets/onboard.png'),
  },
  {
    id: '3',
    title: 'Dry with Confidence to DWD',
    description: 'Control your system anytime and protect your clothes from moisture damage',
    image: require('../../assets/onboard.png'),
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const handleSkip = async () => {
    await storageService.completeOnboarding();
    router.replace('/(auth)/login');
  };

  const handleComplete = async () => {
    await storageService.completeOnboarding();
    router.replace('/(auth)/login');
  };

  const renderItem = ({ item }: { item: OnboardingPage }) => (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <LinearGradient colors={['#1a1a3e', '#0f0f2e', '#0a0a1f']} style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Onboarding Slides */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.flatList}
      />

      {/* Dots Indicator */}
      {renderDots()}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={handleBack}
          disabled={currentIndex === 0}
        >
          <Text
            style={[
              styles.buttonText,
              styles.backButtonText,
              currentIndex === 0 && styles.disabledText,
            ]}
          >
            Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
          <Text style={[styles.buttonText, styles.nextButtonText]}>
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  slide: {
    width,
    height: height * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    width: width * 0.7,
    height: height * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 24,
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 50,
    gap: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  nextButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  backButtonText: {
    color: '#fff',
  },
  nextButtonText: {
    color: '#1a1a3e',
  },
  disabledText: {
    opacity: 0.3,
  },
});
