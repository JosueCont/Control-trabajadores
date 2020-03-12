import React from 'react';
import {View,Text,StyleSheet,Dimensions,StatusBar} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style={styles.header}>
        <StatusBar backgroundColor={'gray'} />
        <Text style={styles.texto}>{this.props.titleText}</Text>
      </View>
    );
  }
};

const styles=StyleSheet.create({
  header:{
    height:50,
    width:Dimensions.get('window').width,
    backgroundColor:'gray',
    marginBottom:20
  },
  texto:{
    fontSize:20,
    justifyContent:'center',
    alignSelf:'center'
  }
})