import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task.model';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks: Task[] = [];
  newTask: Task["description"] = "";
  error: string = "";

  addNewTask() {
    if (this.newTask.trim().length === 0) {
      this.error = "The task description cannot be empty";
      return;
    }

    if (this.tasks.some((task) => task.description === this.newTask)) {
        this.error = "This task already exist on the list";
        return;
    }
    
    this.tasks.push({description: this.newTask, isDone: false});
    this.newTask = "";
    this.error = "";
  }
}
