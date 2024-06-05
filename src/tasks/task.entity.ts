import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum', // Define que esta columna es de tipo enumerado (enum).
    enum: TaskStatus, // Asigna el enum `TaskStatus` a esta columna.
    default: TaskStatus.PENDING, // Establece el valor predeterminado para esta columna como `PENDING`.
  })
  status: TaskStatus;
}
