import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import {employedUpdate, employCreate} from '../actions/EmployedAction';

class EmployeForm extends React.Component{
  render(){
    return(
      <View style={{marginTop: 15, marginHorizontal: 20}}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.inputs}
            placeholder="name"
            value={this.props.name}
            onChangeText={value =>
              this.props.employedUpdate({prop: 'name', value})
            }
          />
          <Text style={styles.label}>Telefono</Text>
          <TextInput
            style={styles.inputs}
            placeholder="555-55"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employedUpdate({prop: 'phone', value})
            }
          />
          <Text style={styles.label}>Dia</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employedUpdate({prop: 'shift', value})
            }>
            <Picker.Item label="Lunes" value="Lunes" />
            <Picker.Item label="Martes" value="Martes" />
            <Picker.Item label="Miercoles" value="Miercoles" />
            <Picker.Item label="Jueves" value="Jueves" />
            <Picker.Item label="Viernes" value="Viernes" />
            <Picker.Item label="Sabado" value="Sabado" />
            <Picker.Item label="Domingo" value="Domingo" />
          </Picker>
        </View>
    );
  }
};

const styles=StyleSheet.create({
  inputs: {
    height: 50,
    width: 250,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 13,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
  },
});

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeFrom;

  return {name, phone, shift};
};

const dispatchStateToProps = dispatch => {
  return {
    employedUpdate: value => dispatch(employedUpdate(value)),
    employCreate: value => dispatch(employCreate(value)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(
  EmployeForm,
);