import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const greeting = 'Good Morning..';
  const [isFolded, setIsFolded] = useState(false);

  const handleFoldToggle = (fold: boolean) => {
    Alert.alert(
      fold ? 'Fold System' : 'Unfold System',
      `Are you sure you want to ${fold ? 'fold' : 'unfold'} the drying system?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            setIsFolded(fold);
            // TODO: Send API request to backend to control the system
            // await api.post('/system/control', { action: fold ? 'fold' : 'unfold' });
          },
        },
      ]
    );
  };

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

          {/* Fold/Unfold Status Section */}
          <View style={styles.statusCard}>
            <View style={styles.statusHeader}>
              <Text style={styles.statusTitle}>System Status</Text>
              <View style={[
                styles.statusBadge,
                isFolded ? styles.statusFolded : styles.statusUnfolded
              ]}>
                <Ionicons 
                  name={isFolded ? 'contract-outline' : 'expand-outline'} 
                  size={16} 
                  color="#fff" 
                />
                <Text style={styles.statusBadgeText}>
                  {isFolded ? 'Folded' : 'Unfolded'}
                </Text>
              </View>
            </View>

            {/* Visual Status Display */}
            <View style={styles.statusDisplay}>
              <View style={styles.statusIconContainer}>
                <Ionicons 
                  name={isFolded ? 'square-outline' : 'albums-outline'} 
                  size={64} 
                  color={isFolded ? '#f59e0b' : '#10b981'} 
                />
              </View>
              <Text style={styles.statusDescription}>
                {isFolded 
                  ? 'System is currently folded and not drying' 
                  : 'System is unfolded and ready for drying'}
              </Text>
            </View>

            {/* Manual Control Buttons */}
            <View style={styles.controlSection}>
              <Text style={styles.controlLabel}>Manual Control</Text>
              <View style={styles.controlButtons}>
                <TouchableOpacity 
                  style={[
                    styles.controlButton,
                    isFolded && styles.controlButtonActive
                  ]}
                  onPress={() => handleFoldToggle(true)}
                  disabled={isFolded}
                >
                  <Ionicons 
                    name="contract" 
                    size={24} 
                    color={isFolded ? '#fff' : 'rgba(255, 255, 255, 0.6)'} 
                  />
                  <Text style={[
                    styles.controlButtonText,
                    isFolded && styles.controlButtonTextActive
                  ]}>
                    Fold
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[
                    styles.controlButton,
                    !isFolded && styles.controlButtonActive
                  ]}
                  onPress={() => handleFoldToggle(false)}
                  disabled={!isFolded}
                >
                  <Ionicons 
                    name="expand" 
                    size={24} 
                    color={!isFolded ? '#fff' : 'rgba(255, 255, 255, 0.6)'} 
                  />
                  <Text style={[
                    styles.controlButtonText,
                    !isFolded && styles.controlButtonTextActive
                  ]}>
                    Unfold
                  </Text>
                </TouchableOpacity>
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
  statusCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.3)',
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  statusFolded: {
    backgroundColor: 'rgba(245, 158, 11, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.5)',
  },
  statusUnfolded: {
    backgroundColor: 'rgba(16, 185, 129, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.5)',
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  statusDisplay: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  statusIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statusDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 20,
  },
  controlSection: {
    marginTop: 10,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  controlButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  controlButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  controlButtonActive: {
    backgroundColor: 'rgba(99, 102, 241, 0.5)',
    borderColor: 'rgba(99, 102, 241, 0.8)',
  },
  controlButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  controlButtonTextActive: {
    color: '#fff',
  },
});
