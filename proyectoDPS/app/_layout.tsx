import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import SplashScreen from '../components/LoginScreens/SplashScreen';
import PrincipalLogin from '../components/LoginScreens/PrincipalLogin';
import GetStarted from '../components/LoginScreens/GetStarted';

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function prepare() {
      await loadResourcesAsync();
      setAppIsReady(true);
    }

    prepare();
  }, []);

  async function loadResourcesAsync() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulando carga de recursos
  }

  useEffect(() => {
    if (appIsReady) {
      setTimeout(() => {
        // Lógica adicional si es necesario
      }, 2000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <SplashScreen />;
  }
  if (!loggedIn) {
    return (
      <Stack>
        <Stack.Screen 
          name="(login)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    );
  }
}
