import React, { useState } from 'react'
import { StyleSheet, View, Text, Platform, Button, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

const _ThirdPage = (props) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    BIRTHDAY(currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear())
  };

  const { BIRTHDAY } = props

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FC4FFF', '#00FFB3', '#6BFF2B', '#FFFF00']}
        style={styles.background}
        start={{ x: 0.0, y: 0.02 }} end={{ x: 0.5, y: 1.7 }}
        locations={[0, 0.5, 0.6, 1]}
      />
      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.title}>Birthday</Text>
      </View>

      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={{
            width: Dimensions.get('window').width - 80,
          }}
          textColor='blue'
          maximumDate={new Date()}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  BIRTHDAY: (date) => {
    dispatch({ type: 'BIRTHDAY', birthday: date })
  }
})

const ThirdPage = connect(null, mapDispatchToProps)(_ThirdPage)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputText: {
    height: 40,
    width: Dimensions.get('window').width - 80,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 25,
    marginBottom: 15
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },

  title: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'WhaleTriedRegular',
    color: '#81ecec',
    letterSpacing: 3
  },

  gender: {
    fontSize: 30,
    fontFamily: 'WhaleTriedRegular',
    color: '#dfe6e9',
    letterSpacing: 3
  }
})

export { ThirdPage };