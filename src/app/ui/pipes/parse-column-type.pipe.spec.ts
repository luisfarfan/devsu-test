import { formatIsoDate } from 'src/app/presentation/shared/utils';
import { ParseColumnTypePipe } from './parse-column-type.pipe';

describe('ParseColumnTypePipe', () => {
  it('create an instance', () => {
    const pipe = new ParseColumnTypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the input value when the type is image', () => {
    const pipe = new ParseColumnTypePipe();
    const value = 'example image';
    const type = 'image';
    const result = pipe.transform(value, type);
    expect(result).toEqual(value);
  });

  it('should return a formatted date when the type is iso date', () => {
    const pipe = new ParseColumnTypePipe();
    const date = new Date()
    const value = date.toISOString();
    const type = 'date';
    const result = pipe.transform(value, type);
    const formatedIsoDate = date.toLocaleDateString();
    expect(result).toEqual(formatedIsoDate);
  });
});
