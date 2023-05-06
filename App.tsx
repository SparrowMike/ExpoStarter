import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { MY_KEY } from "@env"
import Play from './components/Play';

export default function App() {
  const [scale, setScale] = useState<string>('C');

  const notes = [{ "note": "C", "color": "#5f5a8b" }, { "note": "D", "color": "#a0cb5f" }, { "note": "E", "color": "#347ebf" }, { "note": "F", "color": "#cb5fa0" }, { "note": "G", "color": "#bf3434" }]


  return (
    <View style={styles.container}>
      <Text>Playground</Text>
      {/* <ActivityIndicator /> */}
      {notes.map((data, idx) => (
        <Play key={idx} data={data} scale={scale} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
