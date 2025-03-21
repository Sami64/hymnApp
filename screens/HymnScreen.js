import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import EnglishReadBlock from "../components/EnglishReadBlock";
import TwiReadBlock from "../components/TwiReadBlock";

export default function HymnScreen({ route, navigation }) {
	const { params } = route;
	const [hymns, setHymns] = useState([]);
	const [hymn, setHymn] = useState([]);

	useEffect(() => {
		setHymns(params.hymns);
		const filter = params.hymns.filter((item) => item.id === params.id);
		console.log(filter);

		setHymn(filter);
	}, []);

	useEffect(() => {
		navigation.setOptions({ title: hymn[0]?.mhb?.title });
	}, [hymn]);

	// const data = [
	// 	{
	// 		number: "1",
	// 		EnglishTitle: "Title in french ",
	// 		TwiTitle:
	// 			"Title in twi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Ut eu sem integer vitae justo eget magna fermentum iaculis. Nullam non nisi est sit amet facilisis. Adipiscing vitae proin sagittis nisl rhoncus. Vel quam elementum pulvinar etiam. In vitae turpis massa sed elementum. Erat velit scelerisque in dictum non. Erat nam at lectus urna duis convallis. Aenean et tortor at risus viverra adipiscing at in tellus. Nisi est sit amet facilisis magna etiam tempor orci. Nunc sed augue lacus viverra vitae. Malesuada pellentesque elit eget gravida cum. Volutpat ac tincidunt vitae semper quis lectus. Non enim praesent elementum facilisis leo vel fringilla. Aliquet nibh praesent tristique magna sit amet purus. Sed odio morbi quis commodo.",
	// 	},
	// 	{
	// 		number: "2",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "3",
	// 		EnglishTitle: "Title in ga",
	// 		TwiTitle: "Title in ga",
	// 	},
	// 	{
	// 		number: "4",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "5",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "6",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "7",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "8",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in tariq",
	// 	},
	// 	{
	// 		number: "9",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "10",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "11",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "12",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "13",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "14",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "15",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "16",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "17",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "18",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "19",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "20",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "21",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "22",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// 	{
	// 		number: "23",
	// 		EnglishTitle: "Title in english",
	// 		TwiTitle: "Title in twi",
	// 	},
	// ];

	return (
		<SafeAreaView style={styles.mainContainer}>
			<View style={styles.subContainer}>
				<View style={styles.engHymnContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>MHB {hymn[0]?.mhb?.number}</Text>
						<FlatList
							data={hymn[0]?.mhb?.stanzas}
							renderItem={({ item }) => {
								return (
									<EnglishReadBlock
										number={hymn[0]?.mhb?.stanzas.indexOf(item) + 1}
										EnglishTitle={item}
									/>
								);
							}}
							// keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
				<View style={styles.twiHymnContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>CAN {hymn[0]?.can?.number}</Text>
						<FlatList
							data={hymn[0]?.can?.stanzas}
							renderItem={({ item }) => {
								return (
									<TwiReadBlock
										number={hymn[0]?.can?.stanzas.indexOf(item) + 1}
										TwiTitle={item}
									/>
								);
							}}
							// keyExtractor={(item) => item.number}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	mainContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
	},
	subContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: Dimensions.get("screen").width,
	},
	engHymnContainer: {
		borderRightColor: "darkgrey",
		borderRightWidth: 1,
		alignItems: "center",
	},
	twiHymnContainer: {
		borderLeftColor: "darkgrey",
		borderLeftWidth: 1,
		alignItems: "center",
	},
	titleContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
	},
});
