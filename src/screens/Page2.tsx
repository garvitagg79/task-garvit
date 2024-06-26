import React, { useState, useEffect } from "react";
import { View, Button, FlatList, StyleSheet } from "react-native";
import { RouteProp, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Adjust the import path as necessary

type Video = {
  id: string;
  url: string;
};

const videoUrls: Video[] = [
  {
    id: "1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];

type Page2ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Page2"
>;
type Page2ScreenRouteProp = RouteProp<RootStackParamList, "Page2">;

type Props = {
  navigation: Page2ScreenNavigationProp;
  route: Page2ScreenRouteProp;
};

const Page2: React.FC<Props> = ({ navigation, route }) => {
  const { st } = route.params;
  const [history, setHistory] = useState<{ username: string; video: Video }[]>(
    []
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Update history when screen comes into focus
      setHistory((prevHistory) => [...prevHistory]);
    });

    // Clean up listener on unmount
    return unsubscribe;
  }, [navigation]);

  const handleNavigate = (video: Video) => {
    const newEntry = { username: st, video };
    setHistory([...history, newEntry]);
    navigation.navigate("Page3", { history: [...history, newEntry] });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videoUrls}
        renderItem={({ item }) => (
          <Button
            title={`Play Video ${item.id}`}
            onPress={() => handleNavigate(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default Page2;
