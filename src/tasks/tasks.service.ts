import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable() //makes it a singleton that can be injected across the app
export class TasksService {
  //the tasks array is not editable directly because it is private
  private tasks: Task[] = [];
  //this makes getAllTasks a type of Task array
  public getAllTasks(): Task[] {
    //this exposes the tasks array
    return this.tasks;
  }
}
