import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import UserService from "../UserService";

const INPUT_OFFSET = 110;

/**
 * First page loaded for user upon opening app, allows signup & user object creation
 * @param {navigation} : provides React navigation to/from other components onPress
 */
export default function Signup({navigation}) {

  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const [errorText, setText] = useState("");

  // Strings to feed "setText" based on each specific error category 
  const badFirst = "Invalid first name. Please provide a first name.";
  const badLast = "Invalid last name. Please provide a last name.";
  const badEmail = "Invalid email. Please provide a valid email address.";
  const badPassword = "Invalid Password. Must contain 8-18 characters and at least 1 special character.";
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  // Shake animation method when <TextInput> values are incorrect & user presses the signup button
  const startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <Animated.View style={[styles.container, {transform: [{translateX: shakeAnimation}]} ]}>
        <View style={styles.topBanner}>
            <TouchableOpacity>
                <View style={styles.top}>
                    <Text style={styles.topText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}>
                <View style={[styles.top,
                             {backgroundColor: "transparent"},
                             {borderWidth: 0}]}>
                    <Text style={[styles.topText, {color: "black"}]}>Log In</Text>
                </View> 
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <FeatherIcon color="#075eec" name="lock" size={44} />
          </View>

          <Text style={styles.title}>
            Welcome to <Text style={{ color: '#0742fc' }}>DawgByte Fitness</Text>
          </Text>

          <Text style={styles.subtitle}>Get in shape with your friends</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={firstname => setForm({ ...form, firstname })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.firstname}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last Name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={lastname => setForm({ ...form, lastname })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.lastname}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <Text style={styles.errorText}>{errorText}</Text>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                if (form.firstname == "") {
                  setText(badFirst);
                  startShakeAnimation();
                } else if (form.lastname == "") {
                  setText(badLast);
                  startShakeAnimation();
                } else if (!form.email.includes("@")) {
                  setText(badEmail);
                  startShakeAnimation();
                } else if (form.password.length < 8 ||
                           form.password.length > 18 ||
                           !specialCharRegex.test(form.password)) {
                  setText(badPassword);
                  startShakeAnimation();
                } else {
                  navigation.navigate("Main");
                }
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.formActionSpacer} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}>
              <View style={styles.login}>
                <Text style={[{marginLeft: 10},
                              {textDecorationLine: "underline"}]}>
                  I already have an account</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formFooter}>
            By clicking "Sign in" above, you agree to DawgByte Fitness's
            <Text style={{ fontWeight: '600' }}> Terms & Conditions </Text>
            and
            <Text style={{ fontWeight: '600' }}> Privacy Policy</Text>.
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerIcon: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginBottom: 36,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginBottom: 24,
    marginTop: 10
  },
  formActionSpacer: {
    marginVertical: 8,
  },
  formFooter: {
    marginTop: 'auto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputLabel: {
    position: 'absolute',
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#c0c0c0',
    zIndex: 9,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
  },
  loginText: {
    fontSize: 15,
    color: '#0742fc'
  },
  topBanner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  topText: {
    color: "white",
    fontSize: 18
  },
  errorText: {
    color: "red",
  }
});