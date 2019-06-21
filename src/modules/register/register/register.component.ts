import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonService } from 'src/services/person.service';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   zipcodeRegex = /[0-9]{2}\-[0-9]{3}/;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    description: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('[0-9]+[A-Za-z]*')]],
      zip: ['', [Validators.required, CustomValidators.patternValidator(this.zipcodeRegex, {zipcodeValid: true})]]
    })
  });


  constructor(private fb: FormBuilder, private personService: PersonService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.personService.addPerson(this.profileForm.value);
    alert('Thanks for submitting!');
  }

}
