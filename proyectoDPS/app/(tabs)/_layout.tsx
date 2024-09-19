import { Stack, Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function TabLayout() {
  return (
    /* <Stack>
      <Stack.Screen name="index" />
    </Stack> */
    <Tabs screenOptions={{ tabBarActiveTintColor: '#DB4444', tabBarInactiveTintColor: '#000000' }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Shop',
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="store" color={color} />,
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="magnifying-glass" color={color} />,
      }}
    />
    <Tabs.Screen
      name="cart"
      options={{
        title: 'Cart',
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="cart-shopping" color={color} />,
      }}
    />
    <Tabs.Screen
      name="favourite"
      options={{
        title: 'Favourite',
        tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="heart" color={color} />,
      }}
    />
    <Tabs.Screen
      name="account"
      options={{
        title: 'Account',
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="user" color={color} />,
      }}
    />
  </Tabs>
  );
}
