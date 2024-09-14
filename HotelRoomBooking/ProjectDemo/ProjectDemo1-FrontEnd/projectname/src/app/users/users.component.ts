import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Define the type according to your data structure
  private apiUrl = 'http://localhost:5046/api/Users/GetUsers'; // Your API URL

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      response => {
        this.users = response.users; // Adjust according to your response structure
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  editUser(id: number): void {
    console.log('Navigating to edit user with ID:', id); // For debugging
    this.router.navigate(['/dashboard/edituser', id]); // Correct route navigation
  }

  deleteUser(id: number): void {
    if(confirm("are you want to delete the user?"))
    this.http.delete(`http://localhost:5046/api/Users/DeleteUser/${id}`)
    .subscribe(
      () => this.loadUsers(),
      
    );
  }
  
}
