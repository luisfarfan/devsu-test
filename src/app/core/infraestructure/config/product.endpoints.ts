import { environment } from 'src/environments/environment';

export class ProductEndpoints {
  static readonly getAll = `${environment.baseUrl}`;
  static readonly getById = (id: string) => `${environment.baseUrl}/${id}`;
  static readonly create = `${environment.baseUrl}`;
  static readonly update = () => `${environment.baseUrl}`;
  static readonly delete = (id: string) => `${environment.baseUrl}/${id}`;
}
