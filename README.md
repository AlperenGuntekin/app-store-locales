# app-store-locales — TypeScript Locale Data for App Store Connect & Google Play

[![npm version](https://img.shields.io/npm/v/app-store-locales.svg)](https://www.npmjs.com/package/app-store-locales)
[![npm downloads](https://img.shields.io/npm/dm/app-store-locales.svg)](https://www.npmjs.com/package/app-store-locales)
[![license](https://img.shields.io/npm/l/app-store-locales.svg)](./LICENSE)

> TypeScript dataset and helpers for App Store Connect and Google Play Console locales — codes, fonts, RTL info, and text expansion data for 40+ languages.

Built as part of **[Shotlingo](https://shotlingo.com)** — an AI-powered App Store screenshot localization tool for indie iOS and Android developers.

## Why this exists

When you ship an app to 40 different markets, you need to know:

- **Which App Store Connect locale code do I use?** (`zh-Hans` or `zh-CN`?)
- **Which fonts render correctly in this language?** (Noto Sans JP vs Noto Sans CJK?)
- **How much will my English text expand?** (German is +35%, Japanese is −45%)
- **Is this an RTL language?** (Arabic yes, Persian yes, Hebrew yes — Thai no)

This library ships that data, curated from real App Store Connect and Google Play Console requirements, with zero runtime dependencies.

## Install

```bash
npm install app-store-locales
# or
pnpm add app-store-locales
# or
yarn add app-store-locales
```

## Usage

```ts
import {
  getLocale,
  getFonts,
  isRtl,
  getAppStoreCode,
  getPlayStoreCode,
  classifyExpansionRisk,
  LOCALES,
} from 'app-store-locales';

// Look up a locale by any code or slug
const ja = getLocale('ja');
// → { code: 'ja', name: 'Japanese', nativeName: '日本語', fonts: [...], ... }

// Get fonts for a language
getFonts('ko');
// → ['Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', 'Spoqa Han Sans Neo']

// Check if a locale is right-to-left
isRtl('ar'); // → true
isRtl('fa'); // → true
isRtl('he'); // → true
isRtl('en'); // → false

// Convert between App Store and Play Store codes
getAppStoreCode('ja');       // → 'ja'
getPlayStoreCode('ja');      // → 'ja-JP'
getPlayStoreCode('zh-Hans'); // → 'zh-CN'  (Play Store uses old code)
getPlayStoreCode('he');      // → 'iw-IL'  (Play Store uses legacy Hebrew code)

// Assess layout risk for a target locale (assuming English source)
classifyExpansionRisk(35);   // → 'high'    (e.g. German)
classifyExpansionRisk(-45);  // → 'shrinks' (e.g. Japanese)
classifyExpansionRisk(15);   // → 'low'

// Iterate all locales
for (const locale of LOCALES) {
  console.log(`${locale.flag} ${locale.name}: ${locale.appStoreCode}`);
}
```

## Data shape

Each `Locale` entry:

```ts
interface Locale {
  code: string;          // ISO 639-1, e.g. "ja"
  name: string;          // English display name
  nativeName: string;    // e.g. "日本語"
  flag: string;          // Unicode flag emoji
  slug: string;          // URL-safe slug, e.g. "japanese"
  expansionPct: number;  // character-count delta vs English (+/-%)
  widthPct: number;      // visual-width delta at same font size
  rtl: boolean;          // right-to-left script
  appStoreCode: string;  // App Store Connect locale code
  playStoreCode: string; // Google Play Console locale code (BCP-47)
  fonts: string[];       // recommended UI / screenshot fonts, ordered
}
```

## Languages included

🇯🇵 Japanese · 🇩🇪 German · 🇪🇸 Spanish · 🇫🇷 French · 🇰🇷 Korean · 🇨🇳 Chinese (Simplified) · 🇹🇼 Chinese (Traditional) · 🇵🇹 Portuguese · 🇧🇷 Brazilian Portuguese · 🇷🇺 Russian · 🇮🇹 Italian · 🇳🇱 Dutch · 🇸🇦 Arabic · 🇮🇱 Hebrew · 🇹🇷 Turkish · 🇵🇱 Polish · 🇸🇪 Swedish · 🇳🇴 Norwegian · 🇩🇰 Danish · 🇫🇮 Finnish · 🇨🇿 Czech · 🇬🇷 Greek · 🇭🇺 Hungarian · 🇷🇴 Romanian · 🇧🇬 Bulgarian · 🇹🇭 Thai · 🇻🇳 Vietnamese · 🇮🇩 Indonesian · 🇲🇾 Malay · 🇮🇳 Hindi · 🇮🇳 Tamil · 🇧🇩 Bengali · 🇺🇦 Ukrainian · 🇪🇸 Catalan · 🇸🇰 Slovak · 🇭🇷 Croatian · 🇱🇻 Latvian · 🇱🇹 Lithuanian · 🇪🇪 Estonian · 🇮🇷 Persian · 🇵🇰 Urdu

Missing a language? [Open an issue](https://github.com/AlperenGuntekin/app-store-locales/issues) or send a PR.

## Related packages

- [**text-expansion-calculator**](https://www.npmjs.com/package/text-expansion-calculator) — calculate expected text length for a locale (depends on this package)
- [**Shotlingo**](https://shotlingo.com) — the product this data powers. Localize your App Store screenshots to 40+ languages with AI.
- [App Store localization checker](https://shotlingo.com/tools/app-store-localization-checker) — check whether your app name still fits after translation, per locale
- [App Store locale codes reference](https://shotlingo.com/tools/app-store-locale-codes) — interactive lookup for every App Store & Play Store locale code

## Contributing

Issues and PRs welcome — especially if you spot outdated font recommendations or a missing locale.

When adding a new locale, please include:
- Source for the `expansionPct` estimate (W3C i18n, Lokalise, Crowdin stats, etc.)
- Native name in the locale's own script
- At least 3 font recommendations (platform-appropriate)

## License

MIT © [Alperen Güntekin](https://shotlingo.com)

---

<sub>Maintained as part of the [ASO screenshot tool](https://shotlingo.com) open-source toolbox, Shotlingo.</sub>
