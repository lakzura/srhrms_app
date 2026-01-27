import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

export const checkBiometricSupport = async () => {
  const { available, biometryType } = await rnBiometrics.isSensorAvailable();

  return { available, biometryType };
};

export const authenticateUser = async () => {
    const { available } = await rnBiometrics.isSensorAvailable();
  
    if (!available) {
      throw new Error('Biometric authentication not available');
    }
  
    const { success } = await rnBiometrics.simplePrompt({
      promptMessage: 'Confirm attendance',
      cancelButtonText: 'Cancel',
    });
  
    return success;
  };
  