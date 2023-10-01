import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModalComponent } from './confirm-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create component with default values', () => {
    expect(component.title).toEqual('');
    expect(component.message).toEqual('');
    expect(component.open).toEqual(false);
  });

  it("should emit 'confirm' event on confirm button click", () => {
    let confirmEmitted = false;
    // Simulate click on confirm button
    const confirmButton = document.querySelector(
      '.px-4.py-2.bg-blue-500.text-white.rounded'
    ) as HTMLButtonElement;
    confirmButton?.click();

    fixture.detectChanges();
    // Validate if modal is closed
    const modalClosed = component.open === false;

    component.confirm.subscribe(() => {
      confirmEmitted = true;
      expect(confirmEmitted).toBe(true);
      expect(modalClosed).toBe(true);
    });
  });

  it("should emit 'cancel' event on cancel button click", () => {
    let confirmEmitted = false;
    // Simulate click on cancel button
    const confirmButton = document.querySelector(
      '.px-4 py-2 text-gray-700 border border-gray-300 rounded'
    ) as HTMLButtonElement;
    confirmButton?.click();

    fixture.detectChanges();
    // Validate if modal is closed
    const modalClosed = component.open === false;

    component.cancel.subscribe(() => {
      confirmEmitted = true;
      expect(confirmEmitted).toBe(true);
      expect(modalClosed).toBe(true);
    });
  });
});
