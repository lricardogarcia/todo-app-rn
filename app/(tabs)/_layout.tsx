import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    const {colors} = useTheme();
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.surface,
                borderTopWidth: 1,
                borderTopColor: colors.border,
                height: 90,
                paddingBottom: 10,
                paddingTop: 6,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600',
                marginBottom: 4,
            }
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Todos',
            tabBarIcon: ({ color, size }) => (
                <Ionicons
                name="flash-outline"
                color={color}
                size={size}
                />
            ),
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <Ionicons
                name="settings-outline"
                color={color}
                size={size}
                />
            ),
            }}
        />
        </Tabs>
    );
}
