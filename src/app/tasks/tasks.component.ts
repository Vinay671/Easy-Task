import { Component, Input } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;

  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
    // this.dummyTasks = this.dummyTasks.filter((t) => t.id !== id);
  }

  onCancelAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    // this.dummyTasks.push({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId,
    //   ...taskData,
    // });
    this.isAddingTask = false;
  }
}
