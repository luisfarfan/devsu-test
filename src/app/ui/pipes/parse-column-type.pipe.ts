import { Pipe, PipeTransform } from '@angular/core';
import { TypeColumn } from '../table/ui-table.models';

@Pipe({
  name: 'parseColumnType',
  standalone: true,
})
export class ParseColumnTypePipe implements PipeTransform {
  transform(value: any, type: TypeColumn | undefined): unknown {
    switch (type) {
      case 'date':
        return new Date(value as string).toLocaleDateString();
      case 'image':
        return value;
      case 'text':
        return value;
      default:
        return value;
    }
  }
}
