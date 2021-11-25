import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { BASE_URL } from "../constants/Constants";

const { width, height } = Dimensions.get("window");

type Props = {
  title: string;
  subTitle: number;
  subTitleName: string;
  imageUrl: ImageSourcePropType | string;
  onPress: () => void
};

export const MovieCard = ({
  title,
  subTitle,
  subTitleName,
  imageUrl,
  onPress,
}: Props) => {
  const { width, height } = useWindowDimensions();

  return (
      <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>

      <Image style={styles.image} source={{ uri: BASE_URL + imageUrl }} />

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleName}>{subTitleName}</Text>
        <Text style={styles.mainPopularity}> {subTitle} </Text>
      </View>
    </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "tomato",
    fontSize: 28,
    textAlign: "center",
  },

  image: {
    height: 500,
    marginVertical: width * 0.01,
    resizeMode: "cover",
  },

  subTitleContainer: {
    flexDirection: "row",
    marginHorizontal: width * 0.01,
    marginVertical: width * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },

  subTitleName: {
    margin: width * 0.01,
    fontSize: 18,
  },

  mainPopularity: {
    margin: width * 0.01,
    fontSize: 16,
  },
});
