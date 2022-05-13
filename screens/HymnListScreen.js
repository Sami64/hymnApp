import {
	View,
	Text,
	FlatList,
	Dimensions,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MHBnCAN from "../storage/MHBnCAN";
import hymnals from "../storage/hymns";
import { Searchbar } from "react-native-paper";

const data = [
	{
		number: "1",
		EnglishTitle: "Title in french",
		TwiTitle: "Title in twi",
	},
	{
		number: "2",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "3",
		EnglishTitle: "Title in ga",
		TwiTitle: "Title in ga",
	},
	{
		number: "4",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "5",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "6",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "7",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "8",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in tariq",
	},
	{
		number: "9",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "10",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "11",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "12",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "13",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "14",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "15",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "16",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "17",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "18",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "19",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "20",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "21",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "22",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
	{
		number: "23",
		EnglishTitle: "Title in english",
		TwiTitle: "Title in twi",
	},
];

export default function HymnListScreen({ navigation }) {
	const [dataFromState, setData] = useState(data);
	const [hymns, setHymns] = useState([]);

	const item = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => navigation.navigate("HymnScreen")}
				style={styles.blockcontainer}
			>
				<Text style={styles.blocknumber}>{item.number}</Text>
				<View style={styles.blocktitle}>
					<Text numberOfLines={1} style={styles.blocktitleEnglish}>
						{item.EnglishTitle}
					</Text>
					<Text numberOfLines={1} style={styles.blocktitleTwi}>
						{item.TwiTitle}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	useEffect(() => {
		setHymns(hymnals);
	}, []);

	const searchHymn = (input) => {
		let data = dataFromState;
		let searchData = data.filter((item) => {
			return (
				item.EnglishTitle.toLowerCase().includes(input.toLowerCase()) ||
				item.TwiTitle.toLowerCase().includes(input.toLowerCase())
			);
		});
		setData(searchData);
	};
	return (
		<>
			{/* <TextInput
   style = {styles.input}
   placeholder = "Search For Hymn Here"
   multiline = {false}
   autoCorrect={false}
   returnKeyType={"search"}
   selectionColor={"darkblue"}
   onChangeText = {(input)=>{searchHymn(input);}}
   />
   <Text> This is your hymn </Text> */}
			<SafeAreaView>
				<FlatList
					data={hymns}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.blockcontainer}
							onPress={() =>
								navigation.navigate("HymnScreen", { id: item?.id, hymns: hymns })
							}
						>
							<Text style={styles.blocknumber}>{item.mhb?.number}</Text>
							<View style={styles.blocktitle}>
								<Text style={styles.blocktitleEnglish}>{item.mhb?.title}</Text>
								<Text style={styles.blocktitleTwi}>{item.can?.title}</Text>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
					ListHeaderComponent={
						<Searchbar
							style={styles.input}
							placeholder="Search Hymn Here"
							multiline={false}
							autoCorrect={false}
							returnKeyType={"search"}
							selectionColor={"darkblue"}
							onChangeText={(input) => {
								searchHymn(input);
							}}
						/>
					}
				/>
			</SafeAreaView>
		</>
	);
}
const styles = StyleSheet.create({
	input: {
		backgroundColor: "white",
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 10,
		paddingHorizontal: 10,
		color: "black",
		height: Dimensions.get("screen").height / 15,
		margin: 10,
	},
	// list block styling
	blockcontainer: {
		flexDirection: "row",
		borderBottomColor: "gray",
		borderTopColor: "gray",
		paddingLeft: 15,
		paddingRight: 15,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		width: Dimensions.get("screen").width,
		height: 65,
	},
	blocknumber: {
		fontSize: 20,
		fontWeight: "bold",
	},
	blocktitle: {
		flexDirection: "column",
		marginLeft: 10,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	blocktitleEnglish: {
		fontSize: 18,
	},
	blocktitleTwi: {
		color: "gray",
	},
});
