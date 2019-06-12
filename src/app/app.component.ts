import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;
  formElement={
    firstName: '',
    email: '',
    password: ''
  }
  constructor() { 
    this.registerFormFunc();
  }

  registerFormFunc(): void{
      this.registerForm = new FormGroup({
          firstName: new FormControl(this.formElement.firstName, [Validators.required]),
          email: new FormControl(this.formElement.email, [Validators.required]),
          password: new FormControl(this.formElement.password, [Validators.required]),
      });
    }
    
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
  }
}


  
