declare module 'react-native-config' {
  interface Env {
    BASE_URL: string;
    GOOGLE_TOKEN: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
