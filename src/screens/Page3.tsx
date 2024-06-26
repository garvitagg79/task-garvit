import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Video } from "expo-av";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Adjust the import path as necessary

type Page3ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Page3"
>;
type Page3ScreenRouteProp = RouteProp<RootStackParamList, "Page3">;

type Props = {
  navigation: Page3ScreenNavigationProp;
  route: Page3ScreenRouteProp;
};

const Page3: React.FC<Props> = ({ route }) => {
  const { history } = route.params;
  const latestEntry = history[history.length - 1];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Playing Latest Video</Text>
      <Text>
        {latestEntry.username} is playing video {latestEntry.video.id}
      </Text>
      <Video
        source={{ uri: latestEntry.video.url }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        style={styles.video}
      />
      <Text style={styles.header}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.username} played video {item.video.id}
            </Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  video: {
    width: "100%",
    height: 200,
    marginTop: 20,
    marginBottom: 30,
  },
});

export default Page3;
