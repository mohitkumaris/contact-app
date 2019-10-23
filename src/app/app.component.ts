import { Component, OnInit } from '@angular/core';
import { ContactCard } from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

      contactList = [
        { name:  'Mohit', email: 'm@g.com', jobTitle: 'TL' },
        { name:  'Mohit1', email: 'm1@g.com', jobTitle: 'TL1' },
        { name:  'Mohit2', email: 'm2@g.com', jobTitle: 'TL2' },
        { name:  'Mohit3', email: 'm3@g.com', jobTitle: 'TL3' },
      ];

      constructor() {}

      ngOnInit() {

      }
}
