import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormControl } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputComponent],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create InputComponent with all inputs provided', () => {
    component.control = new FormControl();
    component.label = 'Nombre';
    component.type = 'text';
    component.inputId = 'input-name';
    component.placeholder = 'Escriba el nombre';

    expect(component).toBeTruthy();
    expect(component.control).toBeDefined();
    expect(component.label).toBe('Nombre');
    expect(component.type).toBe('text');
    expect(component.inputId).toBe('input-name');
    expect(component.placeholder).toBe('Escriba el nombre');
  });
});
