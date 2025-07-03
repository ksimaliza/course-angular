import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


type Task = {
  id: number;
  descripcion: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';

  descripcion: string = '';
  tasks: Task[] = [];
  nextId: number = 1;

  addTask(): void {
    if (this.descripcion.trim()) {
      const newTask: Task = {
        id: this.nextId++,
        descripcion: this.descripcion.trim()
      };
      this.tasks.push(newTask);
      this.descripcion = '';
    }
  }

  removeTask(id: number): void {
  this.tasks = this.tasks.filter(task => task.id !== id);
}
}
