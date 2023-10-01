import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeader } from './ui-table.models';
import { ParseColumnTypePipe } from '../pipes/parse-column-type.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ParseColumnTypePipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T = any> {
  @Input() data: T[] | null = [];
  @Input() headers: TableHeader<T>[] | null = [];

  @Output() edit: EventEmitter<T> = new EventEmitter<T>();
  @Output() delete: EventEmitter<T> = new EventEmitter<T>();
}
