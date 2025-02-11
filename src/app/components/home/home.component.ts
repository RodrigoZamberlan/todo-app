import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list: string[] = ["first task"];
  newTask: string = "";
  error: string = "";

  addNewTask() {
    if (this.newTask.length > 0) {
      if (!this.list.includes(this.newTask)) {
        this.list.push(this.newTask);
        this.newTask = "";
        this.error = "";
      } else {
        this.error = "This item already exist";
      }
    }
  }
}
