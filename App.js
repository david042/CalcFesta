import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Calc from './components/Calc';

export default function App() {
  const [conv, setConv] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.titulo}> Calculadora de alimentos para uma festa infantil </View>
        <View style={styles.texto}> Digite o número de convidados </View>
        <TextInput
          style={styles.input}
          value={conv}
          onChangeText={(value)=>setConv(value)}
        />
      </View>
      <View>
        <Calc conv={conv}/>
      </View>
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
  row:{
    width: '100%',
    marginTop: 10,
    textAlign: 'center'
  },
  input:{
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  texto:{
    fontSize: 30
  },
  titulo:{
    fontSize: 30,
    marginBottom: 100
  }
});