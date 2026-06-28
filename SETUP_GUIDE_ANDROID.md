# Detox Android Setup Guide

This guide helps a new user set up and run the Detox automation framework on Android from scratch.

---

## 1. Prerequisites

Install the following:

- Git
- Node.js 20+
- npm 10+
- Android Studio
- Java JDK 17+
- An Android emulator or a real Android device

### Verify versions

Run these commands:

```bash
git --version
node --version
npm --version
java -version
```

---

## 2. Install Android Studio and create an emulator

1. Install Android Studio.
2. Open Android Studio.
3. Go to SDK Manager and install:
   - Android SDK Platform
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
4. Open Device Manager.
5. Create a new virtual device, for example Pixel 5.
6. Start the emulator.

---

## 3. Set Android environment variables

### Windows PowerShell

```powershell
setx ANDROID_HOME "$env:LOCALAPPDATA\Android\Sdk"
setx PATH "$env:PATH;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:ANDROID_HOME\cmdline-tools\latest\bin"
```

Restart the terminal after running this.

### Verify the setup

```bash
adb version
adb devices
```

You should see your emulator listed.

---

## 4. Clone the project

```bash
git clone <your-repo-url>
cd Detox_framework
```

---

## 5. Install dependencies

```bash
npm install
```

---

## 6. Create the environment file

### Windows PowerShell

```powershell
copy .env.example .env
```

### macOS/Linux

```bash
cp .env.example .env
```

Open [.env](.env) and update the values if needed.

---

## 7. Build the Android app

Before running Detox, make sure your Android app is built.

From the Android project folder:

```bash
cd android
./gradlew assembleDebug
```

If your app is already built, you can skip this step.

---

## 8. Make sure the app is installed on the emulator

```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

---

## 9. Update Detox configuration

Open [detox.config.js](detox.config.js) and confirm these values:

- `ANDROID_APP_PATH` in [.env](.env)
- `ANDROID_AVD_NAME` in [.env](.env)
- the correct build command for your app

The default Android configuration uses:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

If your app builds to a different path, update it.

---

## 10. Make sure the selectors match your app UI

The framework uses selectors such as:

- `loginEmailInput`
- `loginPasswordInput`
- `loginButton`
- `productItem`
- `addToCartButton`
- `cartButton`
- `checkoutButton`

If your app uses different test IDs or labels, update these files:

- [e2e/pages/LoginPage.ts](e2e/pages/LoginPage.ts)
- [e2e/pages/ProductPage.ts](e2e/pages/ProductPage.ts)
- [e2e/pages/CartPage.ts](e2e/pages/CartPage.ts)
- [e2e/pages/CheckoutPage.ts](e2e/pages/CheckoutPage.ts)

---

## 11. Run the tests

### Build the app for Detox

```bash
npm run detox:build:android
```

### Run the test suite

```bash
npm run detox:test:android
```

### Run smoke or regression tests only

```bash
npm run test:e2e:smoke
npm run test:e2e:regression
```

### Run one specific test file

```bash
npx jest --config e2e/jest.config.js e2e/tests/login.e2e.ts
```

---

## 12. Common problems and fixes

### Emulator not detected

```bash
adb devices
```

Start the emulator from Android Studio or run:

```bash
emulator -list-avds
emulator -avd <your_avd_name>
```

### App not found by Detox

Check [detox.config.js](detox.config.js) and the `ANDROID_APP_PATH` value in [.env](.env)

### Elements not found

Update the selectors in the page object files to match your app UI

### Build fails

Verify Java, Android SDK, and Gradle are installed correctly

---

## 13. Quick start summary

```bash
git clone <your-repo-url>
cd Detox_framwrok
npm install
copy .env.example .env
# update .env
# update detox.config.js
# update page object selectors
npm run detox:build:android
npm run detox:test:android
```
