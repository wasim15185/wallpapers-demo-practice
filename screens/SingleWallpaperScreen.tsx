import {
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import { Button } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "../navigator/RootNavigator";

type SingleWallpaperProps = NativeStackScreenProps<
	RootStackNavigatorParamList,
	"SingleWallpaper"
>;

export default function SingleWallpapersScreen({
	route,
	navigation,
}: SingleWallpaperProps): JSX.Element {
	const { params } = route;

	return (
		<View style={styles.container}>
			<Image
				style={{ width: "100%", height: "100%" }}
				source={{
					uri: params.imgUrl,
				}}
			/>

			<Pressable style={styles.button} onPress={() => {}}>
				<Text  style={styles.text}>Download</Text>
			</Pressable>
		</View>
	);
}

const buttonMargin = 7;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		left: 0,
		right: 0,
		bottom: 7,
		marginEnd: buttonMargin,
		marginStart: buttonMargin,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
		position: "absolute",
	},
	text: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
		textTransform:'uppercase'

	},
});
