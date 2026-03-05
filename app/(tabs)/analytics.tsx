import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Analytics() {
  // Sample data - replace with real API data later
  const dryTimePrediction = '2h 30m';
  const windSpeed = '12 km/h';
  const humidity = '65%';
  const sunlight = 'Moderate';
  const temperature = '28°C';
  const uvIndex = '6 - High';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1e1b4b', '#312e81', '#1e1b4b', '#0f172a']}
        style={styles.background}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Analytics</Text>
            <Text style={styles.headerSubtitle}>Weather & Drying Conditions</Text>
          </View>

          {/* Dry Time Prediction Card - Featured */}
          <View style={styles.featuredCard}>
            <View style={styles.featuredIconContainer}>
              <Ionicons name="time-outline" size={32} color="#fff" />
            </View>
            <Text style={styles.featuredLabel}>Estimated Dry Time</Text>
            <Text style={styles.featuredValue}>{dryTimePrediction}</Text>
            <Text style={styles.featuredDescription}>
              Based on current weather conditions
            </Text>
          </View>

          {/* Weather Conditions Section */}
          <Text style={styles.sectionTitle}>Current Conditions</Text>

          {/* Grid of Weather Cards */}
          <View style={styles.gridContainer}>
            {/* Wind Speed */}
            <View style={styles.gridCard}>
              <View style={styles.cardIconContainer}>
                <Ionicons name="speedometer-outline" size={28} color="#22d3ee" />
              </View>
              <Text style={styles.cardLabel}>Wind Speed</Text>
              <Text style={styles.cardValue}>{windSpeed}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Good</Text>
              </View>
            </View>

            {/* Humidity */}
            <View style={styles.gridCard}>
              <View style={styles.cardIconContainer}>
                <Ionicons name="water-outline" size={28} color="#3b82f6" />
              </View>
              <Text style={styles.cardLabel}>Humidity</Text>
              <Text style={styles.cardValue}>{humidity}</Text>
              <View style={[styles.statusBadge, styles.statusWarning]}>
                <Text style={styles.statusText}>Medium</Text>
              </View>
            </View>
          </View>

          <View style={styles.gridContainer}>
            {/* Sunlight */}
            <View style={styles.gridCard}>
              <View style={styles.cardIconContainer}>
                <Ionicons name="sunny-outline" size={28} color="#fbbf24" />
              </View>
              <Text style={styles.cardLabel}>Sunlight</Text>
              <Text style={styles.cardValue}>{sunlight}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Optimal</Text>
              </View>
            </View>

            {/* Temperature */}
            <View style={styles.gridCard}>
              <View style={styles.cardIconContainer}>
                <Ionicons name="thermometer-outline" size={28} color="#f59e0b" />
              </View>
              <Text style={styles.cardLabel}>Temperature</Text>
              <Text style={styles.cardValue}>{temperature}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Perfect</Text>
              </View>
            </View>
          </View>

          {/* UV Index Full Width Card */}
          <View style={styles.fullWidthCard}>
            <View style={styles.fullWidthCardHeader}>
              <View style={styles.cardIconContainer}>
                <Ionicons name="shield-checkmark-outline" size={28} color="#a78bfa" />
              </View>
              <View style={styles.fullWidthCardContent}>
                <Text style={styles.cardLabel}>UV Index</Text>
                <Text style={styles.fullWidthCardValue}>{uvIndex}</Text>
              </View>
            </View>
            <Text style={styles.uvWarning}>
              ⚠️ Protection recommended for extended outdoor exposure
            </Text>
          </View>

          {/* Recommendations Section */}
          <Text style={styles.sectionTitle}>Drying Recommendations</Text>
          
          <View style={styles.recommendationCard}>
            <View style={styles.recommendationItem}>
              <Ionicons name="checkmark-circle" size={24} color="#10b981" />
              <Text style={styles.recommendationText}>
                Excellent conditions for outdoor drying
              </Text>
            </View>
            <View style={styles.recommendationItem}>
              <Ionicons name="checkmark-circle" size={24} color="#10b981" />
              <Text style={styles.recommendationText}>
                Good air circulation detected
              </Text>
            </View>
            <View style={styles.recommendationItem}>
              <Ionicons name="information-circle" size={24} color="#fbbf24" />
              <Text style={styles.recommendationText}>
                Monitor humidity levels in the afternoon
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.4)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.3)',
  },
  featuredIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featuredLabel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  featuredValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  gridCard: {
    flex: 1,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.2)',
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.5)',
  },
  statusWarning: {
    backgroundColor: 'rgba(251, 191, 36, 0.3)',
    borderColor: 'rgba(251, 191, 36, 0.5)',
  },
  statusText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  fullWidthCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.2)',
  },
  fullWidthCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  fullWidthCardContent: {
    marginLeft: 16,
    flex: 1,
  },
  fullWidthCardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  uvWarning: {
    fontSize: 12,
    color: 'rgba(251, 191, 36, 1)',
    fontStyle: 'italic',
  },
  recommendationCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.2)',
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
});