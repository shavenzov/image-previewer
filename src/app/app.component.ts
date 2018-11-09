import { Component, OnInit } from '@angular/core';
import { PicsumService } from './services/picsum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  picsumList: PicsumList;

  constructor( private picsum: PicsumService ){}

  ngOnInit(){
    this.picsum.getRandomList( 25 ).subscribe( ( list ) => this.picsumList = list, ( error ) => {

    } );
  }

}
