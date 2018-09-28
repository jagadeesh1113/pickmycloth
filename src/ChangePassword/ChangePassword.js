import React from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity} from 'react-native';
import validate from '../Validation/validate_wrapper'
import { style } from './Style';
import Service from '../Api/Api';

export default class ChangePassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: style,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            currentpassword: '',
            newpassword: '',
            confirmpassword: '',
            newpasswordError: '',
            confirmpasswordError: '',
            currentpasswordError: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    profile() {
        
        const currentpasswordError = validate('password', this.state.currentpassword);
        const newpasswordError = validate('password', this.state.newpassword);
        let confirmpasswordError = '';
        if(this.state.newpassword !== this.state.confirmpassword){
            confirmpasswordError = 'Password does not match'
        }

        if(!currentpasswordError && !newpasswordError && !confirmpasswordError){
            Service.changePassword(this.state).then((response) => {
                if(response){
                    const { navigate } = this.props.navigation;
                    navigate("Login");
                }
            });
        }
    }

    render() {
        return (
            <View style={this.state.style.loginpage} >
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>CURRENT PASSWORD</Text>
                    <TextInput secureTextEntry={true} 
                    onBlur={() => {
                        this.setState({
                          currentpasswordError: validate('password', this.state.currentpassword)
                        })
                      }} style={this.state.style.username} onChangeText={(text) => this.setState({ "currentpassword": text })} underlineColorAndroid="#6090" autoFocus={true}/>
                      {this.state.currentpasswordError ? <Text style={this.state.style.error}>{this.state.currentpasswordError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>NEW PASSWORD</Text>
                    <TextInput secureTextEntry={true} 
                    onBlur={() => {
                        this.setState({
                          newpasswordError: validate('password', this.state.newpassword)
                        })
                      }} style={this.state.style.username} onChangeText={(text) => this.setState({ "newpassword": text })} underlineColorAndroid="#6090" />
                    {this.state.newpasswordError ? <Text style={this.state.style.error}>{this.state.newpasswordError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>CONFIRM PASSWORD</Text>
                    <TextInput secureTextEntry={true} 
                    onBlur={() => {
                        if(this.state.newpassword !== this.state.confirmpassword){
                            this.setState({
                              confirmpasswordError: 'Password does not match'
                            })
                        }
                      }} onChangeText={(text) => this.setState({ "confirmpassword": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    {this.state.confirmpasswordError ? <Text style={this.state.style.error}>{this.state.confirmpasswordError}</Text> : null }
                </View>
                <View style={this.state.style.inputs}>
                    <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.profile() }.bind(this)}>
                        <Text style={this.state.style.loginbtnlabel}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}