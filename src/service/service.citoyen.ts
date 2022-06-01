import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Citoyen } from 'src/model/model.citoyen';

@Injectable()
export class ServiceCitoyen {

  constructor(private http: HttpClient) {}

  getCitoyenByCin(cin: string) {
    return this.http.get('http://localhost:3000/api/citoyens/'+cin).pipe(
      map(resp => resp)
  );
}

  saveCitoyen(citoyen : Citoyen) {
  return this.http.post('http://localhost:3000/api/citoyens', citoyen).pipe(
    map(resp => resp)
);
}

  updateCitoyen(citoyen : Citoyen) {
  return this.http.put('http://localhost:3000/api/citoyens', citoyen).pipe(
    map(resp => resp)
);
}

}