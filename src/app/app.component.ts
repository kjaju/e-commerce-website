import { Component } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Item {
  name?: string,
  
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  item$: Observable<Item[]>;
  constructor(firestore: Firestore) {
    const collectionitems = collection(firestore, 'items');
    this.item$ = collectionData(collectionitems);
  }
}


