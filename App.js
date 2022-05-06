import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Calc from './components/Calc';

export default function App() {
  const [conv, setConv] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.titulo}> Calculadora de alimentos para uma festa infantil </Text>
        <Text style={styles.texto}> Digite o número de convidados </Text>
        <TextInput
          style={styles.input}
          value={num}
          keyboardType="numeric"
          onChangeText={(value)=>setNum(value)}
        />
      </View>
      <TouchableOpacity 
        style={styles.botao}
        onPress={()=>setConv(num)}>
          <Text style={styles.textoBotao}> Calcular </Text>
      </TouchableOpacity>
      <Calc conv={conv}/>
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
  },
  botao:{
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  textoBotao:{
    color: '#fff',
    fontSize: 30
  }
});