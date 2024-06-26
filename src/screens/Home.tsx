import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Page2: { st: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const clicked = (st: string) => {
    navigation.navigate("Page2", { st });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => clicked("User 1")}>
        <Text>User 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => clicked("User 2")}>
        <Text>User 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => clicked("User 3")}>
        <Text>User 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 100,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});

export default Home;
