import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleOutsideClick = () => {
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
        <Text>Hello there</Text>
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
