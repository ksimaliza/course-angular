import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInput {
  task = '';
  @Output() add = new EventEmitter<string>();

  emitirTaskAdd() {
    if (this.task.trim() === '') return;
    this.add.emit(this.task);
    this.task = '';
  }

}
