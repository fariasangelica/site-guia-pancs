import { createHash, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "portal_pancs_admin";
const FALLBACK_ADMIN_PASSWORD = "portal-admin";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || FALLBACK_ADMIN_PASSWORD;
}

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function getAdminSessionToken() {
  return hashValue(`portal-pancs:${getAdminPassword()}`);
}

export function isValidAdminPassword(password: string) {
  const expected = getAdminPassword();
  const receivedBuffer = Buffer.from(password);
  const expectedBuffer = Buffer.from(expected);

  if (receivedBuffer.length !== expectedBuffer.length) return false;
  return timingSafeEqual(receivedBuffer, expectedBuffer);
}

export function isValidAdminSessionToken(value?: string) {
  if (!value) return false;
  return value === getAdminSessionToken();
}
