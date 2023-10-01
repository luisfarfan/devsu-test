import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { VerifyProductService } from 'src/app/core/application/verify-product.service';

export function validateIfValidProductId(
  service: VerifyProductService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value) => service.execute(value)),
      map((exists) => {
        return exists ? { idExists: true } : null;
      }),
      catchError(() => of(null))
    );
  };
}
