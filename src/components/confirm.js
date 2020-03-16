import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

export const Confirm = ({children, onAccept, onDecline,visible}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {children}
        </Text>
        <View style={styles.sectionStyle}>
          <TouchableOpacity onPress={onAccept} style={styles.btnYes}><Text style={styles.label}>Si</Text></TouchableOpacity>
          <TouchableOpacity onPress={onDecline} style={styles.btnNo}><Text style={styles.label}>No</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    justifyContent: 'center',
    flexDirection:'row'
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    color:'white'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.80)',
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
  },
  btnYes:{
    height:30,
    width:100,
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:'red',
    marginLeft:20
  },
  btnNo:{
    height:30,
    width:100,
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:'blue',
    marginLeft:20
  },
  label:{
    fontSize:18,
    alignSelf:'center',
    color:'white'
  }
});


