
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from "./category.entity"
@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  // @ManyToOne(() => Category, (category) => category.name)
  @Column()
  category: number;
}