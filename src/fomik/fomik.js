import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { loginShema } from '../ultils/loginYupSchema';

const formData = {
  form1: { key: 1, data: { email: '', age: '' } },
  form2: { key: 2, data: { email: '', age: '' } },
};

const Test = () => {
  const formikRef = React.useRef();

  const onSubmitPress = React.useCallback(() => {
    console.log('formikRef', formikRef);
    formikRef.current?.validateForm();
    const isValid = formikRef.current?.isValid;
    if (isValid) {
      console.log('isVaid');
    } else {
      console.log('error');
    }
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Formik
        innerRef={formikRef}
        initialValues={{
          email: '',
          password: '',
        }}
        initialErrors={{
          email: 'a',
          password: 'b',
        }}
        validateOnChange={false}
        validationSchema={loginShema}>
        {({ errors, values, setFieldValue, ...props }) => {
          console.log(props);
          return (
            <View>
              <TextInput
                style={{ height: 40, borderWidth: 1 }}
                value={values.email}
                placeholder={'enter email'}
                onChangeText={textEmail => {
                  setFieldValue('email', textEmail);
                }}
              />
              <Text>{errors.email}</Text>

              <TextInput
                style={{ height: 40, borderWidth: 1 }}
                value={values.password}
                placeholder={'enter password'}
                onChangeText={textPassword => {
                  setFieldValue('password', textPassword);
                }}
              />
              <Text>{errors.password}</Text>

              <Button title="Submit" onPress={onSubmitPress} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
