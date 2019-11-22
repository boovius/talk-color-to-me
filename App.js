import React, { useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const hexRegex = new RegExp('[a,b,c,d,e,f,A,B,C,D,E,F,0-9]{6}');

export default function App() {
  const [color, setColor] = useState('cfcfcf');
  const [wheelColor, setWheelColor] = useState('#cfcfcf');
  const [validationError, setValidationError] = useState(null);

  const validateAndColorWheel = (hexValue) => {
    setColor(hexValue);

    if (hexValue.match(hexRegex)) {
      setValidationError(null);
      setWheelColor(`#${hexValue}`);
    } else {
      setValidationError('Value must be a hex a-f or 0-9');
    }

  }

  return (
    <View style={styles.container}>
      <Text>Enter a color, dummy!</Text>
      <View style={styles.inputContainer}>
        <Text>#</Text>
        <TextInput
          style={styles.colorInput}
          placeholder='32432a'
          value={color}
          onChangeText={hexValue => validateAndColorWheel(hexValue)}
          maxLength={6}
        />
      </View>
      <Text style={styles.validationError}>{validationError}</Text>
      <View style={{...styles.colorWheel, backgroundColor: wheelColor}}></View>
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
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginBottom: 20,
    minWidth: 70,
  },
  inputContainer__text: {
    marginRight: 20
  },
  colorInput: {
    height: 40,
    color: 'blue',
    minWidth: 70,
  },
  colorWheel: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: '#cfcfcf',
  },
  validationError: {
    color: 'red'
  }

});
