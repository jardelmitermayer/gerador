import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.characters}>12 Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height:50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF7538"
          maximumTrackTintColor="#000"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}>123123</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo: {
    marginBottom: 60
  },
  characters: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '85%',
    borderRadius: 7
  },
  button:{
    backgroundColor:'#FFA200',
    width:'85%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 7,
    marginBottom:25
  },
  buttonText:{
    fontSize:20,
    color: '#fff',
    fontWeight:'bold'
  },
  password:{
    fontSize:20,
    padding:10,
    textAlign:'center'
  }
})