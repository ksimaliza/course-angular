import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../app';


@Component({
  selector: 'app-task-item',
   imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {

  @Input() task!: Task;
  @Output() remove = new EventEmitter<number>();

}
