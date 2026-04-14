export type { Locale, ExpansionRisk } from './types.js';
export { LOCALES } from './data.js';

import type { Locale, ExpansionRisk } from './types.js';
import { LOCALES } from './data.js';

/**
 * Look up a locale by its ISO 639-1 code (e.g. "ja", "de"), App Store
 * Connect code (e.g. "zh-Hans"), Play Store code (e.g. "pt-BR"), or slug.
 * Case-insensitive. Returns undefined if not found.
 */
export function getLocale(codeOrSlug: string): Locale | undefined {
  if (!codeOrSlug) return undefined;
  const needle = codeOrSlug.toLowerCase().replace(/_/g, '-');
  return LOCALES.find(
    (l) =>
      l.code.toLowerCase() === needle ||
      l.appStoreCode.toLowerCase() === needle ||
      l.playStoreCode.toLowerCase() === needle ||
      l.slug === needle,
  );
}

/**
 * List all available locale codes (ISO 639-1 primary codes).
 */
export function listLocaleCodes(): string[] {
  return LOCALES.map((l) => l.code);
}

/**
 * List all locales that use right-to-left scripts
 * (Arabic, Hebrew, Persian, Urdu).
 */
export function listRtlLocales(): readonly Locale[] {
  return LOCALES.filter((l) => l.rtl);
}

/**
 * Get recommended fonts for a locale. Returns an empty array if the locale
 * is not found.
 */
export function getFonts(codeOrSlug: string): readonly string[] {
  return getLocale(codeOrSlug)?.fonts ?? [];
}

/**
 * Whether a locale uses a right-to-left script.
 * Returns false for unknown locales (conservative default).
 */
export function isRtl(codeOrSlug: string): boolean {
  return getLocale(codeOrSlug)?.rtl ?? false;
}

/**
 * Get App Store Connect locale code for a language (e.g. "zh-Hans", "pt-BR").
 * Returns the input if not a known locale.
 */
export function getAppStoreCode(codeOrSlug: string): string {
  return getLocale(codeOrSlug)?.appStoreCode ?? codeOrSlug;
}

/**
 * Get Google Play Console locale code for a language.
 * Returns the input if not a known locale.
 */
export function getPlayStoreCode(codeOrSlug: string): string {
  return getLocale(codeOrSlug)?.playStoreCode ?? codeOrSlug;
}

/**
 * Classify layout risk from a text expansion percentage.
 *   < -10  → shrinks (CJK source scenarios)
 *   -10..15 → low
 *   15..25  → medium
 *   > 25   → high
 */
export function classifyExpansionRisk(expansionPct: number): ExpansionRisk {
  if (expansionPct < -10) return 'shrinks';
  if (expansionPct <= 15) return 'low';
  if (expansionPct <= 25) return 'medium';
  return 'high';
}

/**
 * Get the expected layout risk for a given target locale when the
 * source language is English.
 */
export function getExpansionRisk(codeOrSlug: string): ExpansionRisk | undefined {
  const locale = getLocale(codeOrSlug);
  return locale ? classifyExpansionRisk(locale.expansionPct) : undefined;
}
