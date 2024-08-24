import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService){}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'test') {
      this.authService.setLoggedIn(true);
      this.router.navigate(['/bookings']); 
    } else {
      alert('Login failed');
    }
  }
}
