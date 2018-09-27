import React from 'react';
import {
    View, Text, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground,
    ScrollView
} from 'react-native';
import validate from '../Validation/validate_wrapper';
import { style } from './Style';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: style,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            name: 'Jagadeesh Y M',
            nameError: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    signUp() {
        const { navigate } = this.props.navigation;
        navigate("Login");
    }

    changePassword() {
        const { navigate } = this.props.navigation;
        navigate("ChangePassword");
    }

    render() {
        return (
            <ScrollView style={{ width: "100%", height: "100%" }}>
                <View style={this.state.style.loginpage} >
                    <Text style={this.state.style.logintext}></Text>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>Name</Text>
                        <TextInput style={this.state.style.username} 
                         onBlur={() => {
                            this.setState({
                              nameError: validate('name', this.state.name)
                            })
                          }} value={this.state.name} onChangeText={(text) => this.setState({ "name": text })} underlineColorAndroid="#6090" autoFocus={true} />
                        { this.state.nameError ? <Text style={this.state.style.error}>{this.state.nameError}</Text> : null }
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>Email</Text>
                        <TextInput style={this.state.style.username} value={"jagadeesh1113@gmail.com"} onChangeText={(text) => this.setState({ "email": text })} underlineColorAndroid="#6090" editable={false}/>
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>PHONE</Text>
                        <TextInput style={this.state.style.username} value={"9840183109"} onChangeText={(text) => this.setState({ "phone": text })} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>ADDRESS</Text>
                        <TextInput style={this.state.style.username} value={""} onChangeText={(text) => this.setState({ "address": text })} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>CITY</Text>
                        <TextInput value={""} onChangeText={(text) => this.setState({ "city": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>POSTAL CODE</Text>
                        <TextInput value={""} onChangeText={(text) => this.setState({ "postalcode": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.signUp() }.bind(this)}>
                            <Text style={this.state.style.saveButtonLabel}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.style.inputs}>
                        <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.changePassword() }.bind(this)}>
                            <Text style={this.state.style.saveButtonLabel}>CHANGE PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}