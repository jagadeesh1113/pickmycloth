import React from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity} from 'react-native';

import { style } from './Style';

export default class ChangePassword extends React.Component {

    state = {
        style: style,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    login() {
        const { navigate } = this.props.navigation;
        navigate("Profile");
    }

    beforeSignUp() {
        const { navigate } = this.props.navigation;
        navigate("BeforeSignup");
    }

    forgetPassword() {
        const { navigate } = this.props.navigation;
        navigate("ForgetPassword");
    }

    render() {
        return (
            <View style={this.state.style.loginpage} >
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>CURRENT PASSWORD</Text>
                    <TextInput style={this.state.style.username} onChangeText={(text) => this.setState({ "userName": text })} underlineColorAndroid="#6090" />
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>NEW PASSWORD</Text>
                    <TextInput style={this.state.style.username} onChangeText={(text) => this.setState({ "userName": text })} underlineColorAndroid="#6090" />
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>CONFIRM PASSWORD</Text>
                    <TextInput secureTextEntry={true} onChangeText={(text) => this.setState({ "password": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.login() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}