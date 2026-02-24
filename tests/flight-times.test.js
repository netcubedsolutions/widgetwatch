import { describe, it, expect } from 'vitest';
import {
  normalizeFlightNumber,
  epochToISO,
} from '../api/flight-times.js';

describe('normalizeFlightNumber (FlightAware)', () => {
  it('converts DL prefix to DAL', () => {
    expect(normalizeFlightNumber('DL2221')).toBe('DAL2221');
  });

  it('prepends DAL to bare numbers', () => {
    expect(normalizeFlightNumber('2221')).toBe('DAL2221');
  });

  it('leaves DAL prefix as-is', () => {
    expect(normalizeFlightNumber('DAL100')).toBe('DAL100');
  });

  it('trims whitespace and uppercases', () => {
    expect(normalizeFlightNumber('  dl 838 ')).toBe('DAL838');
  });

  it('handles empty/null input', () => {
    expect(normalizeFlightNumber('')).toBe('');
    expect(normalizeFlightNumber(null)).toBe('');
    expect(normalizeFlightNumber(undefined)).toBe('');
  });

  it('handles array input (takes first element)', () => {
    expect(normalizeFlightNumber(['DL100', 'DL200'])).toBe('DAL100');
  });

  it('handles single-digit flight numbers', () => {
    expect(normalizeFlightNumber('1')).toBe('DAL1');
  });
});

describe('epochToISO', () => {
  it('converts valid epoch to ISO string', () => {
    // 2024-01-01T00:00:00.000Z
    const result = epochToISO(1704067200);
    expect(result).toBe('2024-01-01T00:00:00.000Z');
  });

  it('returns empty string for 0', () => {
    expect(epochToISO(0)).toBe('');
  });

  it('returns empty string for null', () => {
    expect(epochToISO(null)).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(epochToISO(undefined)).toBe('');
  });

  it('handles recent timestamps', () => {
    const result = epochToISO(1700000000);
    expect(result).toMatch(/^2023-11-14T/);
  });
});
