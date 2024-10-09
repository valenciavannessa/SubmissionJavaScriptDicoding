import { describe, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Function Sum', () => {
  test('should return correctly', () => {
    const operandA = 5;
    const operandB = 4;
  
    const value = sum(operandA, operandB);
  
    const expected = 9;
    assert.equal(value, expected);
  });

  test('should return 0 if operandA is string', () => {
      const operandA = '5';
      const operandB = 4;

      const value = sum(operandA, operandB);

      const expected = 0;
      assert.equal(value, expected);

  });

  test('should return 0 if operandB is string', () => {
    const operandA = 5;
    const operandB = '4';

    const value = sum(operandA, operandB);

    const expected = 0;
    assert.equal(value, expected);
  
  });

  test('should return 0 if operandA is negative', () => {
    const operandA = -5;
    const operandB = 4;

    const value = sum(operandA, operandB);

    const expected = 0;
    assert.equal(value, expected);
  });

  test('should return 0 if operandB is negative', () => {
    const operandA = 5;
    const operandB = -4;

    const value = sum(operandA, operandB);

    const expected = 0;
    assert.equal(value, expected);
  });

});



