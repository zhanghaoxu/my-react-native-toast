import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyReactNativeToast from 'my-react-native-toast';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            MyReactNativeToast.show('你好！', MyReactNativeToast.SHORT);
            console.log('111');
          }}
        >
          111
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
});
