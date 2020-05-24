import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  genderSelected: string;
  statusSelected: string;
  bloodTypeSelected: string;

  bloodTypes: string[] = ['A0', 'A1', 'B2', 'AB4'];
  genders: string[] = ['Male', 'Female'];
  statuses: string[] = ['coach', 'competition manager'];

  hide1 = true;
  hide2 = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
