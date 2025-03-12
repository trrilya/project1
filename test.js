import set from './src/set.js';

const obj = {};

// Первый тест: обычное присваивание
set(obj, 'key1', 'value1');
if (obj.key1 !== 'value1') {
  throw new Error('Ошибка: set(obj, "key1", "value1") не работает!');
}

// Второй тест: обновление значения
set(obj, 'key1', 'next value');
if (obj.key1 !== 'next value') {
  throw new Error('Ошибка: set(obj, "key1", "next value") не обновляет значение!');
}

console.log('✅ Все тесты пройдены!');
