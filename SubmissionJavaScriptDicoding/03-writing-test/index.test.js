import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should return correctly', () => {
  const numberA = 1;
  const numberB = 5;

  const value = sum(numberA, numberB);

  const expected = 6;
  assert.equal(value, expected);
});