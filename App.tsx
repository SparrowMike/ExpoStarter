import { useState, useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MY_KEY } from "@env"
import MovingElement from './components/MovingElement';
import Play from './components/Play';


export default function App() {
  const [currentNote, setCurrentNote] = useState<string>('C');

  return (
    <View style={styles.container}>
      <Text>Playground</Text>
      {/* <ActivityIndicator /> */}
      {/* <TouchableOpacity
        style={styles.button}>
        <Text style={styles.label}>Button</Text>
      </TouchableOpacity>  */}
      {/* <MovingElement/>  */}
      {['C', 'D', 'E', 'F', 'G'].map((note) => (
        <Play key={note} note={note} currentNote={currentNote} />
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
