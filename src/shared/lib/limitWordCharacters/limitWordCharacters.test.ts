import { limitWordCharacters } from './limitWordCharacters';

describe('limit Word Characters', () => {
  const word =
    'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.';
  test('width endDots', () => {
    expect(limitWordCharacters(word, 8, 'endDots')).toBe('React ap...');
  });
  test('width centerDots', () => {
    expect(
      limitWordCharacters(
        'BVoJfcLZ8WUQoxAnsj5kGnQ9T8wBseotVWeme4zMDimk',
        8,
        'centerDots',
      ),
    ).toBe('BVoJfc...Dimk');
  });
});
