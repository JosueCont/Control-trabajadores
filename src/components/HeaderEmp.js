import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar,TouchableOpacity} from 'react-native';

export default class HeaderEmp extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor={'gray'} />
        <Text style={styles.texto}>{this.props.titleText}</Text>
        <TouchableOpacity style={styles.headerText} onPress={()=>this.props.navigator()}>
          <Text style={{fontSize: 18}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerText:{
    alignSelf: 'flex-end',
    paddingRight:20,
    justifyContent:'center'
  }
});
