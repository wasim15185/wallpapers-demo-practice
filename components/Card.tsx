import {
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	Image,
	TouchableHighlight,
} from "react-native";

export type CardPropsType = {
	imageUrl: string;
	onNavigateToScreen: (id: string) => void;
};

export function Card({ imageUrl, onNavigateToScreen }: CardPropsType) {
	// console.log(`-->    ${imageUrl}`)

	return (
		<TouchableHighlight onPress={() => onNavigateToScreen(imageUrl)}>
			<View style={style.cardContainer}>
				<Image
					style={{ width: "100%", height: "100%" }}
					source={{
						uri: imageUrl,
					}}
				/>
			</View>
		</TouchableHighlight>
	);
}

const style = StyleSheet.create({
	cardContainer: {
		backgroundColor: "#5fdfdf",
		borderColor: "red",
		height: 250,
	},
});
