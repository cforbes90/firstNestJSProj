import { IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
  //will add validation later: Using class-validator and class-transformer
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
