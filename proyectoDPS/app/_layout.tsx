import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router/stack';


import SplashScreen from './splashScreen';



export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await loadResourcesAsync();
      setAppIsReady(true);
    }

    prepare();
  }, []);

  async function loadResourcesAsync() {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      );

}