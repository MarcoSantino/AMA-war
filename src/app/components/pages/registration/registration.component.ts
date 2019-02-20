import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  sendForm(): void {
    this.userService.setUser({
      name: this.registrationForm.value.name,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
      submitDate: new Date()
    });
  }

  private initForm(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    });
  }
}
