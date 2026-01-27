import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { getToken } from '../utils/secureStorage';
import { restoreAuth } from '../redux/features/auth/slice';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrap = async () => {
      const token = await getToken();
      if (token) {
        dispatch(restoreAuth({ name: 'User' }));
      }
    };
    bootstrap();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
