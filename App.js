import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleOutsideClick = () => {
    setBackgroundColor(bg_array[cur_index ++]); // Change the background color when clicking outside
    cur_index = (cur_index) % 3
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text>Welcome to My React Native App!</Text>
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
