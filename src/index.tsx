import { NativeModules } from 'react-native';

type MyReactNativeToastType = {
  show(message: string, duration: number): void;
};

const { MyReactNativeToast } = NativeModules;

export default MyReactNativeToast as MyReactNativeToastType;
