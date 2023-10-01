import { formatIsoDate } from './utils';

it('should return a formatted date string for a valid ISO string input', () => {
  const isoString = '2022-01-01T00:00:00.000Z';
  const result = formatIsoDate(isoString);
  expect(result).toEqual('2022-01-01');
});
