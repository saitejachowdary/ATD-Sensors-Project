import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sensorState: string = '';
  sensorPositions = [
    { id: 1, top: "-10%", left: "36%" },
    { id: 2, top: "80%", left: "38%" },
    { id: 3, top: "100%", left: "-120%" },
    { id: 4, top: "160%", left: "-65%" },
    { id: 5, top: "160%", left: "37%" },
    { id: 6, top: "110%", left: "220%" },
    { id: 7, top: "400%", left: "-70%" },
    { id: 8, top: "330%", left: "37%" },
    { id: 9, top: "405%", left: "142%" },
  ];


  getColor(index: number): string {
    if (this.sensorState[index] === 'G') return 'green';
    if (this.sensorState[index] === 'R') return 'red';
    if (this.sensorState[index] === 'Y') return 'yellow';
    return 'gray';
  }
}

