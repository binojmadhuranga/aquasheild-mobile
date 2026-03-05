import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderTopColor: 'rgba(139, 133, 168, 0.2)',
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#8b85a8',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Ionicons name="home" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Ionicons name="stats-chart" size={24} color={color} />
            ) : (
              <Ionicons name="stats-chart-outline" size={24} color={color} />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Ionicons name="person" size={24} color={color} />
            ) : (
              <Ionicons name="person-outline" size={24} color={color} />
            )
          ),
        }}
      />
    </Tabs>
  );
}
