import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens";


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
