import { NativeModules } from 'react-native';

type MyReactNativeToastType = {
  show(message: string, duration: number): any;
  SHORT: number;
  LONG: number;
};

const { MyReactNativeToast } = NativeModules;

export default MyReactNativeToast as MyReactNativeToastType;
