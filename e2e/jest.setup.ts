import 'dotenv/config';
import { beforeAll, beforeEach, afterAll, jest } from '@jest/globals';
import { device } from 'detox';

jest.setTimeout(180000);
jest.useRealTimers();

beforeAll(async () => {
  await device.launchApp({ newInstance: true });
});

beforeEach(async () => {
  await device.reloadReactNative();
});

afterAll(async () => {
  await device.terminateApp();
});
