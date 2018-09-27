import React from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import validate from '../Validation/validate_wrapper';
import { style } from './Style';

export default class Signup extends React.Component {

    

    constructor(props) {
        super(props);

        this.state = {
            style: style,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            loading: true,
            email: '',
            name: '',
            password: '',
            confirmpassword: '',
            nameError: '',
            emailError: '',
            passwordError: '',
            confirmpasswordError: ''
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
        navigate("Login");
    }

    render() {
        return (
            <View style={this.state.style.loginpage} >
                <Text style={this.state.style.logintext}></Text>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>NAME</Text>
                    <TextInput style={this.state.style.username} 
                    onBlur={() => {
                        this.setState({
                          nameError: validate('name', this.state.name)
                        })
                      }} onChangeText={(text) => this.setState({ "name": text })} underlineColorAndroid="#6090" autoFocus={true}/>
                    {this.state.nameError ? <Text style={this.state.style.error}>{this.state.nameError}</Text> : null}
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>EMAIL</Text>
                    <TextInput style={this.state.style.username} onBlur={() => {
                        this.setState({
                          emailError: validate('email', this.state.email)
                        })
                      }} onChangeText={(text) => this.setState({ "email": text })} underlineColorAndroid="#6090" />
                    {this.state.emailError ? <Text style={this.state.style.error}>{this.state.emailError}</Text> :null }
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>PASSWORD</Text>
                    <TextInput secureTextEntry={true} style={this.state.style.username} 
                    onBlur={() => {
                        this.setState({
                          passwordError: validate('password', this.state.password)
                        })
                      }} onChangeText={(text) => this.setState({ "password": text })} underlineColorAndroid="#6090" />
                    {this.state.passwordError ? <Text style={this.state.style.error}>{this.state.passwordError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>CONFIRM PASSWORD</Text>
                    <TextInput secureTextEntry={true} 
                    onBlur={() => {
                        this.setState({
                          confirmpasswordError: validate('password', this.state.confirmpassword)
                        })
                      }} onChangeText={(text) => this.setState({ "confirmpassword": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    {this.state.confirmpasswordError ? <Text style={this.state.style.error}>{this.state.confirmpasswordError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.signUp() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}