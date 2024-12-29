import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            ...styles.tabBar,
          },
        }),
        tabBarIconStyle: {
          marginTop: 12, // Центрирование иконок
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="format-list-bulleted" color="#4A3780" />,
          tabBarLabelStyle: {
            color: '#4A3780'
          },
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color }) => 
            <ThemedView style={styles.floatingButton}>
              <IconSymbol size={28} name="create.fill" color="white" />
            </ThemedView>,
            tabBarLabelStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="account-circle" color="#4A3780" />,
          tabBarLabelStyle: {
            color: '#4A3780'
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 80,
    backgroundColor: 'white',
    elevation: 8,
  },
  floatingButton: {
    backgroundColor: '#4A3780', // Customize as needed
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 12,
  },
});