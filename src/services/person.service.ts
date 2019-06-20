import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  address: IAddress;
}

export interface IAddress {
  city: string;
  street: string; 
  number: string;
  zip: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people: IUser[] = [{
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    address: {
      city: "Gdańsk",
      street: "Grunwaldzka",
      number: "100",
      zip: "80-000"
    },
    description: "Lorem ipsum"
  },
  {
    id: 2,
    firstName: "Jan2",
    lastName: "Kowalski2",
    address: {
      city: "Gdańsk",
      street: "Grunwaldzka",
      number: "120",
      zip: "80-000"
    },
    description: "Lorem ipsum2"
  }];

  constructor() { }

  addPerson(person: IUser) {
    person.id = this.people[this.people.length - 1].id + 1;
    this.people.push(person);
  }

  removePerson(personId: number) {
    let personInTable = this.getPerson(personId);
    this.people.splice(this.people.indexOf(personInTable), 1);
  }
  
  updatePerson(person: IUser) {
    let personInTable = this.getPerson(person.id);
    this.people[this.people.indexOf(personInTable)] = person;
  }

  getPerson(personId: number) {
    return this.people.find(x => x.id == personId);
  }

}
