import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use default debounceTime of 250ms when no debounceTime input is provided', () => {
    expect(component.debounceTime).toBe(250);
  });

  it('should validate emit last debounce value', () => {
    component.searchControl.setValue('value1');
    component.searchControl.setValue('value2');
    component.searchControl.setValue('value3');

    const spyEmit = spyOn(component.search, 'emit').withArgs('value3').and.callThrough();

    // Wait for debounce time to pass
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyEmit).toHaveBeenCalledWith('value3');
    });
  });
});
