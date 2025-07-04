import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../app';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
   imports: [CommonModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

   @Input() tasks: Task[] = [];
  @Output() remove = new EventEmitter<number>();

}
