import { describe, it, expect } from 'vitest';
import {
  LOCALES,
  getLocale,
  listLocaleCodes,
  listRtlLocales,
  getFonts,
  isRtl,
  getAppStoreCode,
  getPlayStoreCode,
  classifyExpansionRisk,
  getExpansionRisk,
} from './index.js';

describe('LOCALES dataset', () => {
  it('contains 40+ entries', () => {
    expect(LOCALES.length).toBeGreaterThanOrEqual(40);
  });

  it('every entry has all required fields', () => {
    for (const l of LOCALES) {
      expect(l.code).toBeTruthy();
      expect(l.name).toBeTruthy();
      expect(l.nativeName).toBeTruthy();
      expect(l.flag).toBeTruthy();
      expect(l.slug).toBeTruthy();
      expect(l.appStoreCode).toBeTruthy();
      expect(l.playStoreCode).toBeTruthy();
      expect(l.fonts.length).toBeGreaterThan(0);
      expect(typeof l.rtl).toBe('boolean');
      expect(typeof l.expansionPct).toBe('number');
      expect(typeof l.widthPct).toBe('number');
    }
  });

  it('codes are unique', () => {
    const codes = LOCALES.map((l) => l.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('slugs are unique', () => {
    const slugs = LOCALES.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('getLocale', () => {
  it('finds by ISO code', () => {
    expect(getLocale('ja')?.name).toBe('Japanese');
    expect(getLocale('DE')?.name).toBe('German'); // case-insensitive
  });

  it('finds by App Store code', () => {
    expect(getLocale('zh-Hans')?.name).toBe('Chinese (Simplified)');
    expect(getLocale('pt-BR')?.name).toBe('Brazilian Portuguese');
  });

  it('finds by Play Store code', () => {
    expect(getLocale('zh-CN')?.name).toBe('Chinese (Simplified)');
  });

  it('finds by slug', () => {
    expect(getLocale('simplified-chinese')?.code).toBe('zh-Hans');
  });

  it('normalizes underscore separators', () => {
    expect(getLocale('pt_BR')?.name).toBe('Brazilian Portuguese');
  });

  it('returns undefined for unknown locales', () => {
    expect(getLocale('xx')).toBeUndefined();
    expect(getLocale('')).toBeUndefined();
  });
});

describe('listLocaleCodes', () => {
  it('returns all codes', () => {
    const codes = listLocaleCodes();
    expect(codes).toContain('ja');
    expect(codes).toContain('de');
    expect(codes.length).toBe(LOCALES.length);
  });
});

describe('listRtlLocales', () => {
  it('returns only RTL locales', () => {
    const rtl = listRtlLocales();
    expect(rtl.every((l) => l.rtl)).toBe(true);
    expect(rtl.map((l) => l.code)).toEqual(
      expect.arrayContaining(['ar', 'he', 'fa', 'ur']),
    );
  });
});

describe('getFonts', () => {
  it('returns recommended fonts for a locale', () => {
    const fonts = getFonts('ja');
    expect(fonts).toContain('Noto Sans JP');
  });

  it('returns empty array for unknown locales', () => {
    expect(getFonts('xx')).toEqual([]);
  });
});

describe('isRtl', () => {
  it('is true for RTL languages', () => {
    expect(isRtl('ar')).toBe(true);
    expect(isRtl('he')).toBe(true);
    expect(isRtl('fa')).toBe(true);
    expect(isRtl('ur')).toBe(true);
  });

  it('is false for LTR languages', () => {
    expect(isRtl('en')).toBe(false); // unknown → false
    expect(isRtl('ja')).toBe(false);
    expect(isRtl('de')).toBe(false);
  });
});

describe('getAppStoreCode', () => {
  it('returns App Store Connect locale code', () => {
    expect(getAppStoreCode('zh-Hans')).toBe('zh-Hans');
    expect(getAppStoreCode('de')).toBe('de-DE');
  });

  it('returns input as-is for unknown locales', () => {
    expect(getAppStoreCode('xx')).toBe('xx');
  });
});

describe('getPlayStoreCode', () => {
  it('returns Play Store locale code', () => {
    expect(getPlayStoreCode('zh-Hans')).toBe('zh-CN');
    expect(getPlayStoreCode('he')).toBe('iw-IL'); // Play Store uses old Hebrew code
  });
});

describe('classifyExpansionRisk', () => {
  it('classifies by expansion percentage', () => {
    expect(classifyExpansionRisk(-50)).toBe('shrinks'); // Chinese
    expect(classifyExpansionRisk(0)).toBe('low');
    expect(classifyExpansionRisk(15)).toBe('low');
    expect(classifyExpansionRisk(20)).toBe('medium');
    expect(classifyExpansionRisk(30)).toBe('high'); // German
  });
});

describe('getExpansionRisk', () => {
  it('returns risk for known locales', () => {
    expect(getExpansionRisk('de')).toBe('high');
    expect(getExpansionRisk('zh-Hans')).toBe('shrinks');
    expect(getExpansionRisk('en')).toBeUndefined();
  });
});
