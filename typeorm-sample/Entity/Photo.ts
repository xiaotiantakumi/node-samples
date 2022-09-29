import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number | null | undefined;

  @Column({ type: "varchar" })
  url: string | null | undefined;

  @ManyToOne(() => User, (user) => user.photos)
  user: User | null | undefined;
}
