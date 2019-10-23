import { Component, Input } from '@angular/core';
import { ContactCard } from '../model';

@Component({
   // tslint:disable-next-line: component-selector
   selector  : 'contact-card',
   templateUrl : './contactCard.component.html',
   styles: []
})

export class ContactCardComponent {

  @Input() contact: ContactCard;

}
