import React from 'react';
import { StyleSheet} from 'react-native';
import { Root } from "native-base";
import Login from './src/Login/Login';
import { createStackNavigator } from 'react-navigation';
import Signup from './src/Signup/Signup';
import BeforeSignup from './src/BeforeSignup/BeforeSignup';
import Profile from './src/Profile/Profile';
import ForgetPassword from './src/ForgetPassword/ForgetPassword';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Routes />
      </Root>
    );
  }
}

const Routes = createStackNavigator({
  Login: { screen: Login },
  BeforeSignup: { screen: BeforeSignup},
  Signup: { screen: Signup },
  Profile: { screen: Profile },
  ForgetPassword: { screen: ForgetPassword}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
