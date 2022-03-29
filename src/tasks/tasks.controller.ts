import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks') // specifies endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  //makes getAllTasks() a task array type.
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
    //return 'hello box of choco'
  }
}
