import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceScanCin {

  constructor(private http: HttpClient) {}

  scanCin() {
    return this.http.get('http://localhost:3000/api/scanCin').pipe(
      map(resp => resp)
  );
}

}