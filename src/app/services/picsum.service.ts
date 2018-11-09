import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PicsumService {

  readonly ENDPOINTS_ROOT = 'https://picsum.photos/';

  constructor( private http: HttpClient ) { }

  getList(): Observable<PicsumList>{
    return this.http.get<PicsumList>( `${this.ENDPOINTS_ROOT}list` ).pipe(
      map( ( list ) => list.map( ( item ) => ({
        ...item,
        preview_url: this.getLinkById( item.id ),
        url: this.getLinkById( item.id, item.width, item.height )
      }) ) )
    );
  }

  getRandomList( size: number ): Observable<PicsumList>{
    return this.getList().pipe( 
      map( ( list ) => { 
        let shuffled: PicsumList = list.slice();
        
        shuffled.forEach( ( item, i, a ) => {
          let j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          } );

       return shuffled.slice( 0, size );
     }
    ) );
  }

  getLinkById( id: number, width: number = 300, height?: number ): string{
    
    let link: string = `${this.ENDPOINTS_ROOT}${width}/`;

    if ( height != null ){
      link += `${height}/`;
    }

    return `${link}?image=${id}`;
  }
}
