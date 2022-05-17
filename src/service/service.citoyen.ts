import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceCitoyen {

  constructor(private http: HttpClient) {}

  getCitoyenByCin(cin: string) {
    return this.http.get('http://localhost:3000/api/citoyens/'+cin).pipe(
      map(resp => resp)
  );
}

}