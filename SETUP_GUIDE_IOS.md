# Detox iOS Setup Guide

This guide helps a new user set up and run the Detox automation framework on iOS.

---

## 1. Prerequisites

Install the following:

- Git
- Node.js 20+
- npm 10+
- Xcode 15+
- Xcode Command Line Tools
- An iPhone simulator or a real iPhone device

### Verify versions

```bash
git --version
node --version
npm --version
xcodebuild -version
```

---

## 2. Clone the project

```bash
git clone <your-repo-url>
cd Detox_framwrok
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Create the environment file

```bash
cp .env.example .env
```

Update the values in [.env](.env) if needed.

---

## 5. Prepare the iOS app

Make sure your React Native iOS app is built and available at the path configured in [detox.config.js](detox.config.js).

The default expected app path is:

```text
ios/build/Build/Products/Debug-iphonesimulator/YourApp.app
```

If your app uses a different path, update [detox.config.js](detox.config.js).

---

## 6. Start a simulator

Open Xcode and start an iPhone simulator from Xcode > Open Developer Tool > Simulator.

---

## 7. Build the app for Detox

```bash
npm run detox:build:ios
```

---

## 8. Run the tests

```bash
npm run detox:test:ios
```

Run a single test file:

```bash
npx jest --config e2e/jest.config.js e2e/tests/login.e2e.ts
```

---

## 9. Common issues

- Simulator not detected: open Xcode and start a simulator
- App not found: update the `IOS_APP_PATH` value in [.env](.env)
- Elements not found: update selectors in the page object files
