import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


export  type Task = {
  id: number;
  descripcion: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, TaskInput, TaskList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';
  tasks: Task[] = [];
  nextId: number = 1;

  addTask(descripcion: string): void {
    if (descripcion.trim()) {
      const newTask: Task = {
        id: this.nextId++,
        descripcion: descripcion.trim()
      };
      this.tasks.push(newTask);
      descripcion = '';
    }
  }

  removeTask(id: number): void {
  this.tasks = this.tasks.filter(task => task.id !== id);
}
}
