import health from '../src/js/health';

test('should healthy #1', () => {
  expect(health({name: 'Маг', health: 90})).toBe("healthy");
});

test('should wounded #2', () => {
  expect(health({name: 'Маг', health: 50})).toBe("wounded");
});

test('should critical #3', () => {
  expect(health({name: 'Маг', health: 5})).toBe("critical");
});

test('should empty #4', () => {
  expect(health({})).toBe("");
});