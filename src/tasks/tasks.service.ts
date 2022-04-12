import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable() //makes it a singleton that can be injected across the app
export class TasksService {
  //the tasks array is not editable directly because it is private
  private tasks: Task[] = [];
  //this makes getAllTasks a type of Task array
  public getAllTasks(): Task[] {
    //this exposes the tasks array
    return this.tasks;
  }
  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    //do something with status
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    // do something with search string
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }
    // return final result
    return tasks;
  }
  getTaskById(id: string): Task {
    //try to ge task
    //if not found throw an error (404) not found
    //otherwise return the found task
    // this.tasks.find((task) => task.id === id);
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found!`);
    }
    return found;
  }
  deleteTaskById(id: string): void {
    //since tasks is an array, we use an array method for deleting
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }

  updateTaskById(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
  public createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    console.log(task);
    return task;
  }
}
