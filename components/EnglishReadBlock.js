import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function EnglishReadBlock({ number, EnglishTitle }) {
	return (
		<View style={styles.container}>
			<View style={styles.numCont}>
				<Text style={styles.number}>{number}</Text>
			</View>
			<View style={styles.textCont}>
				<Text style={styles.EnglishTitle}>{EnglishTitle}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		marginHorizontal: 5,
		width: Dimensions.get("screen").width * 0.45,
		flex: 1,
	},
	numCont: {
		flexDirection: "row",
		alignSelf: "flex-start",
	},
	number: {
		fontWeight: "700",
		marginRight: 5,
		textAlign: "left",
	},
	textCont: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	EnglishTitle: {
		fontSize: 18,
		textAlign: "center",
		flexWrap: "wrap",
		flex: 1,
	},
});
