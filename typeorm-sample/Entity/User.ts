import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | null | undefined;

  @Column({ type: "varchar" })
  name: string | null | undefined;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[] | null | undefined;
}
