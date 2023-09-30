import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() debounceTime = 250;

  @Input() placeholder = '';

  searchControl = new FormControl('');

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.searchControl.valueChanges.pipe(
      takeUntilDestroyed(),
      debounceTime(this.debounceTime),
      map((value) => value?.trim() || '')
    );
  }
}
