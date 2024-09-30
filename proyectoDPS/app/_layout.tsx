import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import SplashScreen from '../components/LoginScreens/SplashScreen';
import PrincipalLogin from '../components/LoginScreens/PrincipalLogin';
import GetStarted from '../components/LoginScreens/GetStarted';



export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);
  //const [showLoginScreen, setShowLoginScreen] = useState(false);

  useEffect(() => {
    async function prepare() {
      await loadResourcesAsync();
      setAppIsReady(true);
    }

    prepare();
  }, []);

  async function loadResourcesAsync() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating resource loading
  }

  useEffect(() => {
    if (appIsReady) {
      setTimeout(() => {
        //setShowLoginScreen(true);
      }, 2000); // Set this to the time you want the login screen to appear after the splash screen
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  //return (
  //  <GetStarted/>
  //);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
