import React from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import validate from '../Validation/validate_wrapper';
import { style } from './Style';
import Service from '../Api/Api';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: style,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            email:'',
            emailError: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    login() {
        const { navigate } = this.props.navigation;
        navigate("Login");
    }


    signUp() {
        const { navigate } = this.props.navigation;
        navigate("Signup");
    }

    forgetPassword() {

        const emailError = validate('email', this.state.email);

        if(!emailError){
            Service.forgotPassword(this.state.email).then((response) => {
                if(response){
                    const { navigate } = this.props.navigation;
                    navigate('Login');
                }
            })
        } else {
            this.setState({
                emailError : emailError
            })
        }
    }

    render() {
    return (
            <View style={this.state.style.loginpage} >
                <Text style={this.state.style.logintext}></Text>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>EMAIL</Text>
                    <TextInput style={this.state.style.username} 
                    onBlur={() => {
                        this.setState({
                          emailError: validate('email', this.state.email)
                        })
                      }} onChangeText={(text) => this.setState({ "email": text })} underlineColorAndroid="#6090" autoFocus={true}/>
                    { this.state.emailError ? <Text style={this.state.style.error}>{this.state.emailError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.forgetPassword() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>RESET PASSWORD</Text>
                    </TouchableOpacity>
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.login() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>GO TO LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.signUp() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>GO TO SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}