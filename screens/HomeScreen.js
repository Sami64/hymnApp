import {
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import MHBnCAN from "../storage/MHBnCAN";

function HomeScreen({ route, navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.buttonsCont}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("HymnListScreen", { MHBnCAN })}
				>
					<Text style={styles.buttonText}>METHODIST HYMNS AND CAN(NEW)</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>CANTICLES AND POPULAR ANTHEMS</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>LECTIONARY 2022</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.favButton}>
					<AntDesign
						style={{ paddingRight: 10 }}
						name="star"
						size={24}
						color="black"
					/>
					<Text style={styles.buttonText}>FAVORITES</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "flex-start",
		marginBottom: 90,
	},
	buttonsCont: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderTopColor: "darkgray",
		borderBottomColor: "darkgray",
		width: Dimensions.get("screen").width,
	},
	button: {
		borderTopColor: "darkgray",
		borderBottomColor: "darkgray",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		height: 70,
		justifyContent: "center",
		alignItems: "center",
	},
	favButton: {
		flexDirection: "row",
		borderTopColor: "darkgray",
		borderBottomColor: "darkgray",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		height: 70,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "darkblue",
	},
});

export default HomeScreen;
