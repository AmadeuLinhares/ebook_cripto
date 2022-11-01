declare module 'react-native-config' {
  interface Env {
    BASE_URL: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
