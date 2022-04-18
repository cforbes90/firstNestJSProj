import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task, TaskStatus } from './task-status.enum';
import { title } from 'process';

@Controller('tasks') // specifies endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // //makes getAllTasks() a task array type.
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   //if we have any filters defined, call tasksSErvice.getTaskswithFilters otherwise just get all tasks
  //   if (Object.keys(filterDto).length) {
  //     //run through funciton
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //     //return 'hello box of choco'
  //   }
  // }
  // @Get('/:id')
  // //passing in a parameter called 'id' and declaring its type
  // getTaskByID(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // //@body decorater speaks specifically to the body
  // createTask(
  //   @Body() createTaskDto: CreateTaskDto,
  //   // @Body('title') title: string,
  //   // @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskById(id, status);
  // }
}
