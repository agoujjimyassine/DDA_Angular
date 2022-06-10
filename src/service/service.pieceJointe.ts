import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicePieceJointe {

  constructor(private http: HttpClient) {}

  getPiecesJointesByTypeDemandeId(id: string) {
    return this.http.get('http://localhost:3000/api/piecesJointes/'+id).pipe(
      map(resp => resp)
  );
}

}