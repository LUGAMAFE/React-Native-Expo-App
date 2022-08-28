import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Hola = ({nombre = 'luis'}) => {
  return (
    <View>
      <Text style={styles.text}>Hola {nombre}</Text>
    </View>
  );
};

export default Hola;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
});
