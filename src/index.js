import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from './components/Header';
import {connect} from 'react-redux';
import {emailChanged, passChanged, loginUser} from './actions/index';

class Index extends React.Component {
  constructor(props){
    super(props)
  };
  onEmailChange = text => {
    this.props.emailChanged(text);
  };
  onPassChange = text => {
    this.props.passChanged(text);
  };
  onButton = async() => {
    const {email, password} = this.props;
    await this.props.loginUser({email, password});
    if(this.props.user){
      return this.props.navigation.navigate('trabajadores');
    }
  };

  renderButon = () => {
    if (this.props.loading) {
      return (
        <ActivityIndicator size="large" color="#0000ff" animating="true" />
      );
    }
    return (
      <TouchableOpacity
        style={styles.buton}
        onPress={() => {
          this.onButton();
        }}>
        <Text style={styles.labelBtn}>Login</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Header titleText="Login" />
        <Text style={styles.labels}>User</Text>
        <TextInput
          style={styles.inputs}
          placeholder="mail"
          onChangeText={text => this.onEmailChange(text)}
          value={this.props.email}
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputs}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => this.onPassChange(text)}
          value={this.props.password}
        />
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.labelError}>{this.props.error}</Text>
        </View>

        {this.renderButon()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 50,
    width: 250,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 13,
  },
  labels: {
    fontSize: 20,
    marginTop: 10,
  },
  buton: {
    height: 30,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  labelBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  labelError: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    user:state.auth.user
  };
};

export default connect(mapStateToProps, {emailChanged, passChanged, loginUser})(
  Index,
);
