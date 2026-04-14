/**
 * Locale data for App Store and Google Play screenshot localization.
 *
 * expansionPct: character-count delta vs English (+20 = 20% longer)
 * widthPct: visual rendered width delta at same font size
 * fonts: ordered preference list for UI / screenshot typography
 */

import type { Locale } from './types.js';

export const LOCALES: readonly Locale[] = [
  {
    slug: 'japanese', code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵',
    expansionPct: -45, widthPct: 5, rtl: false,
    appStoreCode: 'ja', playStoreCode: 'ja-JP',
    fonts: ['Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'SF Pro JP'],
  },
  {
    slug: 'german', code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪',
    expansionPct: 35, widthPct: 35, rtl: false,
    appStoreCode: 'de-DE', playStoreCode: 'de-DE',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'spanish', code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'es-ES', playStoreCode: 'es-ES',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'french', code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'fr-FR', playStoreCode: 'fr-FR',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'korean', code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷',
    expansionPct: -40, widthPct: 5, rtl: false,
    appStoreCode: 'ko', playStoreCode: 'ko-KR',
    fonts: ['Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', 'Spoqa Han Sans Neo'],
  },
  {
    slug: 'simplified-chinese', code: 'zh-Hans', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳',
    expansionPct: -50, widthPct: 10, rtl: false,
    appStoreCode: 'zh-Hans', playStoreCode: 'zh-CN',
    fonts: ['Noto Sans SC', 'PingFang SC', 'Source Han Sans SC', 'Microsoft YaHei'],
  },
  {
    slug: 'traditional-chinese', code: 'zh-Hant', name: 'Chinese (Traditional)', nativeName: '繁體中文', flag: '🇹🇼',
    expansionPct: -50, widthPct: 10, rtl: false,
    appStoreCode: 'zh-Hant', playStoreCode: 'zh-TW',
    fonts: ['Noto Sans TC', 'PingFang TC', 'Source Han Sans TC'],
  },
  {
    slug: 'portuguese', code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'pt-PT', playStoreCode: 'pt-PT',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'brazilian-portuguese', code: 'pt-BR', name: 'Brazilian Portuguese', nativeName: 'Português (Brasil)', flag: '🇧🇷',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'pt-BR', playStoreCode: 'pt-BR',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'russian', code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'ru', playStoreCode: 'ru-RU',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'PT Sans'],
  },
  {
    slug: 'italian', code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'it', playStoreCode: 'it-IT',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'dutch', code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱',
    expansionPct: 30, widthPct: 30, rtl: false,
    appStoreCode: 'nl-NL', playStoreCode: 'nl-NL',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'arabic', code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦',
    expansionPct: 15, widthPct: 25, rtl: true,
    appStoreCode: 'ar-SA', playStoreCode: 'ar',
    fonts: ['SF Arabic', 'Noto Sans Arabic', 'Cairo', 'IBM Plex Sans Arabic'],
  },
  {
    slug: 'hebrew', code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱',
    expansionPct: -10, widthPct: 5, rtl: true,
    appStoreCode: 'he', playStoreCode: 'iw-IL',
    fonts: ['Rubik', 'Heebo', 'Assistant', 'Noto Sans Hebrew'],
  },
  {
    slug: 'turkish', code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'tr', playStoreCode: 'tr-TR',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'polish', code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'pl', playStoreCode: 'pl-PL',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'swedish', code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'sv', playStoreCode: 'sv-SE',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'norwegian', code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'no', playStoreCode: 'nb-NO',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'danish', code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'da', playStoreCode: 'da-DK',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'finnish', code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮',
    expansionPct: 30, widthPct: 30, rtl: false,
    appStoreCode: 'fi', playStoreCode: 'fi-FI',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'czech', code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'cs', playStoreCode: 'cs-CZ',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'greek', code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷',
    expansionPct: 15, widthPct: 15, rtl: false,
    appStoreCode: 'el', playStoreCode: 'el-GR',
    fonts: ['Noto Sans', 'Roboto', 'Inter', 'SF Pro'],
  },
  {
    slug: 'hungarian', code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'hu', playStoreCode: 'hu-HU',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'romanian', code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'ro', playStoreCode: 'ro-RO',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'bulgarian', code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'bg', playStoreCode: 'bg-BG',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'PT Sans'],
  },
  {
    slug: 'thai', code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭',
    expansionPct: -10, widthPct: 15, rtl: false,
    appStoreCode: 'th', playStoreCode: 'th-TH',
    fonts: ['Noto Sans Thai', 'Sarabun', 'IBM Plex Sans Thai', 'Sukhumvit Set'],
  },
  {
    slug: 'vietnamese', code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'vi', playStoreCode: 'vi-VN',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'indonesian', code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩',
    expansionPct: 10, widthPct: 10, rtl: false,
    appStoreCode: 'id', playStoreCode: 'id',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'malay', code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾',
    expansionPct: 10, widthPct: 10, rtl: false,
    appStoreCode: 'ms', playStoreCode: 'ms',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'hindi', code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳',
    expansionPct: 20, widthPct: 30, rtl: false,
    appStoreCode: 'hi', playStoreCode: 'hi-IN',
    fonts: ['Noto Sans Devanagari', 'Tiro Devanagari Hindi', 'Mangal'],
  },
  {
    slug: 'tamil', code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳',
    expansionPct: 20, widthPct: 30, rtl: false,
    appStoreCode: 'ta', playStoreCode: 'ta-IN',
    fonts: ['Noto Sans Tamil', 'Tiro Tamil', 'Catamaran'],
  },
  {
    slug: 'bengali', code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩',
    expansionPct: 20, widthPct: 30, rtl: false,
    appStoreCode: 'bn', playStoreCode: 'bn-BD',
    fonts: ['Noto Sans Bengali', 'Tiro Bangla', 'Hind Siliguri'],
  },
  {
    slug: 'ukrainian', code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦',
    expansionPct: 25, widthPct: 25, rtl: false,
    appStoreCode: 'uk', playStoreCode: 'uk-UA',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'PT Sans'],
  },
  {
    slug: 'catalan', code: 'ca', name: 'Catalan', nativeName: 'Català', flag: '🇪🇸',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'ca', playStoreCode: 'ca',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'slovak', code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', flag: '🇸🇰',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'sk', playStoreCode: 'sk-SK',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'croatian', code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', flag: '🇭🇷',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'hr', playStoreCode: 'hr-HR',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'latvian', code: 'lv', name: 'Latvian', nativeName: 'Latviešu', flag: '🇱🇻',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'lv', playStoreCode: 'lv',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'lithuanian', code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', flag: '🇱🇹',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'lt', playStoreCode: 'lt',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'estonian', code: 'et', name: 'Estonian', nativeName: 'Eesti', flag: '🇪🇪',
    expansionPct: 20, widthPct: 20, rtl: false,
    appStoreCode: 'et', playStoreCode: 'et',
    fonts: ['Inter', 'Roboto', 'Noto Sans', 'SF Pro'],
  },
  {
    slug: 'persian', code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷',
    expansionPct: 15, widthPct: 25, rtl: true,
    appStoreCode: 'fa', playStoreCode: 'fa',
    fonts: ['Vazirmatn', 'Noto Sans Arabic', 'IRANSans', 'IRANSansX'],
  },
  {
    slug: 'urdu', code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰',
    expansionPct: 20, widthPct: 30, rtl: true,
    appStoreCode: 'ur', playStoreCode: 'ur',
    fonts: ['Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Noto Sans Arabic'],
  },
];
