import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { CustomDrawerContent } from "@/components/CustomDrawerContent";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer 
                drawerContent={CustomDrawerContent}
                screenOptions={{
                  drawerHideStatusBarOnOpen: true
                }}
                >
                    <Drawer.Screen
                        name="index"
                        options={{
                            drawerLabel: "Wellness Journal",
                            title: "Wellness Journal",
                            drawerIcon: ({ size, color }) => (
                              <Ionicons name="journal" size={size} color={color} />
                            )
                        }}
                    />
                    <Drawer.Screen
                        name="explore"
                        options={{
                            drawerLabel: "Dashboard",
                            title: "Dashboard",
                            drawerIcon: ({ size, color }) => (
                              <Ionicons name="stats-chart" size={size} color={color} />
                            )
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
