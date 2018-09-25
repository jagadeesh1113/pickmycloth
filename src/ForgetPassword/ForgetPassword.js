import React from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { style } from './Style';

export default class ForgetPassword extends React.Component {

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


    signUp() {
        const { navigate } = this.props.navigation;
        navigate("Signup");
    }

    forgetPassword() {
        const { navigate } = this.props.navigation;
        var url = 'http://pickmycloth.com/api/forgotpassword';
        var data = { email: this.state.email };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(responseData => {
                if (responseData && responseData.data) {
                    navigate('Login');
                }
            }).catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <View style={this.state.style.loginpage} >
                <Text style={this.state.style.logintext}></Text>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>EMAIL</Text>
                    <TextInput style={this.state.style.username} onChangeText={(text) => this.setState({ "email": text })} underlineColorAndroid="#6090" />
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.login() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.signUp() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.forgetPassword() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>FORGOT PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}