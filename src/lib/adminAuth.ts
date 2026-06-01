import { createHash, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "portal_pancs_admin";
const FALLBACK_ADMIN_PASSWORD = "portal-admin";

// When set to 'true', authentication checks are bypassed.
const ADMIN_DISABLED = process.env.ADMIN_DISABLED === "true";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || FALLBACK_ADMIN_PASSWORD;
}

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function getAdminSessionToken() {
  if (ADMIN_DISABLED) return hashValue("portal-pancs:disabled");
  return hashValue(`portal-pancs:${getAdminPassword()}`);
}

export function isValidAdminPassword(password: string) {
  // If admin auth is disabled, accept any password (useful for demos).
  if (ADMIN_DISABLED) return true;

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
