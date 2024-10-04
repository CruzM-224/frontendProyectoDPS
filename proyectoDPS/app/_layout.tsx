import React, { useState, useEffect } from "react";
import { Stack } from "expo-router/stack";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

import SplashScreen from "../components/LoginScreens/SplashScreen";
import getStarted from "./(login)/getStarted";

WebBrowser.maybeCompleteAuthSession();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "463503113117-7e6ok04llhb5t5djdaqeo21n75dv4har.apps.googleusercontent.com",
    
      webClientId:
      "463503113117-hns5csl4i8ejdab576e7pof3qtp5drm0.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    async function prepare() {
      await loadResourcesAsync();
      setAppIsReady(true);
    }

    prepare();
  }, []);

  async function loadResourcesAsync() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulando carga de recursos
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
        <Stack.Screen name="(login)" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    );
  }
}
