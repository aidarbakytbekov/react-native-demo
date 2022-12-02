import {FC} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './signIn.styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {signIn} from '../../../store/user/user.slice';

const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter valid email')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('This field is required'),
});

const SignIn: FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(signIn());
  };
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Sign in</Text>
        <View style={styles.inputFields}>
          <Formik
            validateOnMount={true}
            initialValues={{email: '', password: ''}}
            onSubmit={values => onSubmit(values)}
            validationSchema={signInValidationSchema}>
            {({
              handleChange,
              isValid,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    style={styles.inputField}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorMsg}>{errors.email}</Text>
                  )}
                </View>
                <View>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.inputField}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorMsg}>{errors.password}</Text>
                  )}
                </View>
                <Pressable style={styles.btn}>
                  <Button
                    testID="loginButton"
                    onPress={handleSubmit}
                    disabled={!isValid}
                    title="Login"
                    color="#000"
                  />
                </Pressable>
              </>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
