import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';
import Header from './Header';
import {connect} from 'react-redux';
import {employedUpdate, employCreate} from '../actions/EmployedAction';
import EmployeForm from './employeForm';

class CreateEmployed extends React.Component {
  buttonTouch = () => {
    const {name, phone, shift} = this.props;
    this.props.employCreate({name, phone, shift:shift || "Lunes"},this.props.navigation.navigate('trabajadores'));
  };
  render() {
    console.log(this.props.navigation.state.params.employess);
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Header titleText="Ingresar trabajador" />
        <TouchableOpacity
          style={styles.buton}
          onPress={() => navigate('trabajadores')}>
          <Text>Regresar</Text>
        </TouchableOpacity>
        <EmployeForm {...this.props}/>
        <TouchableOpacity
            style={styles.butonCrear}
            onPress={() => this.buttonTouch()}>
            <Text style={styles.labelBtn}>Crear</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buton: {
    position: 'absolute',
    top: 10,
  },
  butonCrear: {
    height: 30,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 10,
    alignSelf: 'center',
  },
  labelBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
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
  CreateEmployed,
);
