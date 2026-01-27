import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../Styles/LoginStyle';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, login } from '../../redux/features/auth/slice';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(state => state.auth);

  const handleTextChange = (name, value) => {
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
    dispatch(clearError());

  };

  console.log('user', user);

  const handleSubmit = () => {
    console.log('crt', credentials);
    dispatch(login(credentials));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        {/* Top Red Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logos/signInLogo-removebg-preview.png')}
              style={styles.logo}
            />
          </View>
        </View>

        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>
            Sign in to continue to your account
          </Text>

          <Text style={styles.label}>Username</Text>
          <TextInput
            value={credentials.email}
            style={styles.input}
            placeholder="admin"
            placeholderTextColor="#999"
            onChangeText={text => handleTextChange('email', text)}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              value={credentials?.password}
              style={styles.passwordInput}
              placeholder="••••"
              secureTextEntry={!passwordVisible}
              placeholderTextColor="#999"
              onChangeText={text => handleTextChange('password', text)}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Text style={styles.eye}>{passwordVisible ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
          {error && (
            <Text style={{ color: 'red', fontSize: 14, marginTop: -10 }}>
              {error?.non_field_errors}
            </Text>
          )}

          <TouchableOpacity style={styles.forgotWrapper}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {loading ? 'Signing In' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
