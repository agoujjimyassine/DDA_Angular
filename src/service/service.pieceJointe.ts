import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicePieceJointe {

  constructor(private http: HttpClient) {}

  getPiecesJointesByTypeDemandeId(object: any) {
    return this.http.get('http://localhost:3000/api/piecesJointes', object).pipe(
      map(resp => resp)
  );
}

}