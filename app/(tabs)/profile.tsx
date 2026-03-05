import React from 'react';
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
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../src/store/authStore';

export default function Profile() {
  const user = useAuthStore((state: any) => state.user);
  const logout = useAuthStore((state: any) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
              router.replace('/(auth)/login');
            } catch (error) {
              Alert.alert('Error', 'Failed to logout');
            }
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
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          {/* Profile Card */}
          <View style={styles.profileCard}>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </Text>
              </View>
            </View>

            {/* User Info */}
            <Text style={styles.userName}>{user?.name || 'User'}</Text>
            <Text style={styles.userEmail}>{user?.email || 'No email'}</Text>
          </View>

          {/* Menu Items */}
          <View style={styles.menuSection}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="person-outline" size={24} color="#fff" />
              </View>
              <Text style={styles.menuText}>Edit Profile</Text>
              <Ionicons name="chevron-forward" size={20} color="#8b85a8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="notifications-outline" size={24} color="#fff" />
              </View>
              <Text style={styles.menuText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={20} color="#8b85a8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="settings-outline" size={24} color="#fff" />
              </View>
              <Text style={styles.menuText}>Settings</Text>
              <Ionicons name="chevron-forward" size={20} color="#8b85a8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="help-circle-outline" size={24} color="#fff" />
              </View>
              <Text style={styles.menuText}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={20} color="#8b85a8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="information-circle-outline" size={24} color="#fff" />
              </View>
              <Text style={styles.menuText}>About</Text>
              <Ionicons name="chevron-forward" size={20} color="#8b85a8" />
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

          {/* Version */}
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
  },
  profileCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.3)',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  menuSection: {
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 133, 168, 0.2)',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.3)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.5)',
    gap: 12,
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  versionText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
    marginBottom: 10,
  },
});