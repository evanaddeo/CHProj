import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import UploadImage from "./UploadImage";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Profile() {
    const [canEdit, changeEdit] = useState(false);
    const [submit, changeText] = useState("Edit Profile");
    const [txtColor, changeClr] = useState("white");
    const updateEdit = () => {
        changeEdit(!canEdit);
        if (submit == "Edit Profile") {
            changeText("Submit");
        } else {
            changeText("Edit Profile");
        }
        if (txtColor == "white") {
            changeClr("rgb(89, 97, 249)");
        } else {
            changeClr("white");
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', 'rgb(89, 97, 249)', 'rgb(7, 13, 117)']}
                style={styles.grad}
                start={{ x: 0.9, y: 0 }}
            >
                <SafeAreaView style={styles.container2}>
                    <ScrollView style={styles.profile}>
                        <View style={{marginBottom: 60}}>
                            <UploadImage/>
                            <Text
                                style={{fontSize: 50, alignSelf: "center", color:"white", fontWeight: "bold"}}
                                >Evan Addeo</Text>
                            <Text style={styles.title}>First Name</Text>
                            <TextInput style={styles.content(txtColor)} spellCheck={false} editable={canEdit}/>
                            <Text style={styles.title}>Last Name</Text>
                            <TextInput style={styles.content(txtColor)} spellCheck={false} editable={canEdit}/>
                            <Text style={styles.title}>Email</Text>
                            <TextInput style={styles.content(txtColor)} spellCheck={false} editable={canEdit}/>
                            <Text style={styles.title}>Phone Number</Text>
                            <TextInput style={styles.content(txtColor)} keyboardType="phone-pad" spellCheck={false} editable={canEdit}/>
                            <Text style={styles.title}>Fitness Goal</Text>
                            <TextInput style={styles.content(txtColor)}
                                editable = {false}>Build lean muscle</TextInput>
                            <Text style={styles.title}>Account/Social</Text>
                            <TextInput style={styles.content(txtColor)}
                                editable = {false}>Public</TextInput>
                            <Text style={styles.title}>Password</Text>
                            <TextInput style={styles.content(txtColor)} secureTextEntry={true} editable={canEdit}/>

                            <Pressable
                                style={{flexDirection: "row", 
                                        justifyContent: "flex-end",
                                        marginTop: 20,
                                        marginRight: 20}}
                                onPress={updateEdit}>
                                <Text style={[styles.btnText, {fontSize: 13}]}>{submit}</Text>
                                <Icon name="edit" style={{color: "white", margin: 5}}/>
                            </Pressable>
                            

                            <Text style={styles.header}>Settings</Text>
                            
                            <Pressable
                                style={styles.btn}>
                                <Text style={styles.btnText}>Notifications</Text>
                                </Pressable>
                            <Pressable
                                style={styles.btn}>
                                <Text style={styles.btnText}>Security</Text>
                                </Pressable>
                            <Pressable
                                style={styles.btn}>
                                <Text style={styles.btnText}>Help</Text>
                                </Pressable>
                            <Pressable
                                style={styles.btn}>
                                <Text style={styles.btnText}>About</Text>
                                </Pressable>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignSelf: "stretch"
    },
    container2: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
      },
    profile: {
        backgroundColor: "rgb(17, 19, 66)",
        marginHorizontal: 25,
        marginTop: 70,
        marginBottom: 25,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'rgb(89, 97, 249)',
        alignSelf: "stretch",
        paddingTop: 15
    },
    text: {
        fontSize:20
    },
    grad: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    },
    img: {
        width: 110,
        height: 110,
        marginTop: 20,
        borderRadius: 55,
        alignSelf: "center",
        marginBottom: 20
    },
    title: {
        color: "gray",
        paddingTop: 20,
        paddingLeft: 40,
        fontSize: 15
    }, 
    content: contentClr => ({
        color: contentClr,
        paddingLeft: 40,
        fontSize: 25
    }),
    header: {
        alignSelf: "center",
        fontSize: 30,
        color: "white",
        marginTop: 30,
        marginBottom: 15
    },
    btn: {
        backgroundColor: "rgba(89, 97, 249, .7)",
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10
    },
    btnText: {
        fontSize: 20,
        alignSelf: "center",
        color: "white"
    }
});