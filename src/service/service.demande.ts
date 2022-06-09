import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceDemande {

  constructor(private http: HttpClient) {}

  /*getDemandesByTypeDemandeId(object: any) {
    return this.http.get('http://localhost:3000/api/demandes', object).pipe(
      map(resp => resp)
  );
}*/

getDemandesByTypeDemandeId() {
  return this.http.get('http://localhost:3000/api/demandes').pipe(
    map(resp => resp)
);
}

}