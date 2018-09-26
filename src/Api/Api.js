import React, { Component } from 'react';

export default class Api extends Component {

    loginUser(email, password){
        const url = 'http://pickmycloth.com/api/login';
        
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then(response => response.json());
    }

    signUp(name, email, password){
        const url = 'http://pickmycloth.com/api/signup';
        
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : name,
                email : email,
                password : password
            })
        }).then(response => response.json());
    }

    forgotPassword(email){
        const url = 'http://pickmycloth.com/api/forgotpassword';
        
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email
            })
        }).then(response => response.json());
    }

    updateProfile(data){
        const url = 'http://pickmycloth.com/api/updateprofile';
        
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                data
            })
        }).then(response => response.json());
    }

    changePassword(data){
        const url = 'http://pickmycloth.com/api/changepassword';
        
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                data
            })
        }).then(response => response.json());
    }
}