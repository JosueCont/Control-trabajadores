import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from './Header';
import EmployeForm from './employeForm';
import _ from 'lodash';
import Communication from 'react-native-communications';
import {employedUpdate, employSave} from '../actions/EmployedAction';
import {connect} from 'react-redux';

class EditEmploy extends React.Component {
  UNSAFE_componentWillMount() {
    _.each(this.props.navigation.state.params.employess, (value, prop) => {
      this.props.employedUpdate({value, prop});
    });
  }

  buttonPress = () => {
    const {name, phone, shift} = this.props;
    const {uid} = this.props.navigation.state.params.employess;
    this.props.employSave(
      {name, phone, shift, uid: uid},
      this.props.navigation.navigate('trabajadores'),
    );
  };

  onTextButton=()=>{
    const {phone,shift}=this.props;
    Communication.text(phone,`Ingresa la proxima fecha ${shift}`);
  }
  render() {
    return (
      <View>
        <Header titleText="Editar trabajadores" />
        <TouchableOpacity
          style={styles.buton}
          title="Editar trabajadores"
          onPress={() => this.props.navigation.navigate('trabajadores')}>
          <Text>Regresar</Text>
        </TouchableOpacity>
        <EmployeForm {...this.props} />
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => this.buttonPress()}>
          <Text style={styles.label}>Guardar cambios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit} onPress={()=>this.onTextButton()}>
          <Text style={styles.label}>Mandar Mensaje</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  btnEdit: {
    height: 30,
    width: 170,
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 30,
  },
  label: {
    alignContent: 'center',
    fontSize: 18,
  },
});

const mapStateToProps = state => {
  const {phone, name, shift} = state.employeFrom;

  return {name, phone, shift};
};

const mapDispatchToProps = dispatch => {
  return {
    employedUpdate: value => dispatch(employedUpdate(value)),
    employSave: value => dispatch(employSave(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmploy);
