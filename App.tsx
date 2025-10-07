import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, ActivityIndicator } from "react-native";
import RootNavigator from "@/navigation/RootNavigator";
import { AuthProvider } from "@/context/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prep = async () => {};
    prep().finally(() => setReady(true));
  }, []);

  useEffect(() => { if (ready) SplashScreen.hideAsync(); }, [ready]);

  if (!ready) {
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator/></View>;
  }

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
