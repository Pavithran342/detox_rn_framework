# Detox React Native Automation Framework

This project is a starter automation framework for React Native using Detox and Jest. It includes page objects, BDD-style Cucumber features, reusable utilities, test data, and CI workflow scaffolding.

> Important: this framework is ready structurally, but it still needs your real app-specific selectors and build paths to run against your actual mobile app.

## What is included

- Detox + Jest test runner setup
- BDD feature files and step definitions
- Page Object Model for login, product, cart, and checkout flows
- Reusable helpers and test-data structure
- Smoke and regression-oriented example tests
- GitHub Actions workflow scaffold

## Project structure

- [package.json](package.json) - scripts and dependencies
- [detox.config.js](detox.config.js) - Detox app/device/configuration
- [e2e/features](e2e/features) - feature files for BDD
- [e2e/step-definitions](e2e/step-definitions) - step definitions
- [e2e/pages](e2e/pages) - page object classes
- [e2e/tests](e2e/tests) - Jest test files
- [e2e/test-data](e2e/test-data) - test data and credentials
- [e2e/utils](e2e/utils) - reusable helper methods
- [SETUP_GUIDE_ANDROID.md](SETUP_GUIDE_ANDROID.md) - Android setup guide
- [SETUP_GUIDE_IOS.md](SETUP_GUIDE_IOS.md) - iOS setup guide

## Prerequisites

You need the following installed:

- Git
- Node.js 20+
- npm 10+
- For Android: Android Studio, Java JDK 17+, emulator or device
- For iOS: Xcode, simulator or device

## Quick start

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd Detox_framework
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create the environment file
   - Windows PowerShell:
     ```powershell
     copy .env.example .env
     ```
   - macOS/Linux:
     ```bash
     cp .env.example .env
     ```

4. Update the environment values in [.env](.env)
   ```env
   VALID_EMAIL=demo@example.com
   VALID_PASSWORD=Password123!
   INVALID_EMAIL=invalid@example.com
   INVALID_PASSWORD=WrongPassword123!
   APP_BUNDLE_ID=com.example.app
   ANDROID_APP_PATH=android/app/build/outputs/apk/debug/app-debug.apk
   IOS_APP_PATH=ios/build/Build/Products/Debug-iphonesimulator/YourApp.app
   ANDROID_AVD_NAME=Pixel_5_API_30
   IOS_SIMULATOR_TYPE=iPhone 15
   ```

5. Update app-specific values
   - [detox.config.js](detox.config.js) must point to your real app build output
   - The selectors in [e2e/pages/LoginPage.ts](e2e/pages/LoginPage.ts), [e2e/pages/ProductPage.ts](e2e/pages/ProductPage.ts), [e2e/pages/CartPage.ts](e2e/pages/CartPage.ts), and [e2e/pages/CheckoutPage.ts](e2e/pages/CheckoutPage.ts) must match your app UI

## Run tests

### Android

```bash
npm run detox:build:android
npm run detox:test:android
```

### iOS

```bash
npm run detox:build:ios
npm run detox:test:ios
```

## Team handoff checklist

A teammate can use this project if they complete the following:

1. Install the required tools from the prerequisites section.
2. Clone the repository and run `npm install`.
3. Create `.env` from `.env.example` and update the values.
4. Make sure the target app is built and available at the path defined in `detox.config.js`.
5. Update the selectors in the page object files so they match the real app UI.
6. Start the emulator or simulator and run the build/test commands above.

## Run only smoke or regression suites

```bash
npm run test:e2e:smoke
npm run test:e2e:regression
```

## Run one specific test file

```bash
npx jest --config e2e/jest.config.js e2e/tests/login.e2e.ts
```

## What you must still fill in for your real app

1. The correct app build path in [detox.config.js](detox.config.js)
2. The correct simulator or emulator name
3. Real UI test IDs, labels, or text selectors in the page objects
4. Real login credentials in [.env](.env)

## Troubleshooting

- If Detox cannot find the app, check the app path in [detox.config.js](detox.config.js)
- If elements are not found, update the selectors in the page object files
- If the emulator/simulator is not detected, start it first and verify with `adb devices` or Xcode simulator

## Recommended next step

Follow [SETUP_GUIDE_ANDROID.md](SETUP_GUIDE_ANDROID.md) for Android or [SETUP_GUIDE_IOS.md](SETUP_GUIDE_IOS.md) for iOS to get started quickly.
