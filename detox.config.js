const androidAppPath = process.env.ANDROID_APP_PATH || 'android/app/build/outputs/apk/debug/app-debug.apk';
const iosAppPath = process.env.IOS_APP_PATH || 'ios/build/Build/Products/Debug-iphonesimulator/YourApp.app';
const androidAvdName = process.env.ANDROID_AVD_NAME || 'Pixel_5_API_30';
const iosSimulatorType = process.env.IOS_SIMULATOR_TYPE || 'iPhone 15';

module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/jest.config.js',
  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: androidAppPath,
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
    },
    'ios.debug': {
      type: 'ios.app',
      binaryPath: iosAppPath,
      build: 'xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
  },
  devices: {
    'android.emulator': {
      type: 'android.emulator',
      device: {
        avdName: androidAvdName,
      },
    },
    'ios.simulator': {
      type: 'ios.simulator',
      device: {
        type: iosSimulatorType,
      },
    },
  },
  configurations: {
    'android.emu.debug': {
      device: 'android.emulator',
      app: 'android.debug',
    },
    'ios.sim.debug': {
      device: 'ios.simulator',
      app: 'ios.debug',
    },
  },
};
