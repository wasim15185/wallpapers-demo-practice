import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import { RootStackNavigatorParamList } from "../navigator/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Access_Key, BASE_URL } from "../constant/Constant";
import axios from "axios";
import { Photo } from "./../types/Photo";
import { Card } from "./../components/Card";

type ProfileProps = NativeStackScreenProps<
	RootStackNavigatorParamList,
	"AllWallpapers"
>;

type GetAllPhotoResponse = {
	results: Photo[];
};

export default function AllWallpapersScreen({
	route,
	navigation,
}: ProfileProps): JSX.Element {
	const [res, setRes] = useState<string[]>([
		"https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHwyfHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHwzfHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw0fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1508138221679-760a23a2285b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw1fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw2fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw3fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw4fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHw5fHxyYW5kb218ZW58MHx8fHwxNjY3MzU5NDgw&ixlib=rb-4.0.3&q=80&w=1080",
		"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjQ5NTJ8MHwxfHNlYXJjaHwxMHx8cmFuZG9tfGVufDB8fHx8MTY2NzM1OTQ4MA&ixlib=rb-4.0.3&q=80&w=1080",
	]);

	const axiosFetchRequest = async () => {
		const response = await axios.request<GetAllPhotoResponse>({
			baseURL: BASE_URL,
			headers: { Authorization: `Client-ID ${Access_Key}` },
			method: "get",
			url: `/search/photos?query=random`,
		});

		const mapData = response.data.results.map((e) => e.urls.regular);
		console.log(mapData);
		setRes(mapData);
	};

	// const fetchRequest = async () => {
	// 	const data = await fetch(
	// 	//   `${BASE_URL}/search/photos?page=1&client_id=${Access_Key}`
	// 	  `$tos?page=1&client_id=${Access_Key}`
	// 	);
	// 	const dataJ = await data.json();
	// 	const result = dataJ.results;
	// 	console.log(result);
	// 	setRes(result);
	//   };
	useEffect(() => {
		// axiosFetchRequest(); // UnComment this it will works
	}, []);

	let key = 0;

	function navigateToSingleScreen(imgUrl: string) {
		navigation.navigate("SingleWallpaper", { imgUrl: imgUrl });
	}

	return (
		<View style={styles.mainContainer}>
			{/* {res.map((e)=><Card key={`key - ${++key}`} imageUrl={e} />)} */}

			<FlatGrid
				itemDimension={130}
				data={res}
				spacing={10}
				renderItem={({ item }) => (
					<Card
						key={`key - ${++key}`}
						imageUrl={item}
						onNavigateToScreen={navigateToSingleScreen}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#efefef",
	},
});
