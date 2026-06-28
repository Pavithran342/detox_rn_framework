import { element, by, expect, waitFor } from 'detox';

export async function waitForElement(selector: any, timeout = 10000) {
  await waitFor(element(selector)).toBeVisible().withTimeout(timeout);
}

export async function scrollToElement(selector: any, direction: 'down' | 'up' = 'down') {
  await element(selector).scrollTo(direction);
}

export async function verifyText(selector: any, expectedText: string) {
  await expect(element(selector)).toHaveText(expectedText);
}
