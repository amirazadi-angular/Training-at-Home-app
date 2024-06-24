import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServise } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private authServise: AuthServise) { };

  onSubmit(form: NgForm) {
    this.authServise.regesterUser({
      email: form.value.email,
      password: form.value.password
    })
  };

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  };
  
}
