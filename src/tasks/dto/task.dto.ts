import { IsNotEmpty } from 'class-validator';
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Description should not be empty' })
  description: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus, {
    message: 'Status must be PENDING, IN_PROGRESS, or DONE',
  })
  status?: TaskStatus;
}
