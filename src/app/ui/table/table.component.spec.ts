import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableHeader } from './ui-table.models';
import { Product } from 'src/app/core/domain';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with data and headers', () => {
    const testData: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: 'Logo 1',
        date_release: '2022-01-01',
        date_revision: '2022-01-01',
      },
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: 'Logo 1',
        date_release: '2022-01-01',
        date_revision: '2022-01-01',
      },
    ];
    const headers: TableHeader<Product>[] = [
      {
        accesor: 'id',
        label: 'ID',
      },
      {
        accesor: 'logo',
        label: 'Logo',
        type: 'image',
      },
      {
        accesor: 'name',
        label: 'Nombre del producto',
      },
      {
        accesor: 'description',
        label: 'Descripción',
      },
      {
        accesor: 'date_release',
        label: 'Fecha de liberación',
        type: 'date',
      },
      {
        accesor: 'date_revision',
        label: 'Fecha de reestructuración',
        type: 'date',
      },
    ];

    component.data = testData;
    component.headers = headers;

    expect(component.data).toEqual(testData);
    expect(component.headers).toEqual(headers);

    fixture.detectChanges();

    const element = fixture.nativeElement;
    const tableRows = element.querySelectorAll('tr');
    expect(tableRows.length).toBe(testData.length + 1);

    const headerRow = tableRows[0];
    const headerCells = headerRow.querySelectorAll('th');
    expect(headerCells.length).toBe(headers.length + 1); // add +1 for the actions column
    for (let i = 0; i < headers.length; i++) {
      expect(headerCells[i].textContent.trim()).toBe(headers[i].label);
    }

    for (let i = 0; i < testData.length; i++) {
      const dataRow = tableRows[i + 1];
      const dataCells = dataRow.querySelectorAll('td');
      expect(dataCells.length).toBe(headers.length + 1); // add +1 for the actions column
    }
  });
});
