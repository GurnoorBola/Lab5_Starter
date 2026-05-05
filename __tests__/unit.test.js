// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('408-110-1000 is a phone number', () => {
  expect(isPhoneNumber('408-110-1000')).toBe(true);
});

test('(669) 110-1001 is a phone number', () => {
  expect(isPhoneNumber('(669) 110-1001')).toBe(true);
});

test('1 is not a phone number', () => {
  expect(isPhoneNumber('1')).toBe(false);
});

test('(abc) def-ghijk is not a phone number', () => {
  expect(isPhoneNumber('(abc) def-ghijk')).toBe(false);
});


test('bob@gmail.com is an email', () => {
  expect(isEmail('bob@gmail.com')).toBe(true);
});

test('net@yahoo.com is an email', () => {
  expect(isEmail('net@yahoo.com')).toBe(true);
});

test('bobby@shmurda is not an email', () => {
  expect(isEmail('bobby@shmurda')).toBe(false);
});

test('123.com is not an email', () => {
  expect(isEmail('123.com')).toBe(false);
});


test('a123 is a strong password', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('Password123_ is a strong password', () => {
  expect(isStrongPassword('Password123_')).toBe(true);
});

test('1abc is not a strong password', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('ab! is not a strong password', () => {
  expect(isStrongPassword('ab!')).toBe(false);
});


test('1/1/2026 is a date', () => {
  expect(isDate('1/1/2026')).toBe(true);
});

test('12/31/1999 is a date', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('12-31-1999 is not a date', () => {
  expect(isDate('12-31-1999')).toBe(false);
});

test('1/1/26 is not a date', () => {
  expect(isDate('1/1/26')).toBe(false);
});


test('#abc is a hex color', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('FFAA00 is a hex color', () => {
  expect(isHexColor('FFAA00')).toBe(true);
});

test('#zz0011 is not a hex color', () => {
  expect(isHexColor('#zz0011')).toBe(false);
});

test('12345 is not a hex color', () => {
  expect(isHexColor('12345')).toBe(false);
});
