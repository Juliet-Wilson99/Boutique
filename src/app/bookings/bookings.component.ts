import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent{
  // @Input() selectedDate!: string; // Input from the parent component or service
  appointments: Array<{ name: string, gender: string, contact: string, slot: string }> = [];
  selectedDate: string = '';
  savedAppointments: any ={};
  // sav :any =[];

  // ngOnInit() {
  //   this.loadAppointments();
  // }

  loadAppoinments(){
    this.appointments = [];
    this.loadSlots();
  }
  
  loadSlots() {
  //   const savedAppointments = JSON.parse(localStorage.getItem(this.selectedDate+'-booked') || '[]');
  //   console.log(savedAppointments);
  //   this.appointments = savedAppointments.filter((appointment: any) => appointment.date === this.selectedDate);
  // 
    
    for (let i = 10; i < 17; i++) {
      if(i == 13){
        continue;
      }
      const time = `${i}:00 - ${i + 1}:00`;
      this.savedAppointments = JSON.parse(localStorage.getItem(`${this.selectedDate}-${time}`) || '{}');
      if(this.savedAppointments.name){
        console.log(this.savedAppointments);
        this.appointments.push(this.savedAppointments);
      }
    }
    console.log(this.appointments);
}
}
