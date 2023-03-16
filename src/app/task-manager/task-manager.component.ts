import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { CardInputComponent } from './card-input.component';

@Component({
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent {
  inputValue: string = '';
  @ViewChild('textInput') textInput!: ElementRef;
  tasks: string[] = [];
  tasksObservable: Observable<string[]>;

  constructor() {
    this.tasksObservable = of(this.tasks);
  }

  addCard() {
    if (this.inputValue !== '') {
      this.tasks.push(this.inputValue);
      this.inputValue = '';
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addCard();
    }
  }
}
