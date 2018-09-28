import React from 'react';
import {
    View, Text, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground,
    ScrollView
} from 'react-native';
import validate from '../Validation/validate_wrapper';
import { style } from './Style';
import Service from '../Api/Api';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: style,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            name: 'Jagadeesh Y M',
            nameError: '',
            email: '',
            address: '',
            phone: '',
            postalcode: '',
            city: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    save() {

        const nameError = validate('name', this.state.name);

        if(!nameError){
            Service.updateProfile(this.state).then((response) => {
                if(response){
                    const { navigate } = this.props.navigation;
                    navigate("Login");
                }
            })
        } else {
            this.setState({
                nameError : nameError
            })
        }
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
                    <Image
     style={{
       paddingVertical: 10,
       marginLeft: 100,
       width: 150,
       height: 150,
       borderRadius: 75
     }}
     resizeMode='cover'
     source={{
       uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
     }}
   />
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
                        <TextInput style={this.state.style.username} value={this.state.email} onChangeText={(text) => this.setState({ "email": text })} underlineColorAndroid="#6090" editable={false}/>
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>PHONE</Text>
                        <TextInput style={this.state.style.username} value={this.state.phone} onChangeText={(text) => this.setState({ "phone": text })} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>ADDRESS</Text>
                        <TextInput style={this.state.style.username} value={this.state.address} onChangeText={(text) => this.setState({ "address": text })} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>CITY</Text>
                        <TextInput value={this.state.city} onChangeText={(text) => this.setState({ "city": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <Text style={this.state.style.centername}>POSTAL CODE</Text>
                        <TextInput value={this.state.postalcode} onChangeText={(text) => this.setState({ "postalcode": text })} style={this.state.style.username} underlineColorAndroid="#6090" />
                    </View>
                    <View style={this.state.style.inputs}>
                        <TouchableOpacity style={this.state.style.loginbtn} onPress={function () { this.save() }.bind(this)}>
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