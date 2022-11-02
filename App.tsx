import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
 import React from "react";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
	return (
		<NavigationContainer>
 				<RootNavigator />
		 
		</NavigationContainer>
	);
}
