import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern for validation

  constructor(private http: HttpClient, private router: Router,private formsModule:FormsModule) {}

  onSubmit() {
    if (this.emailPattern.test(this.email) && this.password === this.confirmPassword) {
      this.http.post('http://localhost:5046/api/Users/Registration', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }).subscribe(response => {
        // Handle successful registration here
        window.alert('Registration successfully!');
        this.router.navigate(['/login']);
      
      }, error => {
        // Handle registration error here
        console.error('Registration error', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
