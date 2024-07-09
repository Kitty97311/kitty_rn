import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Emitter } from 'react-native-particles';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [particlePos, setParticlePos] = useState({ x: 200, y: 200 });

  const handleOutsideClick = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setParticlePos({x: locationX, y: locationY})
    setBackgroundColor(getRandomColor()); // Change the background color when clicking outside
    cur_index = (cur_index) % 3
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={[styles.container, { backgroundColor }]}>
        <Emitter
          numberOfParticles={50}
          emissionRate={5}
          interval={200}
          particleLife={1500}
          direction={-90}
          spread={360}
          fromPosition={{ x: particlePos.x, y: particlePos.y }}
          infiniteLoop={true}
      >
        <Text>Hello there</Text>
      </Emitter>
      </View>
    </TouchableWithoutFeedback>
  );
}

const bg_array = ["#f00", "#0f0", "#00f"]
var cur_index = 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
