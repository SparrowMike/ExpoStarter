import { useState, useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MY_KEY } from "@env"
import MovingElement from './components/MovingElement';
import Play from './components/Play';


export default function App() {
  const [scale, setScale] = useState<string>('C');

  const notes = [{ "note": "C", "color": "#5f5a8b" }, { "note": "D", "color": "#a0cb5f" }, { "note": "E", "color": "#347ebf" }, { "note": "F", "color": "#cb5fa0" }, { "note": "G", "color": "#bf3434" }]


  return (
    <View style={styles.container}>
      <Text>Playground</Text>
      {/* <ActivityIndicator /> */}
      {/* <TouchableOpacity
        style={styles.button}>
        <Text style={styles.label}>Button</Text>
      </TouchableOpacity>  */}
      {/* <MovingElement/>  */}
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
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
