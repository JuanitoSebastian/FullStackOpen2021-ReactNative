import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Removing the quotes that are (for some reason) generated...
    const tokenFromStorage = await AsyncStorage.getItem(`${this.namespace}:token`);
    return tokenFromStorage ? tokenFromStorage.substring(1, tokenFromStorage.length - 1) : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;