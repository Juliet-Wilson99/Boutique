import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    {path: 'admin-login', component: AdminLoginComponent},
    {path: 'bookings', component: BookingsComponent},
    // { path: '**', redirectTo: '/home' }
];
