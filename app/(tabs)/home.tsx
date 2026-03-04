import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const greeting = 'Good Morning..';

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
            <Text style={styles.greeting}>{greeting}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Living Area Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Living Area</Text>
              <TouchableOpacity style={styles.toggleButton}>
                <View style={styles.toggleInner} />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.temperatureSection}>
                <View style={styles.temperatureInfo}>
                  <Text style={styles.temperatureLabel}>Temperature</Text>
                  <View style={styles.selectRow}>
                    <Ionicons name="location-outline" size={14} color="#fff" />
                    <Text style={styles.selectText}>Select Item</Text>
                  </View>
                </View>
              </View>

              <View style={styles.percentageSection}>
                <Text style={styles.percentageText}>10%</Text>
                <Text style={styles.percentageText}>40%</Text>
              </View>
            </View>
          </View>

          {/* Add more cards or content here */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  card: {
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.3)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  toggleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  temperatureSection: {
    flex: 1,
  },
  temperatureInfo: {
    marginBottom: 10,
  },
  temperatureLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
  selectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  selectText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  percentageSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
