export type RootStackParamList = {
  Home: undefined;
  Page2: { st: string };
  Page3: { history: { username: string; video: { id: string; url: string } }[] };
  VideoPlayer: { username: string; video: { id: string; url: string } };
};
