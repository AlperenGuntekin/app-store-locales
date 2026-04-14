/**
 * Information about a single language/locale relevant to App Store
 * and Google Play screenshot and metadata localization.
 */
export interface Locale {
  /** ISO 639-1 code (e.g. "ja", "de"). Always lowercase. */
  code: string;

  /** English display name (e.g. "Japanese", "German"). */
  name: string;

  /** Native name in the language's own script (e.g. "日本語", "Deutsch"). */
  nativeName: string;

  /** Unicode flag emoji representing the primary country for this locale. */
  flag: string;

  /**
   * URL-safe slug (e.g. "japanese", "brazilian-portuguese"). Useful for
   * generating programmatic landing pages or routing.
   */
  slug: string;

  /**
   * Character-count expansion percentage vs English source.
   * Positive = longer than English. Negative = shorter.
   * Example: +30 means translated text is ~30% longer in characters.
   */
  expansionPct: number;

  /**
   * Visual width multiplier vs English at same font size.
   * Matters most for CJK scripts which have wider glyphs despite fewer chars.
   * Example: +5 means the rendered text is ~5% wider pixel-wise.
   */
  widthPct: number;

  /** Right-to-left script. Defaults to false. */
  rtl: boolean;

  /**
   * App Store Connect locale code. Usually equal to `code`, but sometimes
   * a BCP-47-style subtag (e.g. "zh-Hans", "pt-BR").
   */
  appStoreCode: string;

  /**
   * Google Play Console locale code (BCP-47 style).
   * Example: "en-US", "zh-TW".
   */
  playStoreCode: string;

  /**
   * Recommended fonts for screenshot / UI text in this locale, ordered by
   * preference. Include platform-specific picks where relevant
   * (e.g. "SF Pro JP", "Noto Sans JP").
   */
  fonts: readonly string[];
}

/**
 * Risk level bucket for layout overflow, derived from expansion %.
 */
export type ExpansionRisk = 'shrinks' | 'low' | 'medium' | 'high';
