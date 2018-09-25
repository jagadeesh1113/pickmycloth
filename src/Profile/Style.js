import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

var { height, width} = Dimensions.get('window');
var inputwidth = width - 10;

export const style = StyleSheet.create({

        loginpage:{
                width:"100%",
                height:"100%",
                // backgroundColor: "#003366"
        },
        splashStyle:{
                flex:1 , 
                width: undefined,
                 height: undefined
        },
        logincontent:{
                width:"100%",
                height:"100%",
        },
        logintext:{
                fontSize:26,
                color:'black',
                marginLeft:"10%",
                marginTop:"15%",
                fontWeight: "900",
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation:2,
        
        },

        centername:{
                fontSize:15 ,
                color: "black",
                marginLeft:"10%",
                marginTop:20,
                fontWeight: "900",

        },
        
        username:{
                width:"85%",
                height:35,
                paddingLeft:25,
                color:"black",
                fontSize:15,
                borderBottomColor:"black",
                marginLeft:"10%",
                borderStyle:"solid",
                borderBottomWidth:2,
                fontWeight: "700",
                

        },
        inputs:{
                direction:"rtl",
                width:inputwidth,
                marginBottom:10,
                },   

        loginbtn:{
                width:"45%",
                height:55,
                backgroundColor:"#82807e",
                borderRadius:10000,
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"29%",
                marginTop:10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation:2,
        },

        saveButtonLabel:{
                fontSize:10,
                color:"white",
        },

        passwordviewstyle:{
                height:35,
                flexDirection:'row',
        },

        keepmestyleviewstyle:{
                marginLeft:"10%",
                marginTop:10,

        },
})