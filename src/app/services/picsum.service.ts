import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service for getting images from picsum.photos resource
 */

@Injectable()
export class PicsumService {

  readonly ENDPOINTS_ROOT = 'https://picsum.photos/';

  constructor( private http: HttpClient ) { }

  /**
   * Requests all accesible photos
   * @returns Observable of PicsumList
   */
  getList(): Observable<PicsumList>{
    return this.http.get<PicsumList>( `${this.ENDPOINTS_ROOT}list` ).pipe(
      map( ( list ) => list.map( ( item ) => ({
        ...item,
        preview_url: this.getLinkById( item.id ),
        url: this.getLinkById( item.id, item.width, item.height )
      }) ) )
    );
  }

  /**
   * Returns Observable of random `size` photos
   * @param size - number of random photos to return
   * @returns Observable of PicsumList
   */
  getRandomList( size: number ): Observable<PicsumList>{
    return this.getList().pipe( 
      map( ( list ) => { 
        
        const randomList: PicsumList = new Array( size );

        for( let i: number = 0; i < size; i ++ ){
          const randomIndex: number = Math.round( Math.random() * ( list.length - 1 ) );
          randomList[ i ] = list.splice( randomIndex, 1 )[ 0 ];
        }

       return randomList;
     }
    ) );
  }

  /**
   * Creates link to picture with special width & height
   * @param id - picture id 
   * @param width - picture width
   * @param height - picture height
   * @returns link to picture 
   */
  getLinkById( id: number, width: number = 300, height?: number ): string{
    
    let link: string = `${this.ENDPOINTS_ROOT}${width}/`;

    if ( height != null ){
      link += `${height}/`;
    }

    return `${link}?image=${id}`;
  }
}
