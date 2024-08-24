import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name: string = '';
  gender: string = '';
  contactNum: string ='';
  selectedDate: string = '';
  slots: Array<{ time: string, booked: boolean }> = [];
  selectedSlot: any = {};
  showSuccessPopup = false;

  loadSlots() {
    const savedAppointments = JSON.parse(localStorage.getItem(this.selectedDate) || '[]');
    console.log(savedAppointments);
    this.slots = [];

    for (let i = 10; i < 17; i++) {
      if(i == 13){
        continue;
      }
      const time = `${i}:00 - ${i + 1}:00`;
      const booked = savedAppointments.includes(time);
      this.slots.push({ time, booked });
    }
  }

  selectSlot(slot: any){
    this.selectedSlot =slot;
    slot.booked = true;
    this.selectedSlot.booked = true;
    
  }

  bookSlot() {

    const savedAppointments = JSON.parse(localStorage.getItem(this.selectedDate) || '[]');
    savedAppointments.push(this.selectedSlot.time);
    localStorage.setItem(this.selectedDate, JSON.stringify(savedAppointments));

    const userDetails = {
      name: this.name,
      gender: this.gender,
      contact : this.contactNum,
      date: this.selectedDate,
      slot: this.selectedSlot.time
    };

    localStorage.setItem(`${this.selectedDate}-${this.selectedSlot.time}`, JSON.stringify(userDetails));

    this.showSuccessPopup = true;

    //Resetting values
    this.name = '';
    this.gender= '';
    this.contactNum ='';
    this.selectedDate = '';
  }

  closePopup() {
    this.showSuccessPopup = false;
  }
}
