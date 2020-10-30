import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// has access to navigation prop because this funciton is listed in homestack
export default function CreateAnswer({ navigation }) {
  // receive data from homefeed
  const question = navigation.getParam('question');
  const writer = navigation.getParam('writer');

  const [text, setText] = useState('');
  const backHandler = () => {
    navigation.pop();
  };
  const nextHandler = () => {
    // fix issue of having to click multiple times
    // passes text state to SendAnswer page
    navigation.navigate('SendAnswer', { answerText: text, writer: writer });
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critique</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />

      <View style={styles.container}>
        <View style={styles.questionPanel}>
          <Text style={styles.qTitle}>
            {question}
            {'\n'}
          </Text>
          <Text style={styles.qWriter}>Asked by {writer}</Text>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View style={styles.inputBox}>
          <TextInput
            multiline
            style={styles.innerInputBox}
            placeholder={
              'Please write here ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________'
            }
            placeholderTextColor="orange"
            onChangeText={(input) => setText(input)}
          />
        </View>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={backHandler}>
          <Text style={styles.linkStyle}>back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextHandler}>
          <Text style={styles.linkStyle}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
}

// TODO: flex
const styles = StyleSheet.create({
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 10,
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  questionPanel: {
    // flex: 1,
    color: 'white',
    // paddingVertical: 120,
    backgroundColor: 'black',
    marginBottom: 3,
  },
  qTitle: {
    fontSize: 18,
    color: 'white',
    paddingTop: 20,
    fontStyle: 'italic',
    paddingLeft: 10,
    paddingRight: 10,
  },
  qWriter: {
    fontSize: 16,
    color: 'orange',
    paddingBottom: 15,
    paddingLeft: 10,
  },
  inputBox: {
    // flex: 1,
    // paddingVertical: 180,
    marginTop: 3,
    backgroundColor: 'black',
    paddingTop: 15,
  },
  innerInputBox: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 20,
    // height: 355,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  // buttonsBox: {
  //   // flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#000000',
  //   marginTop: 3,
  // },
  // buttons: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'black',
  //   padding: 30,
  // },
  // backButtonText: {
  //   fontSize: 20,
  //   color: '#1e90ff',
  //   // fontWeight: 'bold',
  //   marginLeft: 50,
  // },
  // nextButtonText: {
  //   fontSize: 20,
  //   color: '#1e90ff',
  //   // fontWeight: 'bold',
  //   marginRight: 50,
  // },
  linkContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  linkStyle: {
    fontSize: 20,
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
    color: '#1e90ff',
  },
});
