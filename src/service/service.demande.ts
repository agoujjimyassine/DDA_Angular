import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceDemande {

  constructor(private http: HttpClient) {}

  getDemandesByTypeDemandeId(id: string) {
    return this.http.get('http://localhost:3000/api/demandes/'+id).pipe(
      map(resp => resp)
  );
}

}