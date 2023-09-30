import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeader } from './ui-table.models';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() data: T[] | null = [];
  @Input() headers: TableHeader<T>[] | null = [];
}
