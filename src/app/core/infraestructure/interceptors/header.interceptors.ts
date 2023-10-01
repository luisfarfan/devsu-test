import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const headersInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (req.method === 'JSONP') {
    return next(req);
  }
  const authReq = req.clone({
    headers: req.headers
      .set('authorId', environment.authorId)
  });
  return next(authReq);
};
