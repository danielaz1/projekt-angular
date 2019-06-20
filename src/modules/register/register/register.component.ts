import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonService } from 'src/services/person.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    description: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      number: [''],
      zip: ['']
    })
  });


  constructor(private fb: FormBuilder, private personService: PersonService) { }
  

  ngOnInit() {
  }

  onSubmit() {
    console.debug(this.profileForm.value);
    this.personService.addPerson(this.profileForm.value);
  }

}
