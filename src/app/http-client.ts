import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class HttpClient implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    req = req.clone({ headers: req.headers.set('Authorization', 'Basic cbd942d3-e33d-4163-84ab-d37f26e91d9c') });

    return next.handle(req);
  }
}