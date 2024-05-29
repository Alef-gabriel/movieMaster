import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  director: string;

  @Column({ nullable: true })
  releaseDate: Date;

  @Column({ nullable: true })
  duration: number;
}
