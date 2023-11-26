import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  showPassword = false;
  showSpinner = false;

  form = this.fb.nonNullable.group({
    email: ['admin@mail.com', [Validators.required, Validators.email]],
    password: ['admin123', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
     if (this.form.valid) {
      this.showSpinner = true;
      const { email, password } = this.form.getRawValue();
     
this.auth.login(email,password).subscribe(data=>{
 
if(this.auth.userEmail().length > 1){
  const usuario=data.filter(data=>data.email===email)
this.auth.userAvatar=usuario[0].avatar
console.log('usuarioavatar', usuario[0].avatar)
  this.router.navigate(['/admin']);
}else {

  this.form.markAllAsTouched();
      this.openSnackBar('Invalid credentials', 'Close');
      this.showSpinner = false;
}
})

     }}
   
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }
}
