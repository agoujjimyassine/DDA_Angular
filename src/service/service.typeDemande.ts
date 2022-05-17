import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceTypeDemande {

  constructor(private http: HttpClient) {}

  getTypesDemandes() {
    return this.http.get('http://localhost:3000/api/typesDemandes').pipe(
      map(resp => resp)
  );
}

}