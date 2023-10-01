import { environment } from 'src/environments/environment';
import { ProductEndpoints } from './product.endpoints';

describe('ProductEndpoints', () => {
  it('should return the correct URL for all Product Endpoints', () => {
    const productId = '5';

    expect(ProductEndpoints.getAll).toEqual(environment.baseUrl);
    expect(ProductEndpoints.create).toEqual(environment.baseUrl);
    expect(ProductEndpoints.delete(productId)).toEqual(
      environment.baseUrl + `?id=${productId}`
    );
    expect(ProductEndpoints.update()).toEqual(environment.baseUrl);
    expect(ProductEndpoints.verifyId(productId)).toEqual(
      environment.baseUrl + `/verification?id=${productId}`
    );
  });
});
