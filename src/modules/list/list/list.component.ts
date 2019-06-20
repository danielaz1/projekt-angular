import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/services/person.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: any[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.items = this.personService.people;
  }

  removeItem(personId: number) {
    this.personService.removePerson(personId);
  }

}
