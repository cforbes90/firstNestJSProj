import { TaskStatus } from './task-status.enum';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  //makes an auto generated id and dtreat it as a primary key
  // uuid argument uses long uuids instead of numbering 1- whatever
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;

  @Column()
  description: string;
  @Column()
  status: TaskStatus;
}
