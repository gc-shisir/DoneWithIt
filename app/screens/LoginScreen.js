import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import AppForm from "../components/forms/AppForm";

// form validation schema for yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema} //for validation using Yup
      >
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          // onBlur={() => setFieldTouched("email")}
          // onChangeText={handleChange("email")}
          textContentType="emailAddress"
        />
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          // onBlur={() => setFieldTouched("password")}
          // onChangeText={handleChange("password")}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        <SubmitButton title="Log In" />
        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
