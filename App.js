import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import HymnListScreen from "./screens/HymnListScreen";
import HymnScreen from "./screens/HymnScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Fontisto } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App({ navigation }) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						headerShown: false,
						cardStyle: {
							backgroundColor: "white",
							paddingTop: 160,
						},
					}}
				/>
				<Stack.Screen
					name="HymnListScreen"
					component={HymnListScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="HymnScreen"
					component={HymnScreen}
					options={{
						headerStyle: {},
						headerLeft: () => (
							<TouchableOpacity>
								<Fontisto name="angle-dobule-left" size={24} color="black" />
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity>
								<Fontisto name="angle-dobule-right" size={24} color="black" />
							</TouchableOpacity>
						),
						headerTitleStyle: {
							textAlign: "center",
							alignSelf: "center",
							justifyContent: "center",
						},
						headerTitleAlign: "center",
						// headerTitle:()=>(
						//   <View style ={{flexDirection:'column'}}>
						//     <View>
						//       <Text numberOfLines={1} style={{color:"black",fontWeight:"500",fontSize:18}}>
						//         EnglishTitle for Hymn lorem Ipsum
						//       </Text>
						//     </View>
						//     <View>
						//       <Text numberOfLines={1} style={{color:"darkgray",textAlign:'center'}}>
						//         TwiTitle for Hymn lorem Ipsum
						//       </Text>
						//     </View>
						//   </View>
						// )
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
