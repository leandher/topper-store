import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class HttpClient implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Basic cbd942d3-e33d-4163-84ab-d37f26e91d9c') });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}