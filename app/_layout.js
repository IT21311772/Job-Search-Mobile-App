// Importing the Stack component from "expo-router" library
import { Stack } from "expo-router";

// Importing the useCallback hook from React
import { useCallback } from "react";

// Importing the useFonts and preventAutoHideAsync functions from "expo-font" and "expo-splash-screen" respectively
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

// Preventing the splash screen from auto-hiding initially
SplashScreen.preventAutoHideAsync();

// Creating a functional component named Layout
const Layout = () => {
    // Loading custom fonts using useFonts hook
    const [fontsLoaded] = useFonts({})

    // Defining a callback function to be called on layout of the root view
    const onLayoutRootView = useCallback(async () => {
        // Checking if custom fonts are loaded
        if (fontsLoaded) {
            // Hiding the splash screen after custom fonts are loaded
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    // If custom fonts are not loaded yet, return null (component is not ready)
    if (!fontsLoaded) return null;

    // If custom fonts are loaded, render the Stack component with the onLayout callback
    return <Stack onLayout={onLayoutRootView} />;
}

// Exporting the Layout component as the default export
export default Layout;
