import { strict as assert } from 'node:assert';
import set from './src/set.js';

const obj = {};

// Первый тест: обычное присваивание
set(obj, 'key1', 'value1');
assert.strictEqual(obj.key1, 'value1', 'Ошибка: ключ key1 должен быть "value1"');

// Второй тест: обновление значения (проверяем, что оно меняется)
set(obj, 'key1', 'next value');
assert.strictEqual(obj.key1, 'next value', 'Ошибка: key1 должно обновиться на "next value"');

console.log('✅ Все тесты успешно пройдены!');