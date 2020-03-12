import React from 'react';
import _ from 'lodash';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderEmp from './HeaderEmp';
import {connect} from 'react-redux';
import {employFetch} from '../actions/EmployedAction';

class Employed extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.employFetch();
  }

  buttonPress = (item) => {
    this.props.navigation.navigate('edit',{employess:item});
  };

  renderList = employess => {
    return employess.map((item, key) => (
      <TouchableOpacity key={key} onPress={()=>this.buttonPress(item)}>
      <Text style={styles.rows}>
        {item.name}
      </Text>
      </TouchableOpacity>
    ));
  };
  render() {
    console.log(this.props);
    const {navigate} = this.props.navigation;
    return (
      <View>
        <HeaderEmp
          titleText="Trabajadores"
          navigator={() => navigate('crear',{})}
        />
        {this.renderList(this.props.employess)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rows: {
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

const mapStateToProps = state => {
  let employess = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return {employess};
};

const mapDispatchToProps = dispatch => {
  return {
    employFetch: value => dispatch(employFetch(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employed);
