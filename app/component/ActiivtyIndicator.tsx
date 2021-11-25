import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";




const Indicator = () => {
  <View style={styles.container}>

   <ActivityIndicator size="large" color="#00ff00" />
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Indicator;